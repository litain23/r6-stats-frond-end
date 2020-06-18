import * as badges from '../@operatorpng'

export interface SizeRequired {
    height : number
    width : number
}


/** TO-DO : 바로컨버팅 하는 기능? */
type regionType = "ncsa" | "apac" | "emea"
type playformType = "uplay" | "psn" | "xbl"


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

export const getRegion = (region : regionType) => {
    switch(region) {
        case "ncsa":
            return "America";
        case "apac":
            return "Asia";
        case "emea":
            return "Europe";
    }
}

export const getPlatform = (platform : playformType) => {
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
 * 서버가 지원하면 없어집니다.
 */
export const rangeData = [{"season": 2, "ranks": [0, 2199, 2399, 2549, 2699, 2799, 2899, 3049, 3199, 3349, 3519, 3699, 3929, 4159, 4399, 4639, 4899, 5159, 5449, 5999, null]}, {"season": 3, "ranks": [0, 2199, 2399, 2549, 2699, 2799, 2899, 3049, 3199, 3349, 3519, 3699, 3929, 4159, 4399, 4639, 4899, 5159, 5449, 5999, null]}, {"season": 4, "ranks": [0, 1399, 1499, 1599, 1699, 1799, 1899, 1999, 2099, 2199, 2299, 2399, 2499, 2599, 2699, 2799, 2999, 3199, 3399, 3699, null]}, {"season": 5, "ranks": [0, 1399, 1499, 1599, 1699, 1799, 1899, 1999, 2099, 2199, 2299, 2399, 2499, 2699, 2899, 3099, 3299, 3699, 4099, 4499, null]}, {"season": 6, "ranks": [0, 1399, 1499, 1599, 1699, 1799, 1899, 1999, 2099, 2199, 2299, 2399, 2499, 2699, 2899, 3099, 3299, 3699, 4099, 4499, null]}, {"season": 7, "ranks": [0, 1399, 1499, 1599, 1699, 1799, 1899, 1999, 2099, 2199, 2299, 2399, 2499, 2699, 2899, 3099, 3299, 3699, 4099, 4499, null]}, {"season": 8, "ranks": [0, 1399, 1499, 1599, 1699, 1799, 1899, 1999, 2099, 2199, 2299, 2399, 2499, 2699, 2899, 3099, 3299, 3699, 4099, 4499, null]}, {"season": 9, "ranks": [0, 1399, 1499, 1599, 1699, 1799, 1899, 1999, 2099, 2199, 2299, 2399, 2499, 2699, 2899, 3099, 3299, 3699, 4099, 4499, null]}, {"season": 10, "ranks": [0, 1399, 1499, 1599, 1699, 1799, 1899, 1999, 2099, 2199, 2299, 2399, 2499, 2699, 2899, 3099, 3299, 3699, 4099, 4499, null]}, {"season": 11, "ranks": [0, 1399, 1499, 1599, 1699, 1799, 1899, 1999, 2099, 2199, 2299, 2399, 2499, 2699, 2899, 3099, 3299, 3699, 4099, 4499, null]}, {"season": 12, "ranks": [0, 1399, 1499, 1599, 1699, 1799, 1899, 1999, 2099, 2199, 2299, 2399, 2499, 2699, 2899, 3099, 3299, 3699, 4099, 4499, null]}, {"season": 13, "ranks": [0, 1399, 1499, 1599, 1699, 1799, 1899, 1999, 2099, 2199, 2299, 2399, 2499, 2699, 2899, 3099, 3299, 3699, 4099, 4499, null]}, {"season": 14, "ranks": [0, 1399, 1499, 1599, 1699, 1799, 1899, 1999, 2099, 2199, 2299, 2399, 2499, 2699, 2899, 3099, 3299, 3699, 4099, 4499, null]}, {"season": 15, "ranks": [0, 1199, 1299, 1399, 1499, 1599, 1699, 1799, 1899, 1999, 2099, 2199, 2299, 2399, 2499, 2599, 2799, 2999, 3199, 3599, 3999, 4399, 4999, null]}, {"season": 16, "ranks": [0, 1199, 1299, 1399, 1499, 1599, 1699, 1799, 1899, 1999, 2099, 2199, 2299, 2399, 2499, 2599, 2799, 2999, 3199, 3599, 3999, 4399, 4999, null]}, {"season": 17, "ranks": [0, 1199, 1299, 1399, 1499, 1599, 1699, 1799, 1899, 1999, 2099, 2199, 2299, 2399, 2499, 2599, 2799, 2999, 3199, 3599, 3999, 4399, 4999, null]}]

export interface SEASONAPI {
    season : number;
    seasonData : RANKBYREGION[];
}

export interface RANKBYREGION {
    region: regionType;
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
    region:regionType;
    season:number;
    losses:number;
    createdTime: string;
    maxRankString: string;
    rankString: string;
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
}
