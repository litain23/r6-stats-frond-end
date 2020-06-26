import React from 'react';
import '../../../App.css'
import R6RankIcon from './../../../R6Components/R6RankIcon'

import styled from 'styled-components'
import { getSeasonName } from '../../../util/type';

interface MmrContainerProps {
    season: number
}

interface RankSeasonNameColor {
    season: number
}

const RankIcon = styled.div`
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
    margin: 10px;
`;

const MmrContainer = styled.div<MmrContainerProps>`
    display: flex;
    flex-wrap: flex;
    align-items: center;
    width: 100%;

    @media(min-width: 954px) {
        width: 240px;
    }

    background: #1f1f1f;
    border-left: 4px solid ${props => props.theme.seasonColors(props.season)};
    margin-bottom: 4px;
`;

const RankSeasonNameAndMmr = styled.div`
    flex: 0 0 83%;
    max-width: 83%;
`;

const RankSeasonName = styled.div<RankSeasonNameColor>`
    color: ${props => props.theme.seasonColors(props.season)};
    font-size: 16px;
    font-weight: 700;
`;


interface Props {
    season: number,
    rankString: string,
    rank: number,
    mmr: number
}

export const MmrCard = (props : Props) => (
    <MmrContainer season={props.season}>
        <RankIcon> <R6RankIcon rank={props.rankString} size={40} /></RankIcon>
        <RankSeasonNameAndMmr>
            <RankSeasonName season={props.season}>{getSeasonName(props.season)}</RankSeasonName>
            <div>
                {/* {props.mmr} Mmr */}
                <span style={{
                }}> {props.rankString}</span>
            </div>
        </RankSeasonNameAndMmr> 
    </MmrContainer>
);