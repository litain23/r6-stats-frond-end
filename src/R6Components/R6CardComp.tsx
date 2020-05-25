
import styled from 'styled-components'
import React from 'react';
// import {theme} from '../util/theme';



// type IconType = keyof typeof theme.theme_color | keyof typeof theme.color.dark.gray.dark.


// const CardContainer = styled.section<{bgcolor:string, bordercolor:string}>`
//     display:flex;
//     flex-direction: column;
//     background-color:${theme.color.dark.gray.dark};
//     width:100%;
//     border-radius:0.25rem;
//     border-color:${theme.color.dark.gray.light};
//     border-width: 1px;
//     border-style: solid;`
// ;

//flow-grow, flow-flex;
//flex:1;
//equalwidth;

// const CardHeader = styled.section`
//     height:45px;
//     width:100%;
//     padding-left:15px;
//     padding-top:10px;
//     padding-bottom:10px;
//     border-radius: 0.20rem 0.20rem 0 0;
//     border-color:${theme.color.dark.gray.light};
//     border-width: 0 0px 1px 0px;
//     border-style: solid;
// `;


// const CardBody = styled.section`
//     border-width: 0 0px 1px 0px;
//     border-style: solid;
//     border-color:${theme.color.dark.gray.light};
// `;

const FONT = styled.section`
    color:white;
    font-weight:bold;    

`;



// 라이브러리를 만들경우 헤더가필요 (미니컴포넌트.)
// 라이브러리가 필요없느 경우 헤더가 불필요. - declare로 만들기.. (컴포넌트)
// div간의 거리를 측정할땐 + 
// 라이브러리를 만드는경우 ICON => velaport 확인.
// https://velog.io/@velopert/create-your-own-design-system-with-storybook

//<ListGroup horizontal={true}>
//<ListGroup horizontal={false}>
// flex grow
//list group을 보여주기

//keyof typeof.


interface Props {
    children : React.ReactNode[];
    title:string
}

//틀만제공.
//padding은 하부에서 알아서 CSS로 정해줘서 하면됨.
//타이틀 틀만 제공.
//여러개가 나올경우.. 여러개마다 각각 밑선줄 제공.

const R6CardComp = ({children, title}:Props) => {
    return (<></>
        // <CardContainer bgcolor={"black"} bordercolor={"black"}>
        //     <CardHeader><FONT> {title} </FONT> </CardHeader>
        //         {children.map( (value) => {
        //             return(
        //                 <CardBody>
        //                     {value}
        //                 </CardBody>
        //             )
        //         })}
        // </CardContainer>
    )
}

export default R6CardComp;
