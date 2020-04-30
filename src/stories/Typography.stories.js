import React from 'react';
import { action } from '@storybook/addon-actions';
import Typography from '../Components/Typography'
import { withKnobs,text, boolean, number, color, select, radios} from '@storybook/addon-knobs';

export default {
  title: 'Component|Search Page/Typography',
  component: Typography,
  decorators:[withKnobs],
};

export const Default = () => {
    const header = text('위 글씨', '킬 수');
    const figure = text('숫자', '120');
    const sign = text('기호(있을경우만)', '');
    const bottom = text('아래 글씨', '총 킬 수 200회');

    return (
        <div style={{backgroundColor:"black"}}>
    <Typography bottom={bottom} header={header} figure={figure} sign={sign}>
    </Typography>
    </div>);
  }
