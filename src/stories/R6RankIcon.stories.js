import React from 'react';
import styled from 'styled-components';
import R6RankIcon, {rankIconTypes} from '../R6Components/R6RankIcon'
import { withKnobs,text, boolean, color } from '@storybook/addon-knobs';

export default {
  title: 'R6-Component|R6RankIcon',
  component: R6RankIcon,
  decorators:[withKnobs],
  parameters: 
  {    
    componentSubtitle: 'R6 게임 랭크 아이콘 모음',
  }
};

const ulgrid = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  li {
    box-sizing: border-box;
    width: 25%;
    padding: 1rem;
    display: flex;
    align-items: center;
    svg {
      margin-right: 1rem;
    }
  }
`;

export const listOfIcons = () => {
    return (
        <>
        {/* <R6RankIcon rank={"rank21"} size={20} />
        <R6RankIcon rank={"rank10"} size={20} /> */}

        {rankIconTypes.map(icon => (
              <R6RankIcon rank={icon} size={50} />
          ))}
        </>
    );
}
