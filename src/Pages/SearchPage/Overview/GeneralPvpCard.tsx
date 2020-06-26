import React from 'react';
import '../../../App.css'

import { GENERALAPI, getDayFromSecond}  from '../../../util/type'
import { InnerCard } from './InnerCard'
import { CardHeader, CardContent } from './StyledCss'

interface Props {
    generalData : GENERALAPI
}

export class OverviewGeneralCard extends React.Component<Props> {

    render() {

        let parsedData : { [key: string]: string|number}  = {};

        parsedData["킬 수"] = this.props.generalData.kills;
        parsedData["데스 수"] = this.props.generalData.death;
        parsedData["헤드샷률"] = (this.props.generalData.headShot / this.props.generalData.kills) * 100;
        parsedData["벽관통 킬"] = this.props.generalData.penetrationKills;
        parsedData["근접 킬"] = this.props.generalData.meleeKills;
        parsedData["헤드샷 킬"] = this.props.generalData.headShot;
        parsedData["승률"] = this.props.generalData.matchWon / this.props.generalData.matchLost;
        parsedData["매치당 킬"] = this.props.generalData.kills / this.props.generalData.matchPlayed;
        parsedData["K/D"] = this.props.generalData.kills / this.props.generalData.death;
        parsedData["승리"] = this.props.generalData.matchWon;
        parsedData["패배"] = this.props.generalData.matchLost;
        parsedData["플레이 시간"] = getDayFromSecond(this.props.generalData.timePlayed);
        // parsedData["플레이 시간"] = this.props.generalData.timePlayed;


        let generalCardList = [];
        for(let [key, value] of Object.entries(parsedData)) {
            if (typeof value === "number") {
                value = Math.round(value * 1000) / 1000;
            }
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