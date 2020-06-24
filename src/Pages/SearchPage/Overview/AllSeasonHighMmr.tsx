import React from 'react'
import '../../../App.css'

import { SEASONAPI, RANKAPI }  from '../../../util/type'
import { MmrCard } from './MmrCard'
import { CardHeader, CardContent } from './StyledCss'

interface Props {
    allRankData: SEASONAPI[]
}

interface State {
    mmrList: RANKAPI[]
}

function getHighestMmr(allSeasons : SEASONAPI[] ): RANKAPI[] {
    const list : RANKAPI[] = [];
    
    for(let season of allSeasons) {
        const sortedMMR = season.seasonData.sort((a,b) => (a.rankStat.maxMmr < b.rankStat.maxMmr) ? 1 : -1);
        list.push(sortedMMR[0].rankStat);
    }

    return list;
}

export class AllSeasonHighMmr extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            mmrList : getHighestMmr(props.allRankData)
        }
    }

    render() {
        let MMRCARD: JSX.Element[] = [];
        this.state.mmrList.forEach((mmr,index)=>{
            MMRCARD.push(<MmrCard key={`MMR_CARD_${index}`} mmr={mmr.maxMmr} rankString={mmr.maxRankString} rank={mmr.maxRank} season={mmr.season}></MmrCard>)
        })
        
        return (
            <>
            <CardHeader>Hightest Rank</CardHeader>
            <div style={{ width: "100%", paddingTop: "4px" }}>
                { MMRCARD }
            </div>
            </>
        )
    }    
}