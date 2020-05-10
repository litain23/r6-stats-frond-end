import React from 'react';
import R6ButtonGroup from '../Components/R6ButtonGroup'
import R6Button from '../Components/R6Button'
import { withKnobs, number, select, boolean, text} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
export default {
    title: 'R6-Component|R6Button/R6ButtonGroup',
    component: R6ButtonGroup,
    decorators:[withKnobs],
    parameters: 
    {    
      componentSubtitle: 'R6 Project용 버튼 그룹핑 컴포넌트.',
    }
  };


export const Default = () => {
    
    return (<R6ButtonGroup direction='row' rightAlign={true} gap={'20px'}>
        <R6Button>위치</R6Button>
        <R6Button>이상</R6Button>
        <R6Button>삼사</R6Button>
        <R6Button>삼사</R6Button>
        <R6Button>삼사</R6Button>
      </R6ButtonGroup>
      );
    
}