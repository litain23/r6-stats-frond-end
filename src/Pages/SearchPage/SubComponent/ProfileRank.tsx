
import styled from 'styled-components';
import React from 'react';
import { RANKAPI } from '../../../util/type';
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
    rankData: RANKAPI[]
}

class ProfileRank extends React.Component<ProfileRankProps> {
    render() {
        const {rankData} = this.props;
        console.log(rankData);
        return(
            <RANK_CONTAINER>
                <RANK_CONTAINER2>
                    <div id="name">아시아</div> 
                    <R6RankIcon rank={rankData[0].rank} size={50}></R6RankIcon>
                    <div id="content">{rankData[0].rankString}</div> 
                </RANK_CONTAINER2>
                <RANK_CONTAINER2>
                    <div id="name">아시아</div> 
                    <R6RankIcon rank={rankData[1].rank} size={50}></R6RankIcon>
                    <div id="content">{rankData[1].rankString}</div> 
                </RANK_CONTAINER2>
                <RANK_CONTAINER2>
                    <div id="name">아시아</div> 
                    <R6RankIcon rank={rankData[2].rank} size={50}></R6RankIcon>
                    <div id="content">{rankData[2].rankString}</div> 
                </RANK_CONTAINER2>
            </RANK_CONTAINER>
        )
    };
}

export default ProfileRank;