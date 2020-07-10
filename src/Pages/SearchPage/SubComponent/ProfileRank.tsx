
import styled from 'styled-components';
import React from 'react';
import { RANKBYREGION, getRegion, getFirstAmongRanks } from '../../../util/type';
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
        let sortedData = getFirstAmongRanks(this.props.currentRankData.map( (value) => value.rankStat), (a,b) => (a.mmr < b.mmr) ? 1 : -1);
        return(
            <RANK_CONTAINER>
                <RANK_PART>
                    <R6RankIcon rank={sortedData.rankString} size={70}></R6RankIcon>
                </RANK_PART>
                <CONTENT_PART>
                    <div id="rank">{sortedData.rankString.toUpperCase()}</div> 
                    <div id="mmr">
                        <span className="data">{sortedData.mmr}</span>
                        <span className="format"> MMR - </span>
                        <span className="data">{sortedData.wins}</span>
                        <span className="format"> W </span>
                        <span className="data">{sortedData.losses}</span>
                        <span className="format"> L </span>
                    </div> 
                    <div id="server">{getRegion(sortedData.region)}</div> 
                </CONTENT_PART>
            </RANK_CONTAINER>
        )
    };
}

export default ProfileRank;