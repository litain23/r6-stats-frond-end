import React, { useState, DOMAttributes } from 'react';
import styled , {ThemeProvider} from 'styled-components';
import * as themes from '../util/theme';
import {colorType, sizeType} from '../util/theme';
import R6ToggleButton, { R6ToggleButtonProps } from './R6ToggleButton'


// https://egghead.io/lessons/react-use-react-cloneelement-to-extend-functionality-of-children-components
// https://github.com/react-bootstrap/react-bootstrap/blob/master/src/ToggleButtonGroup.js
// https://reactjs.org/docs/react-api.html#reactchildren
// width를 동일하게 해줘야한다.. 모든 width를 동일하게 취해줘야한다.
// http://jsfiddle.net/2nY9N/3/
// https://react-bootstrap.github.io/getting-started/theming/

export interface R6ToggleButtonGroupProps<T> {
    /** 이 컴포넌트 하위에 들어가게 될 R6ToggleButton 내용입니다. */
    children: React.ReactNode;
    /** 현재 ToggleButtonGroup이 활성화 하고 있는 버튼의 Value입니다. */
    currentValue?: T;
    /** 버튼을 클릭했을 때, 어떤 버튼이 클릭했는지 이 콜백함수를 통해 전달됩니다. */
    onChange?:(value: T) => void;
}

const DIV = styled.section`
    width:100%;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
`;

function map(children : React.ReactNode, func: (child : React.ReactElement, index:number, total : number)=>void) {
    let index = 0;
    return React.Children.map(children, (child) =>
      React.isValidElement(child) ? func(child, index++, React.Children.count(children)) : child,
    );
}

/** `R6ToggleButtonGroup`은 버튼을 세그먼트 버튼 형식으로 사용할 수 있게 만들어놓은 컴포넌트입니다.
 * 
 * 현재는 단 `radio type`만 지원합니다.
 * 
 * `R6ToggleButton`과 같이 씁니다. */
const R6ToggleButtonGroup = ({children, currentValue, onChange}:R6ToggleButtonGroupProps<number>) => {

    const handleToggles = (inputVal: number, e?: React.MouseEvent<HTMLButtonElement>) => {
        if (onChange) {
            onChange(inputVal)
        }
    }

    return(
        <DIV>
            {
            map(children, (child, index, total)=> {

                const { value : childVal } = (child.props as R6ToggleButtonProps)
                const handler = (e? : React.MouseEvent<HTMLButtonElement>) => { handleToggles(childVal, e) }
                // const { value: Childvalue , onClick }= (child.props as ToggleButtonProps)
                
                let position : "first" | "last" | "middle" = "middle";
                if (index == 0) {
                    position = "first"
                }
                if (index == total-1) {
                    position = "last"
                }

                return React.cloneElement<R6ToggleButtonProps>(child, {
                    checked: currentValue != null && currentValue == childVal,
                    position:position,
                    onClick:handler,
                }
                )
            })  
        }   
        </DIV>
    )
}

export default R6ToggleButtonGroup;