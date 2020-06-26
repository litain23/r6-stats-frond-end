import React from 'react';
import '../../App.css'

import { PVPAPI, SEASONAPI, GENERALAPI} from '../../util/type'
import { AllSeasonHighMmr } from './Overview/AllSeasonHighMmr'
import { OverviewGeneralCard } from './Overview/GeneralPvpCard'
import { OverviewPvpCard } from './Overview/PvpCard'

import styled from 'styled-components';

interface Props {
    generalData: GENERALAPI,
    rankPvpData: PVPAPI,
    casualPvpData: PVPAPI,
    allRankStat: SEASONAPI[]
}

const StatContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 1080px;

    @media(min-width: 954px) {
        display: grid;
    }

    margin-top: 2rem;
`;

const LeftSideContainer = styled.div`
    grid-column: 1;
    margin-right: 1rem;
`;

const MainContainer = styled.div`
    grid-column: 2;
`;


export default class SearchOverviewTab extends React.Component<Props> {

    render() {
        return(
            <StatContainer>
                 <LeftSideContainer>
                    <AllSeasonHighMmr allRankData={this.props.allRankStat}></AllSeasonHighMmr>
                </LeftSideContainer>
                <MainContainer>
                    <OverviewGeneralCard generalData={this.props.generalData}></OverviewGeneralCard>
                    <OverviewPvpCard title="Rank" pvpData={this.props.rankPvpData}></OverviewPvpCard>
                    <OverviewPvpCard title="Casual" pvpData={this.props.casualPvpData}></OverviewPvpCard>
                </MainContainer>
            </StatContainer>
        )
    }
}


