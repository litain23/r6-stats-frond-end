import React from 'react';
import '../../App.css'

import { PVPAPI, RANKREGIONSTATAPI, GENERALAPI} from '../../util/type'
import { AllSeasonHighMmr } from './Overview/AllSeasonHighMmr'
import { OverviewGeneralCard } from './Overview/GeneralPvpCard'
import { OverviewPvpCard } from './Overview/PvpCard'


import { Statistic , Typography} from 'antd';
import { Row, Col } from 'antd';

import styled from 'styled-components';

const { Title , Paragraph , Text} = Typography

interface Props {
    generalData: GENERALAPI,
    rankPvpData: PVPAPI,
    casualPvpData: PVPAPI,
    allRankStat: RANKREGIONSTATAPI[]
}

const StatContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: red;
    height: 1080px;

    @media(min-width: 1140px) {
        display: grid;
    }
`;

const A = styled.div`
    grid-column: 1;
    background: green;
`;

const B = styled.div`
    grid-column: 2;
    background: blue;
`;


export default class SearchOverviewTab extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return(
            <StatContainer>
                <A>
                    <OverviewGeneralCard generalData={this.props.generalData}></OverviewGeneralCard>
                    <OverviewPvpCard title="Rank" pvpData={this.props.rankPvpData}></OverviewPvpCard>
                    <OverviewPvpCard title="Casual" pvpData={this.props.casualPvpData}></OverviewPvpCard>
                </A>
                <B>
                    <AllSeasonHighMmr allRankData={this.props.allRankStat}></AllSeasonHighMmr>
                </B>
            </StatContainer>
        )
    }
}


