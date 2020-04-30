import React, { Fragment, CSSProperties } from 'react';
import '../App.css'
import Space from '../Components/Space'
import BlackCard from '../Components/BlackCard'
import Typography from '../Components/Typography'

import API from '../util/API'
import {RANKAPI, GENERALAPI} from '../util/type'
import ReactMinimalPieChart from 'react-minimal-pie-chart';

import Graph from '../Components/Graph'

import {
    ProgressBar,
    Button,
    Container,
    Col,
    Row
} from 'react-bootstrap'

import CenteredRow from '../Components/CenteredRow'


interface State {
    rankData : RANKAPI
    generalData : GENERALAPI
}

interface Props {
}

export default class Search extends React.Component<Props, State> {
    
    constructor(props: Props){
        super(props);
        this.state = {
            rankData: {} as RANKAPI,
            generalData: {} as GENERALAPI
        }
    }

    
    async componentDidMount(){
        try {
            const generalAPIs = await API<GENERALAPI>("api/v1/general/uplay/piliot")
            this.setState({generalData : generalAPIs})
        } catch(e){
            alert(e);
        }
    }


    getProgressBar(value: number) {
        return (
            <ProgressBar now={value}></ProgressBar>
        )
    }

    // winVSLose(){

    //     let win = this.state.generalData.totalMatchWon
    //     let lose = this.state.generalData.totalMatchPlayed - this.state.generalData.totalMatchWon
    //     let total = this.state.generalData.totalMatchPlayed
    //     let winPercentage = Math.round((win/total)*100) 
    //     let losePerecentage = Math.round((lose/total)*100)
        

        
    
    //     return (

    //         <Container fluid>
    //             <CenteredRow>
    //                 <Col xs={3}>
    //                     <Container>
    //                         <CenteredRow>
    //                         </CenteredRow>
    //                         <CenteredRow>
    //                         </CenteredRow>
    //                     </Container>
    //                 </Col>
    //                     <Col xs={6}>
    //                         <Graph data={[
    //                             {color: Theme.Color.red,
    //                             value:23,
    //                             title:"abc"
    //                             }, 
    //                             {color: Theme.Color.blue ,
    //                             value:23,
    //                             title:"abc"
    //                             }
    //                         ]}/>
    //                 </Col>
    //                 <Col xs={3}>
    //                     <Container>
    //                         <CenteredRow>
    //                             <p style={getFont(Theme.FontSize.middle, Theme.FontWieght.bold, winPercentage)}> 패배 </p>
    //                         </CenteredRow>
    //                         <CenteredRow>
    //                             <p style={getFont(Theme.FontSize.small, Theme.FontWieght.normal, winPercentage)}> {losePerecentage} % </p>
    //                         </CenteredRow>
    //                         </Container>
    //                     </Col>
    //             </CenteredRow>
    //         </Container>
    //     )
    // }

    //이긴쪽이 더 크게.
    // + KD 설명
    killDeath(){
        return(
            <Container fluid>
                <Row className="wrapper">
                    <Col xs={3}>
                        <Container>
                            <Row className="wrapper">
                                <h1> Kills </h1>
                            </Row>
                            <Row className="wrapper">
                                <h5> {this.state.generalData.totalKills}</h5>
                            </Row>
                        </Container>
                    </Col>
                        <Col xs={6}>
                            <ReactMinimalPieChart
                            animate={true}
                            animationDuration={400}
                            animationEasing="ease-out"
                            cx={50}
                            cy={50}
                            data={[
                                {
                                color: '#e84057',
                                title: 'Win',
                                value: this.state.generalData.totalKills
                                },
                                {
                                color: '#5383e8',
                                title: 'Lose',
                                value: this.state.generalData.totalDeath
                                }
                            ]}
                            label={false}
                            labelPosition={50}
                            lengthAngle={360}
                            lineWidth={30}
                            paddingAngle={0} 
                            radius={50}
                            // rounded
                            startAngle={90}
                            viewBoxSize={[
                                100,
                                100
                            ]}
                            />
                    </Col>
                    <Col xs={3}>
                        <Container>
                            <Row className="wrapper">
                                <h1> Lost </h1>
                            </Row>
                            <Row className="wrapper">
                                <h5> {this.state.generalData.totalDeath}</h5>
                            </Row>
                            </Container>
                        </Col>
                </Row>
            </Container>
        )
    }

    render(){

        return(
            <BlackCard title={"안녕!"} isHeaderVisible={true}>
                <Container fluid>
                    <Row> 
                        <Col xs={6} sm={6} md={3}  lg={3}>
                            <Typography header={"안녕"} figure={"20"} bottom={"안녕하세요"}/>
                        </Col>
                        <Col xs={6} sm={6} md={3}  lg={3}>
                            <Typography header={"안녕"} figure={"20"} bottom={"안녕하세요"}/>
                        </Col>
                        <Col xs={6} sm={6} md={3}  lg={3}>
                            <Typography header={"안녕"} figure={"20"} bottom={"안녕하세요"} sign={"%"}/>
                        </Col>
                        <Col xs={6} sm={6} md={3}  lg={3}>
                            <Typography header={"안녕"} figure={"20"} bottom={"안녕하세요"}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} sm={6} md={3}  lg={3}>
                        <Typography header={"안녕"} figure={"20"} bottom={"안녕하세요"}/>
                        </Col>
                        <Col xs={6} sm={6} md={3}  lg={3}>
                            <Typography header={"안녕"} figure={"20"} bottom={"안녕하세요"}/>
                        </Col>
                        <Col xs={6} sm={6} md={3}  lg={3}>
                            <Typography header={"안녕"} figure={"20"} bottom={"안녕하세요"}/>
                        </Col>
                        <Col xs={6} sm={6} md={3}  lg={3}>
                            <Typography header={"안녕"} figure={"20"} bottom={"안녕하세요"}/>
                        </Col>
                    </Row>

                </Container>
            </BlackCard>
        )
    }
}

