import React from 'react';
import R6Button from '../Components/R6Button'
import { withKnobs } from '@storybook/addon-knobs';

export default {
    title: 'R6-Component|R6Button',
    component: R6Button,
    // decorators:[withKnobs],
    // parameters: 
    // {    
    //   componentSubtitle: 'R6 Project용 커스텀 버튼.',
    // }
  };

  export const Default = () => {
    return (
        <>
        <R6Button/>
        </>
    )
  }