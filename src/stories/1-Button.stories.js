import React from 'react';
import { action } from '@storybook/addon-actions';
import Hello from '../Components/Hello'
import { withKnobs,text, boolean } from '@storybook/addon-knobs';

export default {
  title: '필수|필수/Hello',
  component: Hello,
  decorators:[withKnobs],
  componentSubtitle: '"안녕하세요"라고 보여주는 컴포넌트'
};

export const Default = () => {
  const big = boolean('big', false);
  const name = text('name', 'Storybook');
  return (<Hello>Primary</Hello>
  );
  
}

