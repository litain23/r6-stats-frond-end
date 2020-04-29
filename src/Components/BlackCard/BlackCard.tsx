import React from 'react'
import {Card} from 'react-bootstrap'
import Space from '../../Components/Space'
type Props = {
    title:string

}


export default class BlackCard extends React.Component<Props> {

    render(){
        return(     
        <>
        <Card style={{backgroundColor:"#31313C", border:'none', color:'white', width:'100%'}}>
        <Card.Header style={{fontWeight:'bold', borderColor:'#1C1C1F'}}> {this.props.title} </Card.Header>
        <Card.Body>
            {/* <Card.Title>Special title treatment</Card.Title> */}
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
