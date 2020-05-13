import React from 'react';
import '../App.css'

import API from '../util/API'
import {RANKAPI, GENERALAPI} from '../util/type'
import { ReactComponent as Logo } from './yo.svg';


import {
    ProgressBar,
    Button,
    Container,
    Col,
    Row,
    Image
} from 'react-bootstrap'

import R6Spinner from '../Components/R6Spinner'
import R6TypoComponent from '../Components/R6TypoComponent';
import R6Br from '../Components/R6Br';
import R6Button from '../Components/R6Button';

import R6ToggleButtonGroup from '../Components/R6ToggleButtonGroup';
import R6ToggleButton from '../Components/R6ToggleButton';

import styled from 'styled-components';
import {theme} from '../util/theme'

import SearchOverviewTab from './SearchOverviewTab';
import SearchRankTab from './SearchRankTab';


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

const CONTAINER = styled.section`
    display:flex;
    flex-direction:row;
    height:150px;
`;

const PROFILE_PIC = styled.section`
    display:flex;
    background:pink;
    width:150px;
    height:150px;
`;

const PROFILE_PIC_X = styled.section`
    background:green;
    justify-content:center;
    align-items:stretch;
    flex:1;
    margin:15px;
    margin-left:0px;
    margin-right:30px;
`;

const PROFILE_ID = styled.section`
    display:flex;
    flex:1;
    flex-direction:column;
    background:blue;
    justify-content:center;
`;

const PROFILE_ID_ID = styled.section`
    color:white;
    font-size:40px;
`;

const PROFILE_ID_BUTTON = styled.section`
`;



const Profile = () => {
    return(
        <CONTAINER>
            <PROFILE_PIC>
                <PROFILE_PIC_X/>
            </PROFILE_PIC>
            <PROFILE_ID>
                <PROFILE_ID_ID>
                    <div style={{fontWeight:'bolder'}}> hello </div>  </PROFILE_ID_ID>
                <R6Br size={"lg"}/>
                <PROFILE_ID_BUTTON> <R6Button size={"lg"}>전적갱신하기</R6Button> </PROFILE_ID_BUTTON>
            </PROFILE_ID>
        </CONTAINER>
    )

}
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
                return(<></>);
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
          rankData:{
            "maxMmr": 2581,
            "death": 878,
            "rank": 15,
            "maxRank": 15,
            "kills": 1004,
            "updateTime": "2020-04-30T12:44:23.147000+00:00",
            "abandons": 1,
            "mmr": 2509,
            "wins": 114,
            "region": "apac",
            "season": 17,
            "losses": 99
          },
          allRankData:[
            {
                "maxMmr": 2906,
                "death": 0,
                "rank": 10,
                "maxRank": 15,
                "kills": 0,
                "abandons": 1,
                "mmr": 2283,
                "wins": 20,
                "region": "apac",
                "season": 9,
                "losses": 23
            },
            {
                "maxMmr": 2906,
                "death": 0,
                "rank": 10,
                "maxRank": 15,
                "kills": 0,
                "abandons": 1,
                "mmr": 2283,
                "wins": 20,
                "region": "apac",
                "season": 9,
                "losses": 23
            },
            {
                "maxMmr": 2621,
                "death": 0,
                "rank": 9,
                "maxRank": 10,
                "kills": 0,
                "abandons": 6,
                "mmr": 2106,
                "wins": 132,
                "region": "apac",
                "season": 10,
                "losses": 119
            },
            {
                "maxMmr": 3337,
                "death": 0,
                "rank": 15,
                "maxRank": 17,
                "kills": 0,
                "abandons": 4,
                "mmr": 3008,
                "wins": 108,
                "region": "apac",
                "season": 11,
                "losses": 97
            },
            {
                "maxMmr": 3121,
                "death": 0,
                "rank": 13,
                "maxRank": 16,
                "kills": 0,
                "abandons": 0,
                "mmr": 2655,
                "wins": 26,
                "region": "apac",
                "season": 12,
                "losses": 26
            },
            {
                "maxMmr": 3125,
                "death": 0,
                "rank": 13,
                "maxRank": 16,
                "kills": 0,
                "abandons": 2,
                "mmr": 2637,
                "wins": 65,
                "region": "apac",
                "season": 13,
                "losses": 60
            },
            {
                "maxMmr": 3345,
                "death": 282,
                "rank": 12,
                "maxRank": 17,
                "kills": 222,
                "abandons": 4,
                "mmr": 2459,
                "wins": 30,
                "region": "apac",
                "season": 14,
                "losses": 30
            },
            {
                "maxMmr": 2568,
                "death": 811,
                "rank": 9,
                "maxRank": 15,
                "kills": 771,
                "abandons": 4,
                "mmr": 1901,
                "wins": 55,
                "region": "apac",
                "season": 15,
                "losses": 63
            },
            {
                "maxMmr": 2838,
                "death": 566,
                "rank": 13,
                "maxRank": 17,
                "kills": 570,
                "abandons": 0,
                "mmr": 2336,
                "wins": 70,
                "region": "apac",
                "season": 16,
                "losses": 66
            },
            {
                "maxMmr": 2581,
                "death": 935,
                "rank": 14,
                "maxRank": 15,
                "kills": 1061,
                "abandons": 1,
                "mmr": 2472,
                "wins": 120,
                "region": "apac",
                "season": 17,
                "losses": 107
            }
            ]
          ,loading:false
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
                <Logo/>
                <Header>
                    <Margin>
                    <Container fluid style={{padding:0, backgroundColor:'red'}}>
                        <Row noGutters={true}>
                            <Col xs={12} sm={12} md={6}>
                                <Profile></Profile>
                            </Col>
                            <Col xs={12} sm={12} md={6}>
                                asdfasdfa
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
