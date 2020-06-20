import { RANKAPI, RANKBYREGION } from "./type";
import { rejects } from "assert";

const baseURL = (process.env.NODE_ENV !== "production")? "http://localhost:5000" : "http://ec2-52-78-165-226.ap-northeast-2.compute.amazonaws.com:8080/"
const baseURLWithAPIVersion = baseURL + "/api/v1/" 

type platform = "uplay" | "psn" | "xbl"

enum queryType {
    rank = "/rank", /// all ranks info.
    operator = "/operator/", /// operators info.
    generalpvp = "/generalpvp/", /// general pvp.
    casualpvp = "/casualpvp/", /// all casual pvp
    rankpvp = "/rankpvp/", /// all ranks pvp (total)
}

type ErrorStatus = 400 | 401 | 402 | 403 | 404 | 500 | 501 | 502 | "unexcepted"

interface BasicErrorFormat {
    status: ErrorStatus;
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
        const unexpectedFailure = {status: "unexcepted", message:e} as FAILURE;
        return [null, unexpectedFailure]
    }

}

export async function GETRANKS(id: string, platform: platform, all?: boolean) {
    const resultURL = `${baseURL + queryType.rank} + ${platform} +/${id} + ${all? "/all" : ""}`
    console.log(resultURL)
    const result = await API<RANKAPI>(resultURL);
    return result;
// http://ec2-52-78-165-226.ap-northeast-2.compute.amazonaws.com:8080/api/v1/rank/uplay/Kooklxs/all
}


