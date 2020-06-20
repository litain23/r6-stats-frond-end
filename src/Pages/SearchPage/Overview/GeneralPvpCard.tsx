import React from 'react';
import '../../../App.css'

import { GENERALAPI}  from '../../../util/type'
import { InnerCard } from './InnerCard'
import { CardHeader, CardContent } from './StyledCss'

interface Props {
    generalData : GENERALAPI
}

export class OverviewGeneralCard extends React.Component<Props> {

    render() {
        let generalCardList = [];
        for(let [key, value] of Object.entries(this.props.generalData)) {
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