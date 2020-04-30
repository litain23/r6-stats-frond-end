import React from 'react';
import { action } from '@storybook/addon-actions';
import BlackCard from '../Components/BlackCard'
import { withKnobs,text, boolean } from '@storybook/addon-knobs';
import { Card } from 'react-bootstrap'
import {Button,ButtonGroup} from "reactstrap";

export default {
  title: 'Component|Search Page/BlackCard',
  component: BlackCard,
  decorators:[withKnobs],
  componentSubtitle: '"안녕하세요"라고 보여주는 컴포넌트'
};


export const Default = () => {
    const title = text('제목', '카드제목');
    const isHeaderVisible = boolean('헤더노출여부', true);
    return (<BlackCard title={title} isHeaderVisible={isHeaderVisible}>
        카드컨텐츠
    </BlackCard>);
  }

  export const WithHeader = () => {
    return (<BlackCard title={"카드제목"}>
        카드컨텐츠
    </BlackCard>);
  }

  export const WithoutHeader = () => {
    return (<BlackCard title={"카드제목"} isHeaderVisible={false}>
        카드컨텐츠
    </BlackCard>);
  }