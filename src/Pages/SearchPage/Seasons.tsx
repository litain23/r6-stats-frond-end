import React from 'react';
import '../../App.css'
import './seasons.css'
import { RANKREGIONSTATAPI, RANKTEMPAPI} from '../../util/type'
import { Statistic } from 'antd';
import { Row, Col } from 'antd';

import { R6RankIcon } from '../../R6Components';

interface Props {
    seasons: RANKREGIONSTATAPI[]
}

export default class SearchSeasonsTab extends React.Component<Props> {
    
    /** TO-DO : public, private, properies. */
    private cardContentGenerator(items: RANKTEMPAPI[]) {
        return items.forEach( (item) => {
            return (
                <div>
                    {item.rankStat.rank}
                </div>
            )
        })
    }
    

    private cardGenerator(title: string, items : RANKTEMPAPI[]) {
        let result = [];
        for( let i = 0; i < items.length ; i++) {
            const item = items[i];
            result.push(
                <div className="card-content">
                    <div className="card-content-ranks">
                        <div className="card-content-ranks-content">
                        <p className="region">
                            {item.region}
                        </p>
                        <span className="rank">
                            {item.rankStat.rankString}
                        </span>
                        <div className="rank-bar">
                            <R6RankIcon rank={item.rankStat.rank} size={45}></R6RankIcon>
                            <div className="progress-bar">
                                <span> {item.rankStat.mmr} </span>
                            </div>
                            <R6RankIcon rank={item.rankStat.rank+1} size={45}></R6RankIcon>
                        </div>
                    </div>
                </div>
                <div className="card-content-stats">
                <Row gutter={[24, 24]} style={{textAlign:'center'}} justify="center" align="middle">
                    <Col className="gutter-row" xs={24} sm={12}  md={6} >
                        <Statistic title="kill" decimalSeparator={","} value={item.rankStat.kills} />
                    </Col>
                    <Col className="gutter-row" xs={24}  sm={12} md={6} >
                        <Statistic title="death" decimalSeparator={","}  value={item.rankStat.death}/>
                    </Col>
                    <Col className="gutter-row" xs={24}  sm={12}  md={6}>
                        <Statistic title="wins" decimalSeparator={","}  value={item.rankStat.wins} />
                    </Col>
                    <Col className="gutter-row" xs={24}  sm={12} md={6}>
                        <Statistic title="losses" decimalSeparator={","}  value={item.rankStat.losses}  />
                    </Col>
                </Row>
                <Row gutter={[24, 24]} style={{textAlign:'center'}} justify="center" align="middle">
                    <Col className="gutter-row" xs={24} sm={12}  md={6} >
                        <Statistic title="ABANDONS" decimalSeparator={","} value={item.rankStat.abandons} />
                    </Col>
                    <Col className="gutter-row" xs={24} sm={12}  md={6} >
                        <Statistic title="Rank" decimalSeparator={","} value={item.rankStat.rankString} />
                    </Col>
                    <Col className="gutter-row" xs={24} sm={12}  md={6} >
                        <Statistic title="MaxRank" decimalSeparator={","} value={item.rankStat.maxRankString} />
                    </Col>
                    <Col className="gutter-row" xs={24} sm={12}  md={6} >
                        <Statistic title="MMR" decimalSeparator={","} value={item.rankStat.mmr} />
                    </Col>

                </Row>                <Row gutter={[24, 24]} style={{textAlign:'center'}} justify="center" align="middle">
                    <Col className="gutter-row" xs={24} sm={12}  md={6} >
                    <Statistic title="MMR" decimalSeparator={","} value={item.rankStat.maxMmr} />
                    </Col>
                </Row>

                </div>
            </div>  
            )
        }
        
        return(
            <>
            <div className="card">
            <div className="card-header"> 
            <span> {title} </span>
            </div>
            {
              result
            }
            </div>
            </>
        )
    }

    render(){
        /** 
         * 현재 season에 관련된것을 바꿔주기.
         */

        const all = this.props.seasons;

        const ncsa = all[0].rankStat;
        const emea = all[1].rankStat;
        const apac = all[2].rankStat;

        const allUnFilered = ncsa.concat(emea, apac);

        const wholeData = allUnFilered.reduce( (prev, current, _index, _array) => {
            const seasons = current.season;
            const id = `season${seasons}`;
            if(!prev[id]){
                prev[id] = [];
                 const region = current.region;
                 prev[id].push(
                     {"region" : region,
                     "rankStat" : current}
                 )
            } else {
                const region = current.region;
                prev[id].push(
                    {"region" : region,
                    "rankStat" : current}
                )
            }

            return prev;
        }, {} as any)


        const keys = Object.keys(wholeData)
        let result = [];

        for (let i = 0; i < keys.length ; i++) {
            result.push(this.cardGenerator(keys[i],wholeData[keys[i]]))
        }

        return(
            <>
            {
                result
            }
            </>
        )
    }
}
