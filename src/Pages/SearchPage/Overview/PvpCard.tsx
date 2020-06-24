import React from 'react';
import '../../../App.css'

import { PVPAPI }  from '../../../util/type'
import { InnerCard } from './InnerCard';
import { CardHeader, CardContent } from './StyledCss'
import { convertSecondToHour, convertThreeDemicalPoint } from './util';

interface Props {
    title: String,
    pvpData: PVPAPI
}

export class OverviewPvpCard extends React.Component<Props> {
    render() {
        let parsedData : { [key: string]: number | string }  = {};
        parsedData["Kills"] = this.props.pvpData.kills;
        parsedData["Death"] = this.props.pvpData.death;
        parsedData["K/D"] = convertThreeDemicalPoint(parsedData.Kills / parsedData.Death);
        parsedData["Play Time"] = convertSecondToHour(this.props.pvpData.timePlayed);
        parsedData["Win"] = this.props.pvpData.matchWon;
        parsedData["Lose"] = this.props.pvpData.matchLost;
        parsedData["Win %"] = convertThreeDemicalPoint(parsedData.Win / parsedData.Lose);
        parsedData["Kill / Match"] = convertThreeDemicalPoint(parsedData.Kills / this.props.pvpData.matchPlayed);

        let result = [];
        for(let [key, value] of Object.entries(parsedData)) {
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