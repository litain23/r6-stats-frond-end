import styled from 'styled-components'
import { blue } from '@ant-design/colors';

export const CardHeader = styled.div`
    border-bottom: 1px solid grey;
    border-left: 4px solid ${blue.primary};
    text-transform: uppercase;
    padding : .8rem 1.6rem;
    background: #1f1f1f;
    font-size: 1.1rem;
    font-weight: 900;
`;

export const CardContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background: #1f1f1f;
    margin-bottom: 1rem;
`;