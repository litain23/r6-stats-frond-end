import styled from 'styled-components'
import { blue } from '@ant-design/colors';

export const CardHeader = styled.div`
    border-bottom: 1px solid grey;
    border-left: 4px solid ${blue.primary};

    font-size: 18px;
    text-transform: uppercase;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    padding-left: 8px;
    background: #1f1f1f;
`;

export const CardContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background: #1f1f1f;

    margin-bottom: 1rem;
`;