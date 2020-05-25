import React, {useState} from 'react';
import R6ToggleButtonGroup from '../R6Components/R6ToggleButtonGroup'
import R6ToggleButton from '../R6Components/R6ToggleButton'

import { withKnobs,text, boolean, color } from '@storybook/addon-knobs';

export default {
  title: 'R6-Component|R6ToggleButton/R6ToggleButtonGroup',
  component: R6ToggleButtonGroup,
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

    return (<R6ToggleButtonGroup currentValue={value} onChange={handler}>
        <R6ToggleButton value={1}>위치</R6ToggleButton>
        <R6ToggleButton value={2}>이상</R6ToggleButton>
        </R6ToggleButtonGroup>
      );
    }
