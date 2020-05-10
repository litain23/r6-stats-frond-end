import React from 'react';
import { action } from '@storybook/addon-actions';
import SegmentedControls from '../Components/SegmentedControls'
import { withKnobs,text, boolean, number, color, select, radios} from '@storybook/addon-knobs';

export default {
  title: 'R6-Component|R6SegmentedControls',
  component: SegmentedControls,
  decorators:[withKnobs],
  componentSubtitle: '"안녕하세요"라고 보여주는 컴포넌트'
};

export const Default = () => {
    const heightProp = number("높이", 50, {
        range: true,
        min: 40,
        max: 70,
        step: 2,
     })

    const label = '선택지';
    const options = {
      "3개": [
        {name: "1번 메뉴",
        handler: action("#3-1 clicked!")},
        {name: "2번 메뉴",
        handler: action("#3-2 clicked!")},
        {name: "3번 메뉴",
        handler: action("#3-3 clicked!")}
    ],
      "4개": [
        {name: "1번 메뉴",
        handler: action("#4-1 clicked!")},
        {name: "2번 메뉴",
        handler: action("#4-2 clicked!")},
        {name: "3번 메뉴",
        handler: action("#4-3 clicked!")},
        {name: "4번 메뉴",
        handler: action("#4-4 clicked!")}
    ],
      "5개": [
        {name: "1번 메뉴",
        handler: action("#5-1 clicked!")},
        {name: "2번 메뉴",
        handler: action("#5-2 clicked!")},
        {name: "3번 메뉴",
        handler: action("#5-3 clicked!")},
        {name: "4번 메뉴",
        handler: action("#5-4 clicked!")},
        {name: "5번 메뉴",
        handler: action("#5-5 clicked!")}
    ]};
    const defaultValue = [
      {name: "1번 메뉴",
      handler: action("#3-1 clicked!")},
      {name: "2번 메뉴",
      handler: action("#3-2 clicked!")},
      {name: "3번 메뉴",
      handler: action("#3-3 clicked!")}
  ]

    const dataProp = select(label, options, defaultValue);

    return (
    <div style={{width:'600px', height:'500px'}}>
    <SegmentedControls 
        data={dataProp}
        height={heightProp}
    />
    
    </div>);
  }


