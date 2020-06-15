import React from 'react';
import '../../../App.css'

import R6RankIcon from './../../../R6Components/R6RankIcon'

import styled from 'styled-components'

const RankIcon = styled.div`
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
    margin: 10px;
`;

const MmrContainer = styled.div`
    display: flex;
    flex-wrap: flex;
    align-items: center;
    border: solid 1px;
    width: 250px;
`;

const RankSeasonNameAndMmr = styled.div`
    flex: 0 0 50%;
    max-width: 50%;
`;

interface Props {
    season: number,
    rankString: string,
    rank: number,
    mmr: number
}

export const MmrCard = (props : Props) => (
    <MmrContainer>
        <RankIcon> <R6RankIcon rank={props.rank} size={40} /></RankIcon>
        <RankSeasonNameAndMmr>
            <div>{props.season}</div>
            <div>
                {props.mmr} Mmr
                <span> {props.rankString}</span>
            </div>
        </RankSeasonNameAndMmr> 
    </MmrContainer>
);