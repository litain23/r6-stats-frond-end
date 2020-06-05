
import styled from 'styled-components';
import React from 'react';
import { RANKAPI } from '../../../util/type';
import { R6RankIcon, RankType} from '../../../R6Components'

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
    api:RANKAPI;
}

class ProfileRank extends React.Component<ProfileRankProps> {
    render() {
        const {api} = this.props;
        return(
            <RANK_CONTAINER>
                <RANK_CONTAINER2>
                    <div id="name">아시아</div> 
                    <R6RankIcon rank={api.rank} size={50}></R6RankIcon>
                    <div id="content">{api.death}</div> 
                </RANK_CONTAINER2>
                <RANK_CONTAINER2>
                    <div id="name">아시아</div> 
                    <R6RankIcon rank={api.rank} size={50}></R6RankIcon>
                    <div id="content">{api.death}</div> 
                </RANK_CONTAINER2>
                <RANK_CONTAINER2>
                    <div id="name">아시아</div> 
                    <R6RankIcon rank={api.rank} size={50}></R6RankIcon>
                    <div id="content">{api.death}</div> 
                </RANK_CONTAINER2>
            </RANK_CONTAINER>
        )
    };
}

export default ProfileRank;