import React, {useState} from 'react';
import R6ToggleButton from '../R6Components/R6ToggleButton'
import R6ToggleButtonGroup from '../R6Components/R6ToggleButtonGroup'

import { withKnobs,text, boolean, color } from '@storybook/addon-knobs';

export default {
  title: 'R6-Component|R6ToggleButton/R6ToggleButton',
  component: R6ToggleButton,
  decorators:[withKnobs],
  parameters: 
  {    
    componentSubtitle: 'R6 Project용 세그먼트 컨트롤',
  }
};


export const Default = () => {

    const [value, setValue ] = useState(1)

    function handler(value){
      setValue(value)
    }
    
    return (<R6ToggleButtonGroup value={value} onChange={handler}>
        <R6ToggleButton value={1}>위치</R6ToggleButton>
        <R6ToggleButton value={2}>이상</R6ToggleButton>
        <R6ToggleButton value={3}>삼사</R6ToggleButton>
        <R6ToggleButton value={4}>삼사</R6ToggleButton>
        <R6ToggleButton value={5}>삼사</R6ToggleButton>
      </R6ToggleButtonGroup>
      );
    }

export const Test = () => {
  return(<R6ToggleButton>adfafd</R6ToggleButton>)
}