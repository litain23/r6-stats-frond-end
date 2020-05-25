import React from 'react'
// import {Card} from 'react-bootstrap'
import Space from './R6Br'


interface Props {
    /** 카드의 내용 */
    children: React.ReactNode;
    /** 카드의 제목 */
    title:string
    /** 헤더의 노출 여부, false시 타이틀 비 노출 */
    visible?:boolean
    /** 카드의 배경색상 */
    backgroundColor?:string
    /** 카드의 글꼴색상 */
    fontColor?:string
}


/**
 * `bootstrap`의 card 응용한 `R6Card`는 필요한 부분을 재조합하여 컴포넌트화 하였습니다.
 * 
 * - `isHeaderVisible`을 `false`로 설정하면, 헤더 타이틀이 보이지 않습니다.
 * - 기본적으로는 메인 컬러에 따르고있습니다. 하지만 색상을 커스텀 할 수 있습니다.
 */
const R6Card = ({children, title, visible, backgroundColor, fontColor }: Props) => {
    
    // const header = visible ? (<Card.Header style={{color: fontColor, fontWeight:'bold', borderColor:'#1C1C1F'}}> {title} </Card.Header>) : ""
        
    return(     
        <>
        {/* <Card style={{backgroundColor:backgroundColor, border:'none', color:fontColor, width:'100%'}}>
        { header }
        <Card.Body>
            <Card.Text>
                {children}
            </Card.Text>
        </Card.Body>
        </Card>
        <Space size={10}></Space> */}
        </>
        )

}


R6Card.defaultProps ={
    isHeaderVisible:true,
    backgroundColor:"#31313C",
    fontColor:"white"
}

export default R6Card;