
import styled from 'styled-components';
import React from 'react';
import { RANKBYREGION, getRegion } from '../../../util/type';
import { R6RankIcon } from '../../../R6Components'

const RANK_CONTAINER = styled.section`
    display:flex;
    flex-direction:row;
    background:gray;
    width:316px;
    height:85px;
    background:#282830;
    border-radius:10px;
    justify-content:space-around;
    padding:5px;
`;

const RANK_CONTAINER2 = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    #name {
        color:white;
        font-size:0.3rem;
        font-weight:bold;
        margin-bottom:0.2rem;
    }
    #content{
        color:white;
        font-size:0.8rem;
        font-weight:bolder;
        margin-top:0.2rem;
    }
`;

interface ProfileRankProps {
    currentRankData: RANKBYREGION[]
}

class ProfileRank extends React.Component<ProfileRankProps> {

    render() {
        const {currentRankData} = this.props;
        console.log("ADFADF", currentRankData);
        return(
            <RANK_CONTAINER>
                <RANK_CONTAINER2>
                    <div id="name">{getRegion(currentRankData[0].region)}</div> 
                    <R6RankIcon rank={currentRankData[0].rankStat.rank} size={30}></R6RankIcon>
                    <div id="content">{currentRankData[0].rankStat.rankString}</div> 
                </RANK_CONTAINER2>
                <RANK_CONTAINER2>
                    <div id="name">{getRegion(currentRankData[1].region)}</div> 
                    <R6RankIcon rank={currentRankData[1].rankStat.rank} size={30}></R6RankIcon>
                    <div id="content">{currentRankData[1].rankStat.rankString}</div> 
                </RANK_CONTAINER2>
                <RANK_CONTAINER2>
                    <div id="name">{getRegion(currentRankData[2].region)}</div> 
                    <R6RankIcon rank={currentRankData[2].rankStat.rank} size={30}></R6RankIcon>
                    <div id="content">{currentRankData[2].rankStat.rankString}</div> 
                </RANK_CONTAINER2>
            </RANK_CONTAINER>
        )
    };
}

export default ProfileRank;