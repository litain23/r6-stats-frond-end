import React from 'react';
import R6TypoComponent from '../R6Components/R6TypoComponent'
import { withKnobs,text, boolean, number, color, select, radios} from '@storybook/addon-knobs';

export default {
  title: 'R6-COMPONENT|R6TypoComponent',
  component: R6TypoComponent,
  decorators:[withKnobs],
};

export const Default = () => {
    const headerProp = text('위 글씨(header)', '킬 수');
    const bodyProp = text('중간 메인 글씨(body)', '120%');
    const footerProp = text('아래 글씨(footer)', '총 킬 수 200회');
    const colorProp = color("글짜 색상", 'white') 
    const tempProp = color("배경 색상 (임시)", 'black')
    return (
        <div style={{backgroundColor:tempProp}}>
    <R6TypoComponent footer={footerProp} header={headerProp} body={bodyProp} color={colorProp}/>
    </div>);
}

export const withSymbols = () => {
  return (
  <div style={{backgroundColor:"black"}}>
    <R6TypoComponent footer={"밑의 글씨"} header={"위의 글씨"} body={"125&"}/>
  </div>);
}


export const withoutSymbols = () => {
  return (
  <div style={{backgroundColor:"black"}}>
    <R6TypoComponent footer={"밑의 글씨"} header={"위의 글씨"} body={"1,300"}/>
  </div>);
}

