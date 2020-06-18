
/**
 * 시즌별 테마 컬러 모음.
 */
import {getSeasonColorString} from './type';

const seasonColors = (input:number) => {
   return getSeasonColorString(input);
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