// <div>
//                 <div id="operator-info" style={{backgroundColor:'#31313C', height:'250px'}}> 
//                 <Container>
//                     <Row>
//                         <Col>
//                         adfadf
//                         </Col>
//                         <Col>
//                             <Row>
//                                 Hello.
//                                 dsfasdfasdfasdf
//                             </Row>
//                             <Row>
//                                 <Button></Button>
//                             </Row>
//                             <Row>
//                                 MYname
//                             </Row>
//                         </Col>
//                         <Col>sdfsaasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf</Col>
//                     </Row>
//                 </Container> 

//                 </div>
                
//                 <Space size={8}/>

//                 <div id="info-tab">
//                     <Container fluid={true}>
//                         <Row>
//                             <Col xs={12} md={6} sm={12} lg={6}> 
//                                 <BlackCard title="Win Vs. Lose">
//                                 {this.winVSLose()}
//                                 </BlackCard>
//                             </Col>
//                             <Col xs={12} md={6} sm={12} lg={6}> 
//                                 <BlackCard title="Kill Vs. Death">
//                                 {this.killDeath()}
//                                 </BlackCard>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col xs={12} md={6} sm={12} lg={6}> 
//                                 <BlackCard title="공격팀 VS 방어팀">
//                                 {this.winVSLose()}
//                                 </BlackCard>
//                             </Col>
//                             <Col xs={12} md={6} sm={12} lg={6}> 
//                                 <BlackCard title="오퍼레이터 TOP 3">
//                                 {this.winVSLose()}
//                                 </BlackCard>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col xs={12} md={6} sm={12} lg={6}> 
//                                 <BlackCard title="공격스타일">
//                                     <Container>
//                                         <Row className="wrapper">
//                                             <Col xs={8}>
//                                                 <Space size={30}></Space>
//                                                 <ProgressBar now={50}></ProgressBar>
//                                                 <Space size={30}></Space>
//                                             </Col>
//                                             <Col>
//                                                 <Row className="wrapper">
//                                                     <h5> 근접 킬 </h5>
//                                                 </Row>
//                                                 <Row className="wrapper">
//                                                     <h6> 52% </h6>
//                                                 </Row>
//                                             </Col>
//                                         </Row>
//                                         <Row className="wrapper">
//                                             <Col xs={8}>
//                                                 <Space size={30}></Space>
//                                                 <ProgressBar now={50}></ProgressBar>
//                                                 <Space size={30}></Space>
//                                             </Col>
//                                             <Col>
//                                                 <Row className="wrapper">
//                                                     <h5> 헤드샷 킬 </h5>
//                                                 </Row>
//                                                 <Row className="wrapper">
//                                                     <h6> 52% </h6>
//                                                 </Row>
//                                             </Col>
//                                         </Row>
//                                         <Row className="wrapper">
//                                             <Col xs={8}>
//                                                 <Space size={30}></Space>
//                                                 <ProgressBar now={50}></ProgressBar>
//                                                 <Space size={30}></Space>
//                                             </Col>
//                                             <Col>
//                                                 <Row className="wrapper">
//                                                     <h5> 관통 킬 </h5>
//                                                 </Row>
//                                                 <Row className="wrapper">
//                                                     <h6> 52% </h6>
//                                                 </Row>
//                                             </Col>                  
//                                         </Row>
//                                     </Container>
//                                 </BlackCard>
//                             </Col>
//                             <Col xs={12} md={6} sm={12} lg={6}> 
//                                 <BlackCard title="매치 당 기록">
//                                 {this.winVSLose()}
//                                 </BlackCard>
//                             </Col>
//                         </Row>
//                     </Container>
                               
// {/* 
//                 <Table striped bordered hover variant="dark">
//                         <thead>
//                             <tr>
//                             <th>#</th>
//                             <th>First Name</th>
//                             <th>Last Name</th>
//                             <th>Username</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                             <td>1</td>
//                             <td>Mark</td>
//                             <td>Otto</td>
//                             <td>@mdo</td>
//                             </tr>
//                             <tr>
//                             <td>2</td>
//                             <td>Jacob</td>
//                             <td>Thornton</td>
//                             <td>@fat</td>
//                             </tr>
//                             <tr>
//                             <td>3</td>
//                             <td colSpan={2}>Larry the Bird</td>
//                             <td>@twitter</td>
//                             </tr>
//                         </tbody>
//                         </Table> */}
//                 </div>

//             </div>
