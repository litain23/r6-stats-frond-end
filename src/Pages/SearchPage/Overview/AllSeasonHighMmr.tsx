import React from 'react'
import '../../../App.css'

import { RANKREGIONSTATAPI, RANKAPI }  from '../../../util/type'
import { R6RankIcon } from '../../../R6Components'
import { MmrCard } from './MmrCard'

import styled from 'styled-components';



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

interface Props {
    allRankData: RANKREGIONSTATAPI[]
}

interface State {
    mmrList: RANKAPI[]
}

function getHighestMmr(mmrList : RANKREGIONSTATAPI[]) {
    const list : RANKAPI[] = [];
    for(const mmrRegion of mmrList ) {
        for(const mmrStat of mmrRegion.rankStat) {
            list.push(mmrStat);
        }
    }

    list.sort((a, b) => (a.season < b.season) ? 1 : -1);
    return list.reduce( (prev, currentRank) => {
        if(prev.length == 0) {
            prev.push(currentRank);
        } else {
            const lastRank: RANKAPI = prev[prev.length-1];
            if(lastRank.season === currentRank.season) {
                if(lastRank.maxMmr < currentRank.maxMmr) {
                    prev.pop();
                    prev.push(currentRank);
                } 
            } else {
                prev.push(currentRank);
            }
        }
        return prev;
    }, [] as RANKAPI[]);
}

export class AllSeasonHighMmr extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            mmrList : getHighestMmr(props.allRankData)
        }
    }
    
    render() {
        let result = [] as any;
        for(const mmr of this.state.mmrList) {
            result.push(<MmrCard mmr={mmr.maxMmr} rankString={mmr.maxRankString} rank={mmr.maxRank} season={mmr.season}></MmrCard>)
        }
        return (
            <div style={{width: "100%", background: "violet"}}>
                <div>
                    <h1>Highest Mmr</h1>
                </div>
                { result }
            </div>
        )
    }    
}