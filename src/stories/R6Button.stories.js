import React from 'react';
import R6Button from '../Components/R6Button'
import { withKnobs, number, select, boolean, text} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
export default {
    title: 'R6-Component|R6Button/R6Button',
    component: R6Button,
    decorators:[withKnobs],
    parameters: 
    {    
      componentSubtitle: 'R6 Project용 커스텀 버튼.',
    }
  };

  export const Default = () => {
    const label = text('버튼 라벨', 'BUTTON');
    const widthProps = number('가로 사이즈', 10);
    const themeProps = select("컬러", ["primary", "danger", "warning"] , "primary")
    const sizeProps = select("사이즈", { large : "lg", medium: "md", small: "sm"},"sm")
    const disableProps = boolean("비활성화", false);
    
    return (
        <>
        
        <R6Button theme={themeProps} size={sizeProps} disabled={disableProps} onClick={action('onClick')}>
          {label}
        </R6Button>
        </>
    )
  }

  export const color = () => {
    return (
        <>
        Primary
        <br></br>
        <R6Button theme='primary' size='lg'>
          Button
        </R6Button>
        <br></br>

        Danger
        <br></br>
        <R6Button theme='danger' size='lg'>
          Button
        </R6Button>
        <br></br>

        Warning
        <br></br>
        <R6Button theme='warning' size='lg'>
          Button
        </R6Button>
        <br></br>

        </>
    )
  }

  export const size = () => {

    return (
        <>
        Large Size Button
        <br></br>
        <R6Button theme='primary' size='lg'>
          Large Button
        </R6Button>
        <br></br>

        Medium Size Button
        <br></br>
        <R6Button theme='primary' size='md'>
          Large Button
        </R6Button>
        <br></br>

        Small Size Button
        <br></br>
        <R6Button theme='primary' size='sm'>
          Large Button
        </R6Button>
        <br></br>
  
        </>
    )
  }

  export const disable = () => {
    return (
        <>
        <R6Button theme='primary' disabled={true}>
          Primary Button
        </R6Button>
        <br></br>

        <br></br>
        <R6Button theme='danger' disabled={true}>
          Danger Button
        </R6Button>
        <br></br>

        <br></br>
        <R6Button theme='warning' disabled={true}>
          Warning Button
        </R6Button>
        <br></br>

        </>
    )
  }