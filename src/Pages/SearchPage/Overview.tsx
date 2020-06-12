import React from 'react';
import '../../App.css'

import { PVPAPI, RANKREGIONSTATAPI, GENERALAPI} from '../../util/type'
import {AllSeasonHighMmr} from './SubComponent/AllSeasonHighMmr'

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
    background: red;
    height: 1080px;
`;

const B = styled.div`
    width: 30%;
    background: blue;
`;

const A = styled.div`
    width: 70%;
    background: green;
`;

export default class SearchOverviewTab extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return(
            <>
                <div style={{display: "flex", background: "red", height: "1080px"}}>
                    <A>

                    </A>
                    <B>
                        <AllSeasonHighMmr allRankData={this.props.allRankStat}></AllSeasonHighMmr>
                    </B>
                </div>
            </>                
        )
    }
}


