import * as badges from '../@operatorpng'

export interface SizeRequired {
    height : number
    width : number
}

//locale?
//APAC | 
//바로 컨버팅?
type regionType = "APAC" | "NANC" | "ABCD"


export interface RANKAPI {

    maxMmr: number;
    death: number;
    rank: number;
    maxRank:number;
    kills:number;
    updateTime: string|Date;
    abandons: number|string;
    mmr:number;
    wins:number;
    region:string;
    season:number;
    losses:number;
}


// {
//     "region": "ncsa";
//     "rankStat": [
//       {
//         "maxMmr": 0,
//         "death": 0,
//         "rank": 0,
//         "maxRank": 0,
//         "kills": 0,
//         "abandons": 0,
//         "mmr": 2500,
//         "wins": 0,
//         "region": "ncsa",
//         "season": 17,
//         "losses": 0,
//         "createdTime": "2020-05-19T18:19:30.0502837",
//         "maxRankString": "UNRANK",
//         "rankString": "UNRANK"
//       }
//     ]
//   },
//   {
//     "region": "emea",
//     "rankStat": [
//       {
//         "maxMmr": 0,
//         "death": 0,
//         "rank": 0,
//         "maxRank": 0,
//         "kills": 0,
//         "abandons": 0,
//         "mmr": 2500,
//         "wins": 0,
//         "region": "emea",
//         "season": 17,
//         "losses": 0,
//         "createdTime": "2020-05-19T18:19:29.5632611",
//         "maxRankString": "UNRANK",
//         "rankString": "UNRANK"
//       }
//     ]
//   },
//   {
//     "region": "apac",
//     "rankStat": [
//       {
//         "maxMmr": 2581,
//         "death": 984,
//         "rank": 14,
//         "maxRank": 15,
//         "kills": 1102,
//         "abandons": 1,
//         "mmr": 2428,
//         "wins": 126,
//         "region": "apac",
//         "season": 17,
//         "losses": 115,
//         "createdTime": "2020-05-19T18:19:29.073145",
//         "maxRankString": "SILVER 1",
//         "rankString": "SILVER 2"
//       }
//     ]
//   }


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

// 명시적으로 타입을 만들어줌.
type operators = keyof typeof badges;

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