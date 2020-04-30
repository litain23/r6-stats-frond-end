import React from 'react'
import {Card} from 'react-bootstrap'
import Space from './Space'

type Props = {
    /** 카드의 제목 */
    title:string
    /** 헤더의 노출 여부, false시 타이틀 비 노출 */
    isHeaderVisible?:boolean
}


export default class BlackCard extends React.Component<Props> {

    static defaultProps = {
        isHeaderVisible:true
    }


    render(){

        const header = this.props.isHeaderVisible ? (<Card.Header style={{fontWeight:'bold', borderColor:'#1C1C1F'}}> {this.props.title} </Card.Header>) : ""
        
        return(     
        <>
        <Card style={{backgroundColor:"#31313C", border:'none', color:'white', width:'100%'}}>
        { header }
        <Card.Body>
            <Card.Text>
                {this.props.children}
            </Card.Text>
        </Card.Body>
        </Card>
        <Space size={10}></Space>
        </>
        )

    }
}
