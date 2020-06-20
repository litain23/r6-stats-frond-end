import React from 'react';
import '../../../App.css'

import { PVPAPI }  from '../../../util/type'
import { InnerCard } from './InnerCard';
import { CardHeader, CardContent } from './StyledCss'

interface Props {
    title: String,
    pvpData: PVPAPI
}


export class OverviewPvpCard extends React.Component<Props> {
    
    render() {
        let parsedData : { [key: string]: number}  = {};
        parsedData["Kills"] = this.props.pvpData.kills;
        parsedData["Death"] = this.props.pvpData.death;
        parsedData["K/D"] = parsedData.Kills / parsedData.Death;
        parsedData["Play Time"] = this.props.pvpData.timePlayed;
        parsedData["Win"] = this.props.pvpData.matchWon;
        parsedData["Lose"] = this.props.pvpData.matchLost;
        parsedData["Win %"] = parsedData.Win / parsedData.Lose;
        parsedData["Kill / Match"] = parsedData.Kills / this.props.pvpData.matchPlayed;

        let result = [];
        for(let [key, value] of Object.entries(parsedData)) {
            value = Math.round(value * 1000) / 1000;
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