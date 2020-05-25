import React from 'react';
import R6Spinner from '../R6Components/R6Spinner'
import { withKnobs, select } from '@storybook/addon-knobs';

export default {
    title: 'R6-Component|R6Spinner',
    component: R6Spinner,
    decorators:[withKnobs],
    parameters: 
    {    
      componentSubtitle: 'R6 Project용 부트스트랩 Spinner 컴포넌트',
    }
  };
  
export const Default = () => {
    const styleProps = select("스타일", {"normal":"normal", "hover":"hover", "full":"full"}, "normal")
    return (<R6Spinner presentationStyle={styleProps}/>);
  }

export const Normal = () => {
  return (<R6Spinner presentationStyle={"normal"}/>);
}
export const Hover = () => {
  return (<R6Spinner presentationStyle={"hover"}/>);
}

export const Full = () => {
  return (<R6Spinner presentationStyle={"full"}/>);
}


