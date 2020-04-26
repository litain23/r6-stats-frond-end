import React, { Fragment, CSSProperties } from 'react';
import '../../App.css'
import {Card, Button, Container, Col, Row, Table} from 'react-bootstrap'
import Space from '../../Components/Space'
import BlackCard from '../../Components/BlackCard/BlackCard'

export default class Search extends React.Component {
    
    render(){
        return(
            <div>
                <div id="operator-info" style={{backgroundColor:'#31313C', height:'250px'}}> 
                <Container>
                    <Row>
                        <Col>
                           adsfasdfasdfasdfas
                        </Col>
                        <Col>
                            <Row>
                                Hello.
                                dsfasdfasdfasdf
                            </Row>
                            <Row>
                                <Button></Button>
                            </Row>
                            <Row>
                                MYname
                            </Row>
                        </Col>
                        <Col>sdfsaasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf</Col>
                    </Row>
                </Container> 

                </div>
                
                <Space size={8}/>

                <div id="info-tab">
                    <Container>
                        <Row>
                        <BlackCard title="그림"></BlackCard>
                        </Row>
                        <Row>
                        <Space size={8}/>
                        </Row>
                        <Row>
                        <BlackCard title="삼신"></BlackCard>
                        </Row>
                    </Container>
                               
{/* 
                <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>
                        </Table> */}
                </div>

            </div>
        )
    }
}
