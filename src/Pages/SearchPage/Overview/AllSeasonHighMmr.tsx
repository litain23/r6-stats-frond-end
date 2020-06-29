import React from 'react'
import '../../../App.css'

import { SEASONAPI, RANKAPI, getFirstAmongRanks }  from '../../../util/type'
import { MmrCard } from './MmrCard'
import { CardHeader } from './StyledCss'

interface Props {
    allRankData: SEASONAPI[]
}

export class AllSeasonHighMmr extends React.Component<Props> {


    private getHighestMmrEach(allSeasons : SEASONAPI[] ): RANKAPI[] {

        const list : RANKAPI[] = [];
        
        for(let season of allSeasons) {
            const sortedMMR = season.seasonData.sort((a,b) => (a.rankStat.maxMmr < b.rankStat.maxMmr) ? 1 : -1);
            list.push(sortedMMR[0].rankStat);
        }
        return list;
    }


    render() {

        let ranks = this.props.allRankData.map( (season) => {
            return getFirstAmongRanks(season.seasonData.map( (rank) => rank.rankStat))
        })

        let MMRCARD: JSX.Element[] = [];
        ranks.forEach((mmr,index)=>{
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