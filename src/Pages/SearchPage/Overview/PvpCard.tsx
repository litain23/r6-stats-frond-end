import React from 'react';
import '../../../App.css'

import { PVPAPI, getDayFromSecond }  from '../../../util/type'
import { InnerCard } from './InnerCard';
import { CardHeader, CardContent } from './StyledCss'

interface Props {
    title: String,
    pvpData: PVPAPI
}

export class OverviewPvpCard extends React.Component<Props> {
    render() {
        let parsedData : { [key: string]: number|string}  = {};
        parsedData["킬 수"] = this.props.pvpData.kills;
        parsedData["데스 수"] = this.props.pvpData.death;
        parsedData["승률"] = this.props.pvpData.matchWon / (this.props.pvpData.matchWon + this.props.pvpData.matchLost) * 100;
        parsedData["매치당 킬"] = this.props.pvpData.kills / this.props.pvpData.matchPlayed;
        parsedData["K/D"] = this.props.pvpData.kills / this.props.pvpData.death;
        parsedData["승리"] = this.props.pvpData.matchWon;
        parsedData["패배"] = this.props.pvpData.matchLost;
        parsedData["플레이 시간"] = getDayFromSecond(this.props.pvpData.timePlayed);

        let result = [];

        for(let [key, value] of Object.entries(parsedData)) {
            if (typeof value === "number") {
                value = Math.round(value * 1000) / 1000;
            }
            result.push(<InnerCard title={key} data={value}></InnerCard>);
        }

        return (
            <>
            <CardHeader>{this.props.title}</CardHeader>
            <CardContent>
            {
                result
            }
            </CardContent>
            </>
        )
    }
}