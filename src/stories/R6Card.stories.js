import React from 'react';
import R6Card from '../Components/R6Card'
import { withKnobs,text, boolean, color } from '@storybook/addon-knobs';

export default {
  title: 'R6-Component|R6Card',
  component: R6Card,
  decorators:[withKnobs],
  parameters: 
  {    
    componentSubtitle: 'R6 Project용 부트스트랩 전용 카드 컴포넌트',
  }
};
//https://velog.io/@velopert/create-your-own-design-system-with-storybook

export const Default = () => {
    const titleProp = text('제목', '카드제목');
    const visibleProp = boolean('헤더노출여부', true);
    const backgroundColorProp = color('배경색상', "#31313C")
    const fontColorProp = color('폰트색상', "white")
    return (<R6Card title={titleProp} visible={visibleProp} backgroundColor={backgroundColorProp} fontColor={fontColorProp}>
        카드컨텐츠
    </R6Card>);
  }

  export const WithHeader = () => {
    return (<R6Card title={"카드제목"}>
        카드컨텐츠
    </R6Card>);
  }

  export const WithoutHeader = () => {
    return (<R6Card title={"카드제목"} visible={false}>
        카드컨텐츠
    </R6Card>);
  }
