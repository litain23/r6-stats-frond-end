import React from 'react'
import {Card, Spinner} from 'react-bootstrap'
import styled from 'styled-components';


type presentationStyle = "full" | "hover" | "normal" 
export type R6SpinnerProps = {
    /** spinner 표현 방식입니다. 총 3가지 표현방식이 있습니다. */
    presentationStyle:presentationStyle 
}

//theming
//https://github.com/styled-components/styled-components/issues/330

//advanced
//https://styled-components.com/docs/advanced

const HoverStyle = styled.section`
    display:flex;
    flex-direction:column;
    width:120px;
    height:120px;
    background:'white';
    border-radius:10px;
    justify-content:center;
    align-items:center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const FullStyle = styled.section`
    position:fixed;
    top: 0;
    left: 0;
    display:flex;
    flex-direction:column;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.5);
    justify-content:center;
    align-items:center;
`;

const NormalStyle = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

/**
 * `bootstrap`의 spinner를 응용한 `R6Spinner`는 필요한 부분을 재조합하여 컴포넌트화 하였습니다.
 * 
 * Props는 세가지 종류의 문자열을 받습니다.
 * 
 * - `full`은 전체 화면을 꽉채우는 spinner 스타일입니다.
 * - `hover`는 흰색 배경화면에 쉐도우를 적용한 박스위에 spinner를 올린 스타일입니다.
 * - `normal`는 spinner와 문자열만 적용한 스타일입니다.
 */
const R6Spinner = ({presentationStyle} : R6SpinnerProps ) => {
    
    switch(presentationStyle){
        case "full":
            return(     
                <FullStyle>
                    <Spinner animation="border" variant="dark" />
                    <div style={{marginTop:'10px'}}>Loading...</div>
                </FullStyle>
            )        
        case "normal":
            return(     
                <NormalStyle>
                    <Spinner animation="border" variant="dark" />
                    <div style={{marginTop:'10px'}}>Loading...</div>
                </NormalStyle>
            )
    
        case "hover":    
            return(
                <HoverStyle>
                    <Spinner animation="border" variant="dark" />
                    <div style={{marginTop:'10px'}}>Loading...</div>
                </HoverStyle>
            )
    }
}

R6Spinner.defaultProps = {
    presentationStyle : "normal"
}



export default R6Spinner;

