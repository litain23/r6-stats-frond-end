import React from 'react';
import R6CardComp from '../R6Components/R6CardComp'
import { withKnobs,text, boolean, color } from '@storybook/addon-knobs';

export default {
  title: 'R6-Component|R6CardComp',
  component: R6CardComp,
  decorators:[withKnobs],
  parameters: 
  {    
    componentSubtitle: 'R6 Project용 부트스트랩 전용 카드 컴포넌트',
  }
};



export const Default = () => {
   return(<R6CardComp>

   </R6CardComp>
   )
}