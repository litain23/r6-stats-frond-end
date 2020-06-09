import { RANKAPI } from "./type";

const baseURL = "http://ec2-52-78-165-226.ap-northeast-2.compute.amazonaws.com:8080/api/v1/"
type platform = "uplay" | "psn" | "xbl"

enum queryType {
    rank = "/rank", /// all ranks info.
    operator = "/operator/", /// operators info.
    generalpvp = "/generalpvp/", /// general pvp.
    casualpvp = "/casualpvp/", /// all casual pvp
    rankpvp = "/rankpvp/", /// all ranks pvp (total)
}

export async function API<T>(url: string ,init?: RequestInit): Promise<T>{
    try {

        const response = await fetch(url, init);

        if (!response.ok) {
            throw new Error(response.statusText)
        }

        const wrapped = await response.json() as Promise<T>
        return wrapped;

    } catch (e) {
        throw new Error(e);
    }
}

export async function GETRANKS(id: string, platform: platform, all?: boolean) {
    
    const resultURL = `${baseURL + queryType.rank} + ${platform} +/${id} + ${all? "/all" : ""}`
    console.log(resultURL)
    const result = await API<RANKAPI>(resultURL);
    return result;
// http://ec2-52-78-165-226.ap-northeast-2.compute.amazonaws.com:8080/api/v1/rank/uplay/Kooklxs/all
}
