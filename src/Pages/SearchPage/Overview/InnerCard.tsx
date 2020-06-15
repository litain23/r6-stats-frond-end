import React from 'react'
import '../../../App.css'

import { Card } from 'antd'

import styled from 'styled-components'

interface Props {
    title: string,
    data: any
}

const CustomCard = styled(Card)`
    flex: 1 0 21%;
    margin: 5px;
`;

export const InnerCard = (props: Props) => (
    <CustomCard title={props.title}>
        <p>{props.data}</p>
    </CustomCard>
)