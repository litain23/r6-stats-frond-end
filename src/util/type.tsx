export interface SizeRequired {
    height : number
    width : number
}

export interface RANKAPI {
    maxMmr: number;
    death: number;
    rank: number;
    maxRank:number;
    kills:number;
    updateTime?: string;
    abandons: number;
    mmr:number;
    wins:number;
    region:string;
    season:number;
    losses:number;
}


export interface GENERALAPI {
    
    totalMatchLost:number,
    totalMatchWon:number,
    totalMatchPlayed:number,
    totalKills:number,
    totalDeath:number,
    totalPenetrationKills:number,
    totalMeleeKills:number,
    totalKillAssists:number,
    totalRevive:number,
    totalBulletHit:number,
    totalTimePlayed:number,
    totalHeadShot:number
}
