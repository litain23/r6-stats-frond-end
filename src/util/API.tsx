import { RANKAPI, errorMessageCode } from "./type";
import { StreamIterator } from "./Stream";
import { Observable, Subscriber } from 'rxjs';


// const baseURL = (process.env.NODE_ENV !== "production")? "http://localhost:5000" : "http://ec2-52-78-165-226.ap-northeast-2.compute.amazonaws.com:8080/"
const baseURL = "http://ec2-52-78-165-226.ap-northeast-2.compute.amazonaws.com:8080"
const baseURLWithAPIVersion = baseURL + "/api/v1/" 


type platform = "uplay" | "psn" | "xbl"

enum queryType {
    rank = "/rank", /// all ranks info.
    operator = "/operator/", /// operators info.
    generalpvp = "/general/", /// general pvp.
    casualpvp = "/casualpvp/", /// all casual pvp
    rankpvp = "/rankpvp/", /// all ranks pvp (total)
}


export interface BasicErrorFormat {
    status: errorMessageCode;
    message: any;
}

/**
 * fetch-wrapper 용 함수입니다. Fetch후 제시된 타입으로 json object로 캐스팅합니다.
 * @param url fetch할 URL입니다.
 * @param init request용 info입니다. 
 */
 // TO-DO: API여러개 한번에 처리 및 에러 핸들링 관련. - 모나드사용. 에러처리에 조금더 유연할 수 있도록.
export async function API<SUCCESS, FAILURE extends BasicErrorFormat = BasicErrorFormat>(url: string ,init?: RequestInit): Promise<[SUCCESS|null,FAILURE|null]>{

    try {
    /** URL의 상대경로, 절대경로 모두 허용할 수 있도록 URL 클래스를 이용해 주었습니다 */
        const {href} = new URL(url, baseURLWithAPIVersion);
        const response = await fetch(href, init);

        if (!response.ok) {
            const errorWrapped = await response.json() as Promise<FAILURE>
            const failure = await errorWrapped;
            return [null, failure]
        }

        const wrapped = await response.json() as Promise<SUCCESS>
        const success = await wrapped;
        return [success, null]; 

    } catch (e) {
        const unexpectedFailure = {status: 0, message:e} as FAILURE;
        return [null, unexpectedFailure]
    }

}


export function APIObservable<T, E extends BasicErrorFormat = BasicErrorFormat>(url:string , init?: RequestInit) { 


    async function fetchLogic<T, E extends BasicErrorFormat = BasicErrorFormat>(subscriber : Subscriber<T> ) {
        try {
            const {href} = new URL(url, baseURLWithAPIVersion);
            const response = await fetch(href, init);
            if (!response.ok) { 
                if (response.status === 400 || response.status === 401) {
                    const json = await response.json() as E
                    subscriber.error({ message: json.message, status: json.status } as E);
                } else {
                    const stauts = (response.status===404) ? 404 : 0
                    subscriber.error({ message: response.statusText, status: stauts } as E);
                }
            } else {
                const json = await response.json() as T
                subscriber.next(json);
                subscriber.complete();
            }
        } catch (e) {
            subscriber.error({ message: e, status: 0 } as E);
        }
    }

    return new Observable<T>( subscriber => {
        fetchLogic<T,E>(subscriber);
    })
}

export async function GETRANKS(id: string, platform: platform, all?: boolean) {
    const resultURL = `${baseURL + queryType.rank} + ${platform} +/${id} + ${all? "/all" : ""}`
    console.log(resultURL)
    const result = await API<RANKAPI>(resultURL);
    return result;
// http://ec2-52-78-165-226.ap-northeast-2.compute.amazonaws.com:8080/api/v1/rank/uplay/Kooklxs/all
}



interface Queue {
    type : "request" | "map" | "do" | "catch",
    callbackOnRequest?: (success:(response:any)=>void, fail:(response:any, failedURL:string)=>void) => void;
    callbackOnMap?: (save: (processedData:any) => void, prevData: any)=>void; //save하는함수 받기.
    callbackOnDo?: (passData:(data:any)=> void, prevData:any)=>void;
}


export class APISTREAM {

    private queue: Queue[];  
    private busy:boolean;
    private _catch!: (errorInfo:any, failedURL?:string) =>void;

    //https://stackoverflow.com/questions/39185109/custom-error-response-handling-with-moya-rxswift

