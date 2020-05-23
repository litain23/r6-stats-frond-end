import React from 'react';
import R6Br from '../R6Components/R6Br'
import { withKnobs,number } from '@storybook/addon-knobs';

export default {
  title: 'R6-Component|R6Br',
  component: R6Br,
  decorators:[withKnobs],
  parameters: 
  {    
    componentSubtitle: 'R6 Project용 공백 생성 컴포넌트',
  }
};
//https://velog.io/@velopert/create-your-own-design-system-with-storybook

export const Default = () => {
    const sizeProp = number('커스텀 사이즈', 10);
    return (
        <>
        <div style={{backgroundColor:"#e84057", height:'100px', color:'white'}}> 위와 </div>
        <R6Br size={sizeProp}/>
        <div style={{backgroundColor:"#5383e8", height:'100px', color:'white'}}> 아래의 거리 </div>
        </>
    )
  }

  export const Small = () => {
    return (
        <>
        <div style={{backgroundColor:"#e84057", height:'100px', color:'white'}}> 위와 </div>
        <R6Br size="sm"/>
        <div style={{backgroundColor:"#5383e8", height:'100px', color:'white'}}> 아래의 거리 </div>
        </>
    )
}


export const Large = () => {
    return (
        <>
        <div style={{backgroundColor:"#e84057", height:'100px', color:'white'}}> 위와 </div>
        <R6Br size="lg"/>
        <div style={{backgroundColor:"#5383e8", height:'100px', color:'white'}}> 아래의 거리 </div>
        </>
    )
}