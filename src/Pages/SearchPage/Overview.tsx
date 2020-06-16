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
    // background: red;
    height: 1080px;

    @media(min-width: 954px) {
        display: grid;
    }

    margin-top: 2rem;
`;

const A = styled.div`
    grid-column: 1;
    margin-right: 1rem;
    // background: green;
`;

const B = styled.div`
    grid-column: 2;
    // background: blue;
`;


export default class SearchOverviewTab extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return(
            <StatContainer>
                <A>
                    <AllSeasonHighMmr allRankData={this.props.allRankStat}></AllSeasonHighMmr>
                </A>
                <B>
                    <OverviewGeneralCard generalData={this.props.generalData}></OverviewGeneralCard>
                    <OverviewPvpCard title="Rank" pvpData={this.props.rankPvpData}></OverviewPvpCard>
                    <OverviewPvpCard title="Casual" pvpData={this.props.casualPvpData}></OverviewPvpCard>
                </B>
            </StatContainer>
        )
    }
}