    private _onNext!: (value:any) => void;
    private _onCompleted!: () => void;
    private _onError!: <T>(error:T)=>void;

    private constructor() {
        this.queue = [];
        this.busy = false;
    }

    static stream() {
        return new APISTREAM();
    }

    static all( ...a :((stream : APISTREAM)=>void)[]) {
        
    }


    static zip(...APISTREAM: APISTREAM[]) {
        let newQueueList: Queue[] = [] as Queue[];
        for ( let eachObject of APISTREAM) {
            eachObject.queue.flatMap((value) => {
                newQueueList.push(value);
            })
        }
    }

    request(url: string, init?: RequestInit) {

        this.queue.push({
            type:"request",
            callbackOnRequest: async (success,fail) => {
                try {
                    const {href} = new URL(url, baseURLWithAPIVersion);            
                    const response = await fetch(href,init);
                    const json = await response.json();
                    if (!response.ok) {
                        fail(json, url);
                    } else {
                        success(json);
                    }
                } catch (e) {
                    fail({status:"unknwon", message: e}, url)
                }
            }
        })
        // this.exec();
        return this;

    }

    do<T>(callback: (value:T) => void ) {
        this.queue.push({
            type:"do",
            callbackOnDo: (save,prevData) => {
                callback(prevData as T)
                save(prevData);
            }
        })
        // this.exec();
        return this;
    }

    catch<E extends BasicErrorFormat = BasicErrorFormat>(callback:(errorInfo:E, failedURL?:string) =>void) { 
        this._catch = callback;
        return this;
    }

    /** To-Do : 추가사항. */
    // map<T>(wrapped: (value:T) => T) {

    //     this.queue.push({
    //         type: "map",
    //     // callbackOnMap: (save, prevData) => { //위에서 처리된값들 가져와야함.
    //         callbackOnMap: (data, prevData) => { //위에서 처리된값들 가져와야함.
    //             this.busy = false;
    //             this.exec(wrapped(prevData));
    //             save(wrapped(prevData))
    //         }
    //     })
    //     this.exec();
    //     return this;
    // }


    /**    // subscribe(
    //     abc: {onNext: (data:any) => void, onError: (error:any) => void, onCompleted?: () => void}
    // ) {

    // }
    
    // subscribe(onNext:((data:any)=>void)){
    //     onNext("abc");
    // }
 */
    
    private exec(response? : any, url?: string): this | void {
        if (this.busy) return this; // 바쁘니까 다음에 다시 봅시다.
        var Q = this.queue.shift();
        let self = this;
        if (Q) {
            this.busy = true;

            switch(Q.type) {
                case "request":
                    Q.callbackOnRequest!(
                        (passData:any)=> {
                            self.busy = false;
                            self.exec(passData);
                        },
                        (errorData:any, url: string) =>{
                            self.busy = false;
                            if (self._catch) {
                                self._catch(errorData,url);
                            }
                        }
                    )
                break;
                case "map":
                    Q.callbackOnMap!(
                        (mappedData:any)=>{
                            self.busy = false;
                            self.exec(mappedData);
                        },
                        response
                    )
                break;
                case "do":
                    Q.callbackOnDo!(
                        (passedData:any)=>{
                            self.busy = false;
                            self.exec(passedData);
                        },
                        response
                    )
                    break;
            }
        }
    }


    subscribe(callback:{ onNext: ()=>void, onError: ()=>void, onCompleted: ()=>void}){
        this._onNext = callback.onNext;
        this._onError = callback.onNext;
        this._onCompleted = callback.onCompleted;
        this.exec(); // next call! 
        //how to set type?
    }


}




export function APIMaker<T,E extends BasicErrorFormat = BasicErrorFormat>(url :string, init?: RequestInit) : StreamIterator<T,E> {

    return StreamIterator.create<T,E>( async (stream) => {

        try {
            const {href} = new URL(url, baseURLWithAPIVersion);
            const response = await fetch(href, init);

            if (!response.ok) {
                if (response.status === 401 || response.status === 400 ) {
                    const errorWrapped = await response.json();
                    const failure = await errorWrapped;
                    stream.error(failure);
                } else {
                    stream.error({message:response.statusText, status : response.status} as any);
                }
            } else {
                const wrapped = await response.json() as Promise<T>
                const success = await wrapped;
                stream.next(success);
            }
            // promise를 까서줘야함?
        } catch (e) {
            stream.error(e);
        }
    })

}



