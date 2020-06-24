import React from 'react';
import * as rankicons from '../@ranksvg'

export type RankType = keyof typeof rankicons;
export const rankIconTypes: RankType[] = Object.keys(rankicons) as any[];

export type R6RankIconProps = {
    /** 랭크 타입 */
    rank: RankType | number;
    /** 아이콘 사이즈 */
    size?: number;
};

//export => import string.

const R6RankIcon = ({ rank, size }: R6RankIconProps) => {
    
    if (typeof rank == 'number') {
        if (Object.keys(rankicons).length > rank) {
            rank = ("rank" + rank.toString()) as RankType
        } else {
            return (
                <div style={{width:size, height:size}}></div>
            )
        }
    } 


    const src = rankicons[rank];
    return (
        <img src={src} alt={"rank"} style={{width:size, height:'auto'}}/>
    );

}

R6RankIcon.defaultProps = {
    size : 20
}

export default R6RankIcon;
  