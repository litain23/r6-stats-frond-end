
import styled from 'styled-components';
import React from 'react';
import { RANKAPI, RANKREGIONSTATAPI } from '../../../util/type';
import { R6RankIcon } from '../../../R6Components'

const RANK_CONTAINER = styled.section`
    display:flex;
    flex-direction:row;
    background:gray;
    width:316px;
    background:#282830;
    border-radius:10px;
    justify-content:space-around;
`;

const RANK_CONTAINER2 = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;
    #name {
        color:white;
        font-size:10px;
    }
    #content{
        color:white;
        font-size:12px;
        font-weight:bold;
    }
`;

interface ProfileRankProps {
    currentRankData: RANKREGIONSTATAPI[]
}

class ProfileRank extends React.Component<ProfileRankProps> {
    render() {
        const {currentRankData} = this.props;
        return(
            <RANK_CONTAINER>
                <RANK_CONTAINER2>
                    <div id="name">{currentRankData[0].region}</div> 
                    <R6RankIcon rank={currentRankData[0].rankStat[0].rank} size={50}></R6RankIcon>
                    <div id="content">{currentRankData[0].rankStat[0].rankString}</div> 
                </RANK_CONTAINER2>
                <RANK_CONTAINER2>
                    <div id="name">{currentRankData[1].region}</div> 
                    <R6RankIcon rank={currentRankData[1].rankStat[0].rank} size={50}></R6RankIcon>
                    <div id="content">{currentRankData[1].rankStat[0].rankString}</div> 
                </RANK_CONTAINER2>
                <RANK_CONTAINER2>
                    <div id="name">{currentRankData[2].region}</div> 
                    <R6RankIcon rank={currentRankData[2].rankStat[0].rank} size={50}></R6RankIcon>
                    <div id="content">{currentRankData[2].rankStat[0].rankString}</div> 
                </RANK_CONTAINER2>
            </RANK_CONTAINER>
        )
    };
}

export default ProfileRank;