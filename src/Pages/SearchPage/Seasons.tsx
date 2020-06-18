import React from 'react';
import '../../App.css'
import './seasons.css'
import { SEASONAPI , getRegion, getSeasonName, rangeData} from '../../util/type'


import { R6RankIcon } from '../../R6Components';
import styled from 'styled-components';
import { SeasonInfo } from '../../util/theme';

interface Props {
    seasons: SEASONAPI[]
}

const SEASONBACKGROUND = styled.div<SeasonInfo>`
    background-color:${props=> props.theme.seasonColors(props.season)};
    ${props => (props.fill)? 'width:' + props.fill.toString() + '%;' : ""  }
`

const RankCard = (props:{data: SEASONAPI}) => {

    let cardContents : JSX.Element[] = [];


    const {season, seasonData} = props.data;
    


    seasonData.forEach((eachSeason, index) => {


        const {region, rankStat} = eachSeason

        const maxRangeNullable = rangeData[season-2].ranks[rankStat.rank];
        const maxRange = (maxRangeNullable !== null)? maxRangeNullable + 1 : rankStat.mmr;


        cardContents.push(
            <div key={`R6_CARD_CONTENT_${index}`} className="rankcard-content">
            <div className="rankcard-content-info">
                <div className="rankcard-content-info-area">
                    {getRegion(region)}
                </div>
                <div className="rankcard-content-info-tier">
                    {rankStat.rankString.toUpperCase()}
                </div>
                <div className="rankcard-content-info-progress">
                    <R6RankIcon rank={rankStat.rank} size={40}></R6RankIcon>
                    <div className="rankcard-content-info-progress-progressbar">
                        <SEASONBACKGROUND season={rankStat.season} fill={((rankStat.mmr/maxRange) * 100).toFixed()} className="rankcard-content-info-progress-progressbar-fill">
                            {`${rankStat.mmr} / ${maxRange}`}
                        </SEASONBACKGROUND>
                    </div>
                    <R6RankIcon rank={rankStat.rank+1} size={40}></R6RankIcon>
                </div>
            </div>
            <div className="rankcard-content-stats">
                <div className="item"> 
                    <div className="item-header">
                        Kills
                    </div>
                    <div className="item-data">
                        {rankStat.kills}
                    </div>
                </div>
                <div className="item"> 
                    <div className="item-header">
                        Death
                    </div>
                    <div className="item-data">
                        {rankStat.death}
                    </div>
                </div>
                <div className="item"> 
                    <div className="item-header">
                        Wins
                    </div>
                    <div className="item-data">
                        {rankStat.wins}
                    </div>
                </div>
                <div className="item"> 
                    <div className="item-header">
                        Losses
                    </div>
                    <div className="item-data">
                        {rankStat.losses}
                    </div>
                </div>
                <div className="item"> 
                    <div className="item-header">
                        Abandons
                    </div>
                    <div className="item-data">
                        {rankStat.abandons}
                    </div>
                </div>
                <div className="item"> 
                    <div className="item-header">
                        Rank
                    </div>
                    <div className="item-data">
                        {rankStat.rank}
                    </div>
                </div>
                <div className="item"> 
                    <div className="item-header">
                        Max Rank
                    </div>
                    <div className="item-data">
                        {rankStat.maxRankString}
                    </div>
                </div>
                <div className="item"> 
                    <div className="item-header">
                        MMR
                    </div>
                    <div className="item-data">
                        {rankStat.mmr}
                    </div>
                </div>
                <div className="item"> 
                    <div className="item-header">
                        Max MMR
                    </div>
                    <div className="item-data">
                        {rankStat.maxMmr}
                    </div>
                </div>

            </div>
        </div>  

        )
    })

    return(
        <>
            <div className="rankcard">
                <SEASONBACKGROUND season={season} className="rankcard-header">
                    <span> {getSeasonName(season)} </span>
                </SEASONBACKGROUND>
                {cardContents}
            </div>
        </>
    )
}



export default class SearchSeasonsTab extends React.Component<Props> {

    /** TO-DO : public, private, properies. */

    render(){
        /** 
         * 현재 season에 관련된것을 바꿔주기.
         */

        let card : JSX.Element[] = [];
        this.props.seasons.forEach( (season, index) => {
            card.push(<RankCard key={`R6_CARD_${index}`} data={season}></RankCard>)
        })

        return(
            <>
                {
                    card
                }
            </>
        )
    }
}
