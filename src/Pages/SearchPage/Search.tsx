import React from 'react';
import '../../App.css'

import API from '../../util/API'
import {RANKAPI, GENERALAPI} from '../../util/type'


import {
    ProgressBar,
    Button,
    Container,
    Col,
    Row,
    Image
} from 'react-bootstrap'

// import {R6Br} from '../R6component';

import R6Spinner from '../../R6Components/R6Spinner'
import R6TypoComponent from '../../R6Components/R6TypoComponent';
import R6Br from '../../R6Components/R6Br';
import R6Button from '../../R6Components/R6Button';

import R6ToggleButtonGroup from '../../R6Components/R6ToggleButtonGroup';
import R6ToggleButton from '../../R6Components/R6ToggleButton';

import styled from 'styled-components';
import {theme} from '../../util/theme'

import SearchOverviewTab from './Overview';
import SearchRankTab from './Rank';
import SearchOperators from './Operators';
import ProfileID from './SubComponent/ProfileID';
import ProfileRank from './SubComponent/ProfileRank';

import R6RankIcon from '../../R6Components/R6RankIcon';
import R6RankCard from '../../R6Components/R6RankCard';



interface State {
    rankData : RANKAPI
    allRankData : RANKAPI[]
    generalData : GENERALAPI
    loading: boolean
    currentTab: number
}


interface Props {
}
const Margin = styled.section`
    margin-left:35px;
    margin-right:35px;
`;

const Header = styled.section`
    width:100%;
    background:${theme.color.dark.gray.light};
`;


export default class Search extends React.Component<Props, State> {
    
    constructor(props: Props){
        super(props);
        this.state = {
            rankData: {} as RANKAPI,
            generalData: {} as GENERALAPI,
            allRankData: [] as RANKAPI[],
            loading:true,
            currentTab:1,
        }

        this.tabHanndler = this.tabHanndler.bind(this);
    }

    tabHanndler(tabNumber : number) {
        this.setState({currentTab:tabNumber})
    }

    tabContentsHandler(tabNumber: number): React.ReactNode {
        
        switch(tabNumber){
            case 1:
                return(<SearchOverviewTab generalData={this.state.generalData} rankData={this.state.rankData}/>);
            case 2:
                return(<SearchRankTab allRankData={this.state.allRankData} generalData={this.state.generalData} rankData={this.state.rankData}/>);
            case 3:
                return(<SearchOperators></SearchOperators>);
            case 4:
                return(<></>);
        } 

    }
    
    componentDidMount(){
        
        this.setState({
            generalData : {
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
          },
          rankData : {
            maxMmr: 1,
            death: 1,
            rank: 1,
            maxRank:1,
            kills:1,
            abandons: 1,
            mmr:1,
            wins:1,
            region:"123",
            season:1,
            losses:1,
         },
          loading:false
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

        let tabContents = <SearchOverviewTab generalData={this.state.generalData} rankData={this.state.rankData}/>

        if (this.state.loading) {
            return <R6Spinner presentationStyle="full"></R6Spinner>
        } else {
            return(
                <>

                <Header>
                    <Margin>
                    <Container fluid style={{padding:0}}>
                        <Row noGutters={true}>
                            <Col xs={12} sm={12} md={6}>
                                <ProfileID id={"hello"}></ProfileID>
                            </Col>
                            <Col xs={12} sm={12} md={6}>
                                <ProfileRank api={this.state.rankData}></ProfileRank>
                            </Col>
                        </Row>
                    </Container>
                    </Margin>
                </Header>

                <Margin>
                <R6Br size="lg"/>

                
                <R6ToggleButtonGroup currentValue={this.state.currentTab} onChange={this.tabHanndler}>
                    <R6ToggleButton value={1}> overview </R6ToggleButton>
                    <R6ToggleButton value={2}> 랭크 </R6ToggleButton>
                    <R6ToggleButton value={3}> 플레이분석 </R6ToggleButton>
                    <R6ToggleButton value={4}> 오퍼레이터 </R6ToggleButton>
                </R6ToggleButtonGroup>
                <R6Br size="lg"/>
                {this.tabContentsHandler(this.state.currentTab)}
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
