import React from 'react';
import '../../../App.css'

import { RANKREGIONSTATAPI, RANKAPI }  from '../../../util/type'
import { R6RankIcon } from '../../../R6Components';

import styled from 'styled-components';

interface Props {
    allRankData: RANKREGIONSTATAPI[]
}

const MmrContainer = styled.div`
    display: flex;
    flex-wrap: flex;
    align-items: center;
    border: solid 1px;
`;

const RankIcon = styled.div`
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
    margin: 10px;
`;

const RankSeasonNameAndMmr = styled.div`
    flex: 0 0 50%;
    max-width: 50%;
`;

const RankString = styled.div`
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
`;

function getHighestMmr(mmrList : RANKREGIONSTATAPI[]) {
    const list : RANKAPI[] = [];
    for(const mmrRegion of mmrList ) {
        for(const mmrStat of mmrRegion.rankStat) {
            list.push(mmrStat);
        }
    }

    list.sort((a, b) => (a.season > b.season) ? 1 : -1)
    console.log(list);
}

export class AllSeasonHighMmr extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        getHighestMmr(props.allRankData);
    }

    render() {
        return (
            <>
            <div style={{width: "100%", background: "violet"}}>
                <div>
                    <h1>Highest Mmr</h1>
                </div>
                <MmrContainer>
                    <RankIcon> <R6RankIcon rank={20} size={40}></R6RankIcon></RankIcon>
                    <RankSeasonNameAndMmr>
                        <div>void edge</div>
                        <div>
                            2800 Mmr
                            <span>plattinum 3</span>
                        </div>
                    </RankSeasonNameAndMmr>
                </MmrContainer>
                <MmrContainer>
                    <RankIcon> <R6RankIcon rank={20} size={40}></R6RankIcon></RankIcon>
                    <RankSeasonNameAndMmr></RankSeasonNameAndMmr>
                    <RankString></RankString>
                </MmrContainer><MmrContainer>
                    <RankIcon> <R6RankIcon rank={20} size={40}></R6RankIcon></RankIcon>
                    <RankSeasonNameAndMmr></RankSeasonNameAndMmr>
                    <RankString></RankString>
                </MmrContainer><MmrContainer>
                    <RankIcon> <R6RankIcon rank={20} size={40}></R6RankIcon></RankIcon>
                    <RankSeasonNameAndMmr></RankSeasonNameAndMmr>
                    <RankString></RankString>
                </MmrContainer><MmrContainer>
                    <RankIcon> <R6RankIcon rank={20} size={40}></R6RankIcon></RankIcon>
                    <RankSeasonNameAndMmr></RankSeasonNameAndMmr>
                    <RankString></RankString>
                </MmrContainer><MmrContainer>
                    <RankIcon> <R6RankIcon rank={20} size={40}></R6RankIcon></RankIcon>
                    <RankSeasonNameAndMmr></RankSeasonNameAndMmr>
                    <RankString></RankString>
                </MmrContainer>

            </div>
            </>
        )
    }    
}