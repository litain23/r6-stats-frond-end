import React from 'react';
import '../../../App.css'

import { GENERALAPI}  from '../../../util/type'
import { InnerCard } from './InnerCard'
import { CardHeader, CardContent } from './StyledCss'
import { convertSecondToHour, convertThreeDemicalPoint } from './util';

interface Props {
    generalData : GENERALAPI
}

const parsing = (data : GENERALAPI) => {
    let parsedData : { [key: string]: number | string } = {};
    parsedData["KILLS"] = data.kills;
    parsedData["DEATH"] = data.death;
    parsedData["K/D"] = convertThreeDemicalPoint(data.kills / data.death);
    parsedData["PLAY TIME"] = convertSecondToHour(data.timePlayed);
    parsedData["PENETRATION KILL"] = data.penetrationKills
    parsedData["HEAD SHOT"] = data.headShot
    parsedData["HEAD SHOT %"] = convertThreeDemicalPoint(data.headShot / data.kills);
    parsedData["MELEE KILL"] = data.meleeKills;
    parsedData["WIN"] = data.matchWon;
    parsedData["LOSE"] = data.matchLost;
    parsedData["WIN %"] = convertThreeDemicalPoint(data.matchWon / data.matchPlayed);
    parsedData["KILL / MATCH"] = convertThreeDemicalPoint(data.kills / data.matchPlayed);
    return parsedData;
}

export class OverviewGeneralCard extends React.Component<Props> {
    render() {
        const parsedData = parsing(this.props.generalData);
        let generalCardList = [];
        for(let [key, value] of Object.entries(parsedData)) {
            generalCardList.push(<InnerCard title={key} data={value}></InnerCard>)
        }

        return (
            <>
            <CardHeader>General</CardHeader>
            <CardContent>
                {
                    generalCardList
                }
            </CardContent>
            </>
        )
    }
}