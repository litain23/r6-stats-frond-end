
/**
 * 시즌별 테마 컬러 모음.
 */
const _seasonColors = ["#9a9da2", "#26282b", "#ffdc11", "#1e2024", "#7d7d7d", "#4a74a9", "#ca361c", "#006543", "#ffc113", "#949f39", "#81a0c1", "#aa854f", "#d2005a", "#304395", "#156309", "#089eb3", "#946a97"]

const seasonColors = (input:number) => {
    if ((input <= _seasonColors.length) && (input>0)) {
        return _seasonColors[input-1];
    } else {
        console.log(`season ${input} is invalid.`);
        return "#fff"
    }
}


export const theme: R6Theme = {
    seasonColors,
};

export interface R6Theme {
    seasonColors: (input:number)=>string;
}

export interface SeasonInfo {
    season : number;
    fill?: number|string;
}