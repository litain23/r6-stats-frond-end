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


        let parsedData : { [key: string]: string|number}  = {};
        parsedData["킬 수"] = eachSeason.rankStat.kills;
        parsedData["데스 수"] = eachSeason.rankStat.death;
        parsedData["K/D"] = eachSeason.rankStat.kills / eachSeason.rankStat.death;
        parsedData["승률"] = (eachSeason.rankStat.wins / (eachSeason.rankStat.wins+eachSeason.rankStat.losses)) * 100
        parsedData["승리"] = eachSeason.rankStat.wins;
        parsedData["패배"] = eachSeason.rankStat.losses;
        parsedData["현재 MMR"] = eachSeason.rankStat.mmr
        parsedData["이 시즌 최대 MMR"] = eachSeason.rankStat.maxMmr
        parsedData["이 시즌 최대 RANK"] = eachSeason.rankStat.maxRankString

        let stats = [];
        for(let [key, value] of Object.entries(parsedData)) {
            if (typeof value === "number") {
                value = Math.round(value * 1000) / 1000;
            }

            stats.push(
                <div className="item"> 
                <div className="item-header">
                {key}
                </div>
                <div className="item-data">
                    {value}
                </div>
                </div>)
        }

        const {region, rankStat} = eachSeason
        const maxRangeNullable = rangeData[season-2].ranks[rankStat.rank];
        const maxRange = (maxRangeNullable !== null)? maxRangeNullable + 1 : rankStat.mmr;

        console.log(rankStat);
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
                    <R6RankIcon rank={rankStat.rankString} size={40}></R6RankIcon>
                    <div className="rankcard-content-info-progress-progressbar">
                        <SEASONBACKGROUND season={rankStat.season} fill={((rankStat.mmr/rankStat.nextRankMmr) * 100).toFixed()} className="rankcard-content-info-progress-progressbar-fill">
                            {`${rankStat.mmr} / ${rankStat.nextRankMmr}`}
                        </SEASONBACKGROUND>
                    </div>
                    <R6RankIcon rank={rankStat.nextRankString} size={40}></R6RankIcon>
                </div>
            </div>
            <div className="rankcard-content-stats">
                {stats}
            </div>
        </div>  

        )
    })



    return(
        <>
            <div className="rankcard">
                <SEASONBACKGROUND season={season} className="rankcard-header">
                    <span> OPERATION : {getSeasonName(season)} </span>
                </SEASONBACKGROUND>
                {cardContents}
            </div>
        </>
    )
}



export default class SearchSeasonsTab extends React.Component<Props> {

    /** TO-DO : public, private, properies. */

    
    render(){

        


        let card : JSX.Element[] = [];
        this.props.seasons.forEach( (season, index) => {
            card.push(<RankCard key={`R6_CARD_${index}`} data={season}></RankCard>)
        })
        


        return(
            <>
            {/*
            DUMMY CARD 입니다.
            로딩방식이 달라질경우 사용합니다.
            <div className="rankcard">
                <div className="rankcard-header dummy">
                    <Skeleton.Input active size={"small"}></Skeleton.Input>
                </div>
                <div className="rankcard-content dummy">
                    <Skeleton active></Skeleton>
                </div>
            </div> */}
                {
                    card
                }
            </>
        )
    }
}
