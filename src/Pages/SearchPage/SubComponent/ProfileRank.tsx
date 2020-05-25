
import styled from 'styled-components';
import React from 'react';
import { RANKAPI } from '../../../util/type';
import { R6RankIcon, RankType} from '../../../R6Components'

const CONTAINER = styled.section`
display:flex;
flex-direction:row;
height:150px;
`;


const RANK_CONTAINER = styled.section`
display:flex;
flex:1;
justify-content:center;

@media (min-width: 576px) {   
    justify-content:center;
}

@media (min-width: 768px) { 
    justify-content:center;

 }

@media (min-width: 992px) { 
    justify-content:flex-end;

 }

@media (min-width: 1200px) { 
    justify-content:flex-end;
 }
`;


const RANK_CONTAINER2 = styled.section`
    display:flex;
    flex-direction:row;
    background:gray;
    width:316px;
    margin-top:20px;
    margin-bottom:20px;
    background:#282830;
    border-radius:10px;
    justify-content:space-around;
`;

const RANK_CONTAINER3 = styled.section`
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

const ProfileRank = ({api}:ProfileRankProps) => {
return(
    <CONTAINER>
        <RANK_CONTAINER>
            <RANK_CONTAINER2>
                <RANK_CONTAINER3>
                    <div id="name">아시아</div> 
                    <R6RankIcon rank={api.rank} size={50}></R6RankIcon>
                    <div id="content">{api.death}</div> 
                </RANK_CONTAINER3>
                <RANK_CONTAINER3>
                    <div id="name">아시아</div> 
                    <R6RankIcon rank={api.rank} size={50}></R6RankIcon>
                    <div id="content">{api.death}</div> 
                </RANK_CONTAINER3>
                <RANK_CONTAINER3>
                    <div id="name">아시아</div> 
                    <R6RankIcon rank={api.rank} size={50}></R6RankIcon>
                    <div id="content">{api.death}</div> 
                </RANK_CONTAINER3>
            </RANK_CONTAINER2>
        </RANK_CONTAINER>
    </CONTAINER>
)
}

export default ProfileRank;