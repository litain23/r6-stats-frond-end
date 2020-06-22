
class StreamIterator<T, E> {
    // 스트림chunk를 담습니다.
    private queue : ((stream : Stream<T,E>) => void)[]
    private block : boolean;
    private busy : boolean;
    private out_onNext!: (value: T)=>void;
    private out_onError!: (value : E)=>void;
    private out_onComplete!: ()=>void;

    //any? how?
    private constructor(streamChunk: ((stream : Stream<T,E>) => void) | StreamIterator<any,any>[] ) {
    // private constructor(streamChunk : (stream : Stream<T,E>) => void) | StreamIterator<T,R>){
        this.queue = [];
        this.block = false;

        if (Array.isArray(streamChunk)) {

            for (let streamchunk of streamChunk) {
                if (streamchunk instanceof StreamIterator) {
                    this.queue = [...this.queue, ...streamchunk.queue];
                }
            }
            // this.queue = streamChunk;
            // //if it is array면 multiple처리될떄까지 기다려라.
            // //multiple request한꺼번에. onNext처리해주세요.
            // this.block = true;
        } else {
            this.queue = [streamChunk];
        }
        this.busy = false;
        this.goNext = this.goNext.bind(this);
        this.sendData = this.sendData.bind(this);
        this.catchError = this.catchError.bind(this);
        this.setBusy = this.setBusy.bind(this);
    }

    static create<T, E>( streamChunk : ((stream : Stream<T,E>) => void) ) : StreamIterator<T,E> {
        return new StreamIterator<T,E>(streamChunk);
    }
   

    // Observable<[ObservedValueOf<O1>, ObservedValueOf<O2>, ObservedValueOf<O3>, ObservedValueOf<O4>]>

    // static zip<O1,O2,O3,R>(v1: O1, v2: O2, v3: O3): Observable<R>;
    //promise.all인데 다처리되는거.

    // zip<O extends StreamIterator<any,any>>(...observables: (O | ((...values: ObservedValueOf<O>[]) => R))[]): Observable<ObservedValueOf<O>[] | R>
    // static all<T1 extends StreamIterator<T1,E> ,T2,T3,E>(v1: T1,v2: T2, v3: T3 ): StreamIterator<[T1,T2,T3],E> {

        // v1.queue
        // return 
        // return StreamIterator.merge(
        //         StreamIterator.create<T1,E>(),
        //         StreamIterator.create<T2,E>(),
        //         StreamIterator.create<T3,E>(),
        //     )
    // }

    
    // map<C>(callbackFn: (value: T) => C): StreamIterator<C> {
        // return StreamIterator.create<C>()
    // }

    // flatMap<C>(callbackFn: (value: T) => StreamIterator<C>): StreamIterator<C> {
    //     return 
    // }
    //Auth를 먼저처리한다고하면
    //Auth=>flatMap으로처리=> 
    subscribe( cb: {onNext:(value : T)=>void, onError:(error : E)=>void, onComplete:()=>void } ){

        this.out_onNext = cb.onNext;
        this.out_onError = cb.onError;
        this.out_onComplete = cb.onComplete;

        let q = this.queue.shift();
        if (q) {
            this.busy = true;
            q(new Stream<T,E>(this.goNext, this.sendData, this.catchError, this.setBusy))
        }
    }

    private goNext(value : T) {

        if (this.busy) return;

        if (this.block) {
            this.out_onNext(value);
        }
        let q = this.queue.shift();
        if (q) {
            this.busy = true;
            q(new Stream<T,E>(this.goNext, this.sendData, this.catchError, this.setBusy))
        } else {
            // this.out_onComplete();
        }
    }

    private sendData(_data: T){
        //response.
        //데이터를 받았으면 busy상태를 free하게해줄의무가있다?
    }

    private catchError(error : E) {
        this.out_onError(error);
    }

    private setBusy(busy: boolean) {
        this.busy = busy;
    }
}



class Stream<T, E>  {
    // extends Promise<any>

    private streambleIterator_goNext : (value: T)=>void;
    // private streambleIterator_sendData: (data:T)=>void;
    private streambleIterator_catchError: (error:E)=>void;
    private streambleIterator_setBusy : (busy:boolean)=>void;

    constructor(goNext: (value: T)=>void, _sendData: (data:T)=>void ,catchError: (error:E)=>void, setBusy: (busy:boolean)=> void) {
        // streamConfig!(this); //실제로직이시작되는곳.
        this.streambleIterator_goNext = goNext;
        // this.streambleIterator_sendData = sendData;
        this.streambleIterator_catchError = catchError;
        this.streambleIterator_setBusy = setBusy;
    }

    // 뭘받아야하는가
    // Observable에 있는 PLAY를 해봅니다
    next( value : T ){
        this.streambleIterator_setBusy(false);
        this.streambleIterator_goNext(value);
    }
    complete(){
        // this.streambleIterator_goNext();
    }
    error(error: E){
        this.streambleIterator_catchError(error);
    }
}


export { StreamIterator , Stream }

// static all<T1,T2, E> (v1 : StreamIterator<T1,E>, v2: StreamIterator<T2,E>) : StreamIterator<[T1,T2],E> {
//     return StreamIterator.create<[T1,T2],E>(()=>{});
//     // return new StreamIterator<unknown,unknown>(streamChunks);
//     //
//     //StreamIterator.all
// }
// 

// StreamIterator.all(
//     a,
//     a,
//     a,
//     a,
//     a,
// ).subscribe(

// )

// function all<T1, T2, E> (v1 : StreamIterator<T1,E>, v2: StreamIterator<T2,E>) : StreamIterator<[T1,T2],E>;
// function all<T1, T2, T3, E> (v1 : StreamIterator<T1,E>, v2: StreamIterator<T2,E>, v3: StreamIterator<T3,E>) : StreamIterator<[T1,T2,T3],E>

// {
//     return StreamIterator.create<[T1,T2],E>(()=>{});
// }

//  {
//     return StreamIterator.create<[T1,T2,T3],E>(()=>{});
// }



// all(StreamIterator.create<string,number>(()=>{}),StreamIterator.create<string,number>(()=>{}))
// .subscribe( )
