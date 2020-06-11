import * as badges from '../@operatorpng'

export interface SizeRequired {
    height : number
    width : number
}


/** TO-DO : 바로컨버팅 하는 기능? */
type regionType = "APAC" | "NANC" | "ABCD"


export interface RANKREGIONSTATAPI {
    region:string, 
    rankStat:RANKAPI[]
}

export interface RANKTEMPAPI {
    region:string;
    rankStat:RANKAPI
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
    region:string;
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

// 명시적으로 타입을 만들어줌.
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
