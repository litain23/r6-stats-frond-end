import React from "react";
import styled from 'styled-components';

export type R6ButtonGroupProps = {
  /** 버튼을 보여줄 방향 */
  direction: 'row' | 'column';
  /** 버튼을 우측에 보여줍니다. */
  rightAlign?: boolean;
  /** 버튼과 버튼사이의 간격을 설정합니다. */
  gap: string;
  /** 버튼 그룹에서 보여줄 버튼들 */
  children: React.ReactNode;
  /* 스타일 커스터마이징 하고싶을 때 사용 */
  className?: string;
};


const DIV = styled.section<R6ButtonGroupProps>`
  display:flex;
  flex-direction: ${props=>props.direction};
  ${props=> props.rightAlign? 'justify-content: flex-end;' : ''}
  button+button {
    margin-left:${props=> props.direction == 'row' ? props.gap : 0};
    margin-top:${props=> props.direction == 'column' ? props.gap  : 0};
  };

`;

/** `R6ButtonGroup` 은 `R6Button`을 그룹핑 했을때의 배치를 미리 스타일화 해놓았습니다. */
const R6ButtonGroup = ({
    children,
    direction,
    gap,
    className,
    rightAlign,
  }: R6ButtonGroupProps) => {
    return (
      <DIV rightAlign={rightAlign} direction={direction} gap={gap} className={className}>
        {children}
      </DIV>
    );
  };


R6ButtonGroup.defaultProps = {
  direction: 'row',
  gap: '0.5rem'
};

  
export default R6ButtonGroup;
  