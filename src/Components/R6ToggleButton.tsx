import React from 'react';
import styled , {ThemeProvider} from 'styled-components';
import * as themes from '../util/theme';
import {colorType, sizeType} from '../util/theme';


/**
 * Issue ! 
 * 
 * 레퍼런스 문서 (문서화 및 구현)
 * 
 * addon-docs이 type을 직접 하드코딩해주지 않으면 읽지못한다.
 * 따라서, Prop Type에는 하드코딩을 해준다. (문서화를 위해)
 * 하지만 실제 구현체는 하드코딩이 아닌 Theme에서 가져온걸 쓴다.
 * 따라서 어느 한개라도 서로 데이터의 차이가 나게되면 타입에러가 나도록 한다.
 */

const Button = styled.button<{color:colorType , size: sizeType, checked?:boolean, position? : "first" | "middle" | "last"}>`
  flex-grow:1;
  flex-basis: 0;
  outline: none;
  border: none;
  box-sizing: border-box;
  height: ${props => themes.theme.element.height[props.size]};
  font-size: ${props => themes.theme.font.size.element_font[props.size]};
  padding: ${props => themes.theme.element.padding[props.size]};
  background: ${props => props.checked? themes.theme.theme_color[props.color].active : themes.theme.theme_color[props.color].normal};
  color: white;
  border-radius: ${(props) => props.position == "first" ? '0.35rem 0 0 0.35rem' : (props.position=="last" ? '0 0.35rem 0.35rem 0' : '0')};
  line-height: 1;
  font-weight: 600;
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
  &:hover : enabled {
    background: ${props => themes.theme.theme_color[props.color].hover};
  }
  &:active: enabled {
    background: ${props => themes.theme.theme_color[props.color].active};
  }
  &:disabled {
    cursor: not-allowed;
    background: ${props => themes.theme.theme_color[props.color].disable};
  }
`;
//React.MouseEvent<HTMLButtonElement>


export interface ToggleButtonProps {
  /** 버튼 안의 내용 */
  children: React.ReactNode;
  /** 버튼 활성화 여부 */
  checked?: boolean;
  /** 버튼  */
  disabled?: boolean;
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement> | undefined) => void;
  /** 버튼의 id입니다. */
  value: number;
  /** 버튼이 마지막인지 체크합니다 */
  position? : "first" | "middle" | "last"
};

// theme: "primary" | "danger" | "warning" ;
// /** 버튼의 크기를 설정합니다 */
// size: "lg" | "md" | "sm";
// /** 버튼을 비활성화 시킵니다. */
// disabled?: boolean;
// /** 버튼의 너비를 임의로 설정합니다. */
// width?: string | number;
// /**  */


/** `R6Button` 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다.  */
const R6ToggleButton = ({ children, checked, disabled, onClick, value, position}: ToggleButtonProps) => {
    //value가 필수적일때만
    return (
      <Button color={"primary"} size={"lg"} onClick={onClick} checked={checked} position={position}>
        {children}
      </Button>
    );
};

R6ToggleButton.defaultProps = {
    theme: 'primary',
    size: 'sm',
  };
  
export default R6ToggleButton;
