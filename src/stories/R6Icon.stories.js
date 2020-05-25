import React from 'react';
import styled from 'styled-components';
import R6Icon, {R6iconTypes} from '../R6Components/R6Icon'
import { withKnobs,text, boolean, color } from '@storybook/addon-knobs';

export default {
  title: 'R6-Component|R6Icon',
  component: R6Icon,
  decorators:[withKnobs],
  parameters: 
  {    
    componentSubtitle: 'R6 게임 랭크 아이콘 모음',
  }
};

export const Default = () => <R6Icon icon="my" />;
export const customSize = () => <R6Icon icon="my" size="4rem" />;
export const customColor = () => <R6Icon icon="my" color="red" />;

export const customizedWithStyle = () => (
  <R6Icon icon="my" style={{ color: 'red', width: '4rem' }} />
);


const IconListStyle = styled.ul`
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
      <IconListStyle>
        {R6iconTypes.map(icon => (
          <li key={icon}>
            <R6Icon icon={icon} />
            {icon}
          </li>
        ))}
      </IconListStyle>
    );
  };
  
  