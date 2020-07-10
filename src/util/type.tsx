import * as badges from '../@operatorpng'

export interface SizeRequired {
    height : number
    width : number
}

/** TO-DO : 바로컨버팅 하는 기능? */
export type RegionType = "ncsa" | "apac" | "emea" | "global"
export type PlatformType = "uplay" | "psn" | "xbl"

var errorMessage = {
    error_0 : "알수없는 에러입니다. 잠시 후 다시 시도해주세요",
    error_404 : "존재하지 않는 페이지입니다.",
    error_401 : "이 페이지에 접근할 수 있는 권한이 없습니다.",
    error_400 : "유저 정보가 없습니다",
}
export type errorMessageCode = 400 | 401 | 404 | 0 
export type errorMessageType = keyof typeof errorMessage;

export function getErrorMessage(errorCode: errorMessageCode ) {

    if (!errorMessage[`error_${errorCode}` as errorMessageType]) {
        console.log("대응 되지 않는 에러코드입니다. 수정을 요합니다.")
    } else {
        return errorMessage[`error_${errorCode}` as errorMessageType]
    }
}


export const SeasonNames: string[] = [
    "BLACK ICE",
    "DUST LINE",
    "SKULL RAIN",
    "RED CROW",
    "VELVET SHELL",
    "HEALTH",
    "BLOOD ORCHID", 
    "WHITE NOISE",
    "CHIMERA", 
    "PARA BELLUM",
    "GRIM SKY",
    "WIND BASTION",
    "BURNT HORIZON",
    "PHANTOM SIGHT",
    "EMBER RISE",
    "SHIFTING TIDES",
    "VOID EDGE",
    "STEEL WAVE",
];


export const SeasonColors: string[] = [
    "#9a9da2", 
    "#26282b",
    "#ffdc11",
    "#1e2024",
    "#7d7d7d",
    "#4a74a9",
    "#ca361c",
    "#006543",
    "#ffc113",
    "#949f39",
    "#81a0c1",
    "#aa854f",
    "#d2005a",
    "#304395",
    "#156309",
    "#089eb3",
    "#946a97",
    "#2b7f9b",
]



/**
 * 
 * @param rankData rankData입니다.
 * @param customSorter 기본은 maxMMR기준으로 정렬하나, customSorter가 있을경우 sort함수를 넣어주세요.
 */
export function getFirstAmongRanks(rankData : RANKAPI[], customSorter?: (a:RANKAPI,b:RANKAPI)=>number) : RANKAPI { 
    if (rankData.length === 1){
        return rankData[0];
    } else {
        if (customSorter) {
            return rankData.sort(customSorter)[0];
        } else {
            return rankData.sort((a,b) => (a.maxMmr < b.maxMmr) ? 1 : -1)[0];
        }
    }
}



let unit = ["d", "h", "m"];
export function getDayFromSecond(second : number ):string {
    
    let day = second / (60 * 60 * 24)
    let hour = (second / (60 * 60)) % 24
    let min = (second / 60) % 60.
    return [day, hour, min].reduce(( prev, curr, index, array )=>{
        if (Math.floor(curr) < 1) {  

            if (index === array.length-1) {
                return prev + Math.floor(curr).toString() + unit[index] + " "
            } 

            if (prev !== "") {
                return prev + Math.floor(curr).toString() + unit[index] + " "
            }

            return prev;
        } else {
            return prev + Math.floor(curr).toString() + unit[index] + " "
        }
    }, "")
}

    
export const getSeasonName = (rank: number) => {
    if (rank > 0 && rank <= SeasonNames.length) {
        return SeasonNames[rank-1];
    } else {
        return "NONE"
    }
}

export const getSeasonColorString = (rank: number) => {

    if (rank > 0 && rank <= SeasonColors.length) {
        return SeasonColors[rank-1];
    } else {
        return "#FFF"
    }
    
}

export const getRegion = (region : RegionType) => {
    switch(region) {
        case "ncsa":
            return "북미";
        case "apac":
            return "아시아";
        case "emea":
            return "유럽";
        case "global":
            return "글로벌";
    }
}

export const getPlatform = (platform : PlatformType) => {
    switch(platform) {
        case "psn":
            return "PS4";
        case "uplay":
            return "PC";
        case "xbl":
            return "XBOX";
    }

}

/** 임시로 만들었습니다.
 * 서버가 지원하면 삭제해주세요.
 */
export interface SEASONAPI {
    season : number;
    seasonData : RANKBYREGION[];
}

export interface RANKBYREGION {
    region: RegionType;
    rankStat: RANKAPI;
}

export interface RANKAPI {
    maxMmr: number;
    death: number;
    rank: number;
    maxRank:number;
    kills:number;
    updateTime?: string|Date;
    abandons: number|string;
    mmr:number;
    wins:number;
    region:RegionType;
    season:number;
    losses:number;
    createdTime: string;
    /** 시즌 최고 랭크의 String 입니다. */
    maxRankString: string;
    rankString: string;
    /** 현재 랭크 기준 다음 랭크의 String 입니다. */
    nextRankString: string;
    /** 현재 랭크 기준 다음 랭크 시작 mmr 입니다. */
    nextRankMmr: number;
}

export interface GENERALAPI {
    matchLost:number,
    matchWon:number,
    matchPlayed:number,
    kills:number,
    death:number,
    penetrationKills:number,
    meleeKills:number,
    killAssists:number,
    revive:number,
    bulletHit:number,
    timePlayed:number,
    headShot:number
}

export interface PVPAPI {
    death: number,
    kills: number,
    matchLost: number,
    matchWon: number,
    matchPlayed: number,
    timePlayed: number
}

export interface PROFILEAPI {
    profileId : string
}

export type operators = keyof typeof badges;

export interface OPERATORAPI {
    name:operators
    operatorIndex: string,
    kills: number,
    death: number,
    headShot: number,
    meleeKills: number,
    totalXp: number,
    timePlayed: number,
    roundWon: number,
    roundLost: number,
    createdTime: string
    category: "atk" | "def"
}
