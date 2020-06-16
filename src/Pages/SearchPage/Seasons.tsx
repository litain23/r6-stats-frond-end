import React from 'react';
import '../../App.css'
import './seasons.css'
import { RANKREGIONSTATAPI, RANKTEMPAPI, RANKTEMPAPI2, getRegion} from '../../util/type'


import { R6RankIcon } from '../../R6Components';
import styled from 'styled-components';
import { SeasonInfo } from '../../util/theme';
import { SeasonName } from '../../R6Components/R6RankSeasonName';

interface Props {
    seasons: RANKREGIONSTATAPI[]
}

const SEASONBACKGROUND = styled.div<SeasonInfo>`
    background-color:${props=> props.theme.seasonColors(props.season)};
    ${props => (props.fill)? 'width:' + props.fill.toString() + '%;' : ""  }
`

const RankCard = (temp1:{dataTemp : RANKTEMPAPI2}) => {

    const season = temp1.dataTemp.season;
    const items = temp1.dataTemp.data;

    let temp = [];
    let temp2 = [];

    for (const item of items) {
    
        temp2.push(
            <div className="rankcard-content">
                <div className="rankcard-content-info">
                    <div className="rankcard-content-info-area">
                        {getRegion(item.region)}
                    </div>
                    <div className="rankcard-content-info-tier">
                        {item.rankStat.rankString.toUpperCase()}
                    </div>
                    <div className="rankcard-content-info-progress">
                        <R6RankIcon rank={item.rankStat.rank} size={40}></R6RankIcon>
                        <div className="rankcard-content-info-progress-progressbar">
                            <SEASONBACKGROUND season={item.rankStat.season} fill={(item.rankStat.mmr/5000 * 100).toFixed()} className="rankcard-content-info-progress-progressbar-fill">
                                {`${item.rankStat.mmr}` + "/" + `${5000}`}
                            </SEASONBACKGROUND>
                        </div>
                        <R6RankIcon rank={item.rankStat.rank+1} size={40}></R6RankIcon>
                    </div>
                </div>
                <div className="rankcard-content-stats">
                    <div className="item"> 
                        <div className="item-header">
                            Kills
                        </div>
                        <div className="item-data">
                            {item.rankStat.kills}
                        </div>
                    </div>
                    <div className="item"> 
                        <div className="item-header">
                            Death
                        </div>
                        <div className="item-data">
                            {item.rankStat.death}
                        </div>
                    </div>
                    <div className="item"> 
                        <div className="item-header">
                            Wins
                        </div>
                        <div className="item-data">
                            {item.rankStat.wins}
                        </div>
                    </div>
                    <div className="item"> 
                        <div className="item-header">
                            Losses
                        </div>
                        <div className="item-data">
                            {item.rankStat.losses}
                        </div>
                    </div>
                    <div className="item"> 
                        <div className="item-header">
                            Abandons
                        </div>
                        <div className="item-data">
                            {item.rankStat.abandons}
                        </div>
                    </div>
                    <div className="item"> 
                        <div className="item-header">
                            Rank
                        </div>
                        <div className="item-data">
                            {item.rankStat.rank}
                        </div>
                    </div>
                    <div className="item"> 
                        <div className="item-header">
                            Max Rank
                        </div>
                        <div className="item-data">
                            {item.rankStat.maxRankString}
                        </div>
                    </div>
                    <div className="item"> 
                        <div className="item-header">
                            MMR
                        </div>
                        <div className="item-data">
                            {item.rankStat.mmr}
                        </div>
                    </div>
                    <div className="item"> 
                        <div className="item-header">
                            Max MMR
                        </div>
                        <div className="item-data">
                            {item.rankStat.maxMmr}
                        </div>
                    </div>

                </div>
            </div>  
        )

    }

    return(
        <>
            <div className="rankcard">
                <SEASONBACKGROUND season={season} className="rankcard-header">
                    <span> {SeasonName[season]} </span>
                </SEASONBACKGROUND>
                {temp2}
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

        const all = this.props.seasons;
        const ncsa = all[0].rankStat;
        const emea = all[1].rankStat;
        const apac = all[2].rankStat;
        const allUnFilered = ncsa.concat(emea, apac);

        const wholeData = allUnFilered.reduce( (prev, curr, index, array) => {
            
            const season = curr.season;
            const region = curr.region;

            if (!prev[season]) {
                prev[season.toString()] = { season : season, data : [{region: region, rankStat: curr}] } as RANKTEMPAPI2
            } else {
                prev[season.toString()].data.push({region: region, rankStat: curr})
            }
            return prev;
        }, {} as any)

        let temp = [];
        for (let [key,value] of Object.entries(wholeData)) {
            temp.push(value);
        }

        const actualData = temp.sort((a : any ,b : any ) => { 

            if (a.season > b.season) {
                return -1;
            } else {
                return 1;
            }
        }) as RANKTEMPAPI2[];
                

        let temp3 = [];
        for(let actualDatum of actualData) {
            temp3.push(<RankCard dataTemp={actualDatum}></RankCard>)
        }
        return(
            <>
                {
                    temp3
                }
            </>
        )
    }
}
