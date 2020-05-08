import React from 'react';
import '../App.css'

import API from '../util/API'
import {RANKAPI, GENERALAPI} from '../util/type'
import ReactMinimalPieChart from 'react-minimal-pie-chart';


import {
    ProgressBar,
    Button,
    Container,
    Col,
    Row
} from 'react-bootstrap'

import R6Spinner from '../Components/R6Spinner'
import R6TypoComponent from '../Components/R6TypoComponent';
import R6Br from '../Components/R6Br';
import R6Card from '../Components/R6Card';
import styled from 'styled-components';
import theme from '../util/theme'

interface State {
    rankData : RANKAPI
    generalData : GENERALAPI
    loading: boolean
}

interface Props {
}

const Margin = styled.section`
    margin-left:20px;
    margin-right:20px;
`;

const Header = styled.section`
    width:100%;
    height:150px;
    background:${theme.theme_color.dark_theme.gray.light}
`;

export default class Search extends React.Component<Props, State> {
    
    constructor(props: Props){
        super(props);
        this.state = {
            rankData: {} as RANKAPI,
            generalData: {} as GENERALAPI,
            loading:true,
        }
    }

    
    componentDidMount(){
        this.setState({generalData : {
            "totalMatchLost": 1481200,
            "totalMatchWon": 673,
            "totalMatchPlayed": 1287,
            "totalKills": 5184,
            "totalDeath": 5168,
            "totalPenetrationKills": 271,
            "totalMeleeKills": 43,
            "totalKillAssists": 1862,
            "totalHeadShot": 1869,
            "totalRevive": 121,
            "totalBulletHit": 47596,
            "totalTimePlayed": 1287
          },loading:false
        })
        //viewUpdate();
        /*
        try {
            const generalAPIs = await API<GENERALAPI>("api/v1/general/uplay/piliot")
            this.setState({generalData : generalAPIs})
        } catch(e){
            alert(e);
        }*/
    }

    render(){
        
        let totalTimePlayed = this.state.generalData.totalTimePlayed
        let totalTimePlayedInHour = Math.round(this.state.generalData.totalTimePlayed)

        let totalMatches = this.state.generalData.totalMatchPlayed

        let win = this.state.generalData.totalMatchWon
        let lose = totalMatches - win

        let winPercentage = Math.round((win/totalMatches)*100) 
        let losePerecentage = Math.round((lose/totalMatches)*100)
        
        let totalKills = this.state.generalData.totalKills;
        let totalDeath = this.state.generalData.totalDeath;
        let killassist = this.state.generalData.totalKillAssists

        let killdeathPercentage = Math.round((totalKills/this.state.generalData.totalDeath)*100)
        let killDeathAssistPercentage = Math.round((totalKills+killassist)/totalDeath*100);

        let penetrationkill = this.state.generalData.totalPenetrationKills
        let meleekill = this.state.generalData.totalMeleeKills
        let headshotkill = this.state.generalData.totalHeadShot
        let revive = this.state.generalData.totalRevive

        let bullithit = this.state.generalData.totalBulletHit
    
        //advnnced

        
        //매치당 킬.
        let killperMatches = Math.round(totalKills/totalMatches*100)
        //분당 킬.
        let killperMin = Math.round(totalKills/totalTimePlayed*100)
        //헤드샷 률.
        let headshotPerecntage = Math.round(headshotkill/totalKills*100)



        if (this.state.loading) {
            return <R6Spinner presentationStyle="full"></R6Spinner>
        } else {
            return(
                <>
                <Margin>
                <Header>
                    <Container>
                        <Row>
                            <Col>
                                <Row>
                                    안녕
                                </Row>
                                <Row>
                                    안녕
                                </Row>
                            </Col>
                            <Col>
                                pilot
                            </Col>
                            <Col>
                                pilot
                            </Col>

                        </Row>
                    </Container>
                </Header>
                <R6Br size="lg"/>
                <R6Card title={""} isHeaderVisible={false}>
                <Container fluid>
                    <Row> 
                        <Col xs={6} sm={6} md={3}  lg={3}>
                        <R6TypoComponent header={"총 플레이 시간"} body={totalTimePlayedInHour?.toString()} footer={""}/>

                        </Col>
                        <Col xs={6} sm={6} md={3}  lg={3}>
                        <R6TypoComponent header={"총 매치 횟수"} body={totalMatches?.toString()} footer={""}/>

                        </Col>
                        <Col xs={6} sm={6} md={3}  lg={3}>
                        <R6TypoComponent header={"승리 횟수"} body={win?.toString()} footer={"총 매치횟수 " + totalMatches?.toString() + " 중"}/>

                        </Col>
                        <Col xs={6} sm={6} md={3}  lg={3}>
                        <R6TypoComponent header={"패배 횟수"} body={lose?.toString()} footer={"총 매치횟수 " + totalMatches?.toString() + " 중"}/>

                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} sm={6} md={3}  lg={3}>
                        <R6TypoComponent header={"승률"} body={winPercentage?.toString()+"%"} footer={"총 매치횟수 " + totalMatches?.toString() + " 중"}/>

                        </Col>
                        <Col xs={6} sm={6} md={3}  lg={3}>
                        <R6TypoComponent header={"총 킬 수"} body={totalKills?.toString()} footer={""}/>

                        </Col>
                        <Col xs={6} sm={6} md={3}  lg={3}>
                        <R6TypoComponent header={"총 데스 수"} body={totalDeath?.toString()} footer={""}/>

                        </Col>
                        <Col xs={6} sm={6} md={3}  lg={3}>
                        <R6TypoComponent header={"KDA"} body={killDeathAssistPercentage?.toString()+"%"} footer={"킬+어시스트 : 데스"}/>

                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} sm={6} md={3}  lg={3}>
                        <R6TypoComponent header={"KD"} body={killdeathPercentage?.toString()+"%"} footer={"킬 : 데스"}/>

                        </Col>
                        <Col xs={6} sm={6} md={3}  lg={3}>
                        <R6TypoComponent header={"헤드샷 수"} body={headshotkill?.toString()} footer={"킬 : 데스"}/>

                        </Col>
                        <Col xs={6} sm={6} md={3}  lg={3}>
                        <R6TypoComponent header={"헤드샷 률"} body={headshotPerecntage?.toString()+"%"} footer={"총 킬 " + totalKills?.toString() + " 중"}/>

                        </Col>
                        <Col xs={6} sm={6} md={3}  lg={3}>
                        <R6TypoComponent header={"근접킬 수"} body={meleekill?.toString()} footer={""}/>

                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} sm={6} md={3}  lg={3}>
                        <R6TypoComponent header={"관통킬 수"} body={penetrationkill?.toString()} footer={""}/>

                        </Col>
                        <Col xs={6} sm={6} md={3}  lg={3}>
                        <R6TypoComponent header={"매치당 킬"} body={killperMatches?.toString()} footer={"총 매치횟수 " + totalMatches?.toString() + " 중"}/>

                        </Col>
                        <Col xs={6} sm={6} md={3}  lg={3}>
                        <R6TypoComponent header={"분당 킬"} body={killperMin?.toString()} footer={"총 플레이 " + totalTimePlayed?.toString() + " 중"}/>
                        </Col>
                    </Row>

                </Container>
            </R6Card>
            </Margin>
            </>

            )
        }
        
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
