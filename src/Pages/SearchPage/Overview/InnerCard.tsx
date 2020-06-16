import React from 'react'
import '../../../App.css'

import styled from 'styled-components'

interface Props {
    title: string,
    data: any
}

const Card = styled.div`
    flex: 1 0 40%;

    margin: 12px;
    @media(min-width: 954px) {
        flex: 1 0 21%
    }
`;

const CardTitle = styled.div`
    text-transform: uppercase;
    font-family: Roboto, sans-serif;
    font-weight: 600;
    color: grey;
`;

const CardData = styled.div`
    font-size: 24px;
    font-weight: 800;
    color: white;
`;


export const InnerCard = (props: Props) => (
    <Card>
        <CardTitle>{props.title}</CardTitle>
        <CardData>{props.data}</CardData>
    </Card>
)