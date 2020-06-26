
import styled from 'styled-components';
import React from 'react';
import { RANKBYREGION, getRegion } from '../../../util/type';
import { R6RankIcon } from '../../../R6Components'

const RANK_CONTAINER = styled.div`
    display:flex;
    flex-direction:row;
    width:260px;
`;

//flex-basis
//flex-basis;1
const RANK_PART = styled.div`
    display:flex;
    flex-direction:row;
`;

const CONTENT_PART = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;

    flex:1;

    #rank {
        font-weight:bold;
        font-size:1.4em;
        color:white;
    }
    .data {
        color:white;
        font-weight:bold;
        font-size:1.2em;
    }
    .format { 
        font-weight:400;
    }
    
`;


// const RANK_CONTAINER2 = styled.section`
//     display:flex;
//     flex-direction:column;
//     justify-content:center;
//     align-items:center;
//     text-align:center;

//     #name {
//         color:white;
//         font-size:0.3rem;
//         font-weight:bold;
//         margin-bottom:0.2rem;
//     }

//     #content{
//         color:white;
//         font-size:0.8rem;
//         font-weight:bolder;
//         margin-top:0.2rem;
//     }
// `;

interface ProfileRankProps {
    currentRankData: RANKBYREGION[]
}

/**
 * 현재 랭크중 최대 랭크를 가져옵니다.
 */
class ProfileRank extends React.Component<ProfileRankProps> {

    render() {
        const {currentRankData} = this.props;
        const sortedMMR = currentRankData.sort((a,b) => (a.rankStat.maxMmr < b.rankStat.maxMmr) ? 1 : -1);
        
        return(
            <RANK_CONTAINER>
                <RANK_PART>
                    <R6RankIcon rank={currentRankData[0].rankStat.rankString} size={70}></R6RankIcon>
                </RANK_PART>
                <CONTENT_PART>
                    <div id="rank">{currentRankData[0].rankStat.rankString.toUpperCase()}</div> 
                    <div id="mmr">
                        <span className="data">{currentRankData[0].rankStat.mmr}</span>
                        <span className="format"> MMR - </span>
                        <span className="data">{currentRankData[0].rankStat.wins}</span>
                        <span className="format"> W </span>
                        <span className="data">{currentRankData[0].rankStat.losses}</span>
                        <span className="format"> L </span>
                    </div> 
                    <div id="server">{getRegion(currentRankData[0].rankStat.region)}</div> 
                </CONTENT_PART>
            </RANK_CONTAINER>
        )
    };
}

export default ProfileRank;