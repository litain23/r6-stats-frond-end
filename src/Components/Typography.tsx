import React, { CSSProperties } from 'react'
import {Container,Row,Col} from 'react-bootstrap'


interface Props {
    header: string,
    figure: string,
    sign?: string,
    bottom: string
}
export default class Typography extends React.Component<Props> {

    render(){
        const header : CSSProperties = { fontSize: '30px', fontWeight:"bold"}
        const figure : CSSProperties = { fontSize: '100px', fontWeight: "bolder", marginTop:'-40px', letterSpacing:'-3px'}
        const sign : CSSProperties = { fontSize: '30px', fontWeight: "bolder", marginLeft:'5px'}
        const bottom : CSSProperties = { fontSize: '25px', fontWeight:'lighter', marginTop:'-35px'}

        return(

            <div style={{display:"flex", flexDirection:'column', color:"white"}}>
                <div style={header}>
                    {this.props.header}
                </div>
                <div style={figure}>
                    {this.props.figure}<text style={sign}>{this.props.sign}</text>
                </div>
                <div style={bottom}>
                    {this.props.bottom}
                </div>

            </div>
      
        )
    }
}

// <Container>
// <Row>
//     <Col style={header}>
//         안녕
//     </Col>
// </Row>
// <Row>
//     <Col style={figure}>
//         안녕
//     </Col>
// </Row>
// <Row>
//     <Col style={bottom}>
//         안녕
//     </Col>
// </Row>
// </Container>