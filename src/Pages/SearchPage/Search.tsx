import React from 'react';
import '../../App.css'

import API from '../../util/API'
import {RANKAPI, GENERALAPI} from '../../util/type'
import route, { RouteDecoratorProps } from '../../route';


import R6Spinner from '../../R6Components/R6Spinner'
import R6TypoComponent from '../../R6Components/R6TypoComponent';
import R6Br from '../../R6Components/R6Br';
import R6Button from '../../R6Components/R6Button';
import R6ToggleButtonGroup from '../../R6Components/R6ToggleButtonGroup';
import R6ToggleButton from '../../R6Components/R6ToggleButton';
import R6RankIcon from '../../R6Components/R6RankIcon';
import R6RankCard from '../../R6Components/R6RankCard';

import styled from 'styled-components';

import SearchOverviewTab from './Overview';
import SearchRankTab from './Rank';
import SearchOperators from './Operators';
import ProfileID from './SubComponent/ProfileID';
import ProfileRank from './SubComponent/ProfileRank';

import { Statistic } from 'antd';
import { Row, Col, Divider } from 'antd';
import { Typography } from 'antd';
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import R6Icon from '../../R6Components/R6Icon';
import { Progress } from 'antd';
import { Menu , Layout} from 'antd';
import { AppstoreOutlined, TeamOutlined, TrophyOutlined } from '@ant-design/icons';
import { UserOutlined, IdcardOutlined, AreaChartOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const { Header, Content, Footer, Sider } = Layout;

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;


interface State {
    rankData : RANKAPI
    generalData : GENERALAPI
    loading: boolean
    currentTab: number
}

interface Props {
}
const Margin = styled.section`
    margin-left:20px;
    margin-right:20px;
`;

// const Header = styled.section`
//     width:100%;
//     background:${theme.color.dark.gray.light};
// `;

// @(route('/search/:id') as any)
// export default class Search extends React.Component<Props&RouteDecoratorProps, State> {
export default class Search extends React.Component<Props, State> {


    
    constructor(props: Props){
        super(props);
        this.state = {
            rankData: {} as RANKAPI,
            generalData: {} as GENERALAPI,
            loading:true,
            currentTab:1,
        }
        // console.log(this.props.match.params);

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
                return(<></>);
            case 3:
                return(<SearchOperators></SearchOperators>);
            case 4:
                return(<></>);
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

        // const style = { background: '#0092ff', padding: '8px 0' };

        // let tabContents = <SearchOverviewTab generalData={this.state.generalData} rankData={this.state.rankData}/>

        if (this.state.loading) {
            return <R6Spinner presentationStyle="full"></R6Spinner>
        } else {
            return(
                <>
                 <Layout className="site-layout-background" style={{ padding: '0px 0' }}>
                    <Sider onCollapse={()=>alert('abcd')} breakpoint="md" className="site-layout-background" width={200}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%' }}
                        onClick={ () => alert('abc') }
                        onSelect={ () => alert('select') }
                    >

                        <div style={{height:'100px'}}> 
                        <Statistic title="안녕하세요" value={"이강호님"} />
                        </div>
                            <Menu.Item key="1" icon={<IdcardOutlined />}>
                                종합데이터 요약
                            </Menu.Item>
                            <Menu.Item key="2" icon={<TrophyOutlined />}>
                                랭크
                            </Menu.Item>
                            <Menu.Item key="3" icon={<TeamOutlined />}>
                                오퍼레이터
                            </Menu.Item>
                            <Menu.Item key="4" icon={<AreaChartOutlined />}>
                                전력분석
                            </Menu.Item>

                    </Menu>
                    </Sider>
                    <Content style={{ padding: '14px 24px', minHeight: '100vh' }}>
                            {/* <Divider><Title> 시즌 12 </Title> </Divider> */}
                        {/* <SearchOperators></SearchOperators> */}
                        <SearchRankTab rankData={this.state.rankData} generalData={this.state.generalData}></SearchRankTab>
                        {/* <SearchOverviewTab rankData={this.state.rankData} generalData={this.state.generalData}></SearchOverviewTab> */}
                    </Content>
                </Layout>
                            
                
                
     

                {/* <Header> */}
                    {/* <Margin> */}
                    {/* <Container fluid style={{padding:0}}>
                        <Row noGutters={true}>
                            <Col xs={12} sm={12} md={6}>
                                <ProfileID id={"hello"}></ProfileID>
                            </Col>
                            <Col xs={12} sm={12} md={6}>
                                <ProfileRank api={this.state.rankData}></ProfileRank>
                            </Col>

                        </Row>
                    </Container> */}
                {/* </Header> */}
                {/* <R6Br size="lg"/> */}
{/* 
                
                <R6ToggleButtonGroup currentValue={this.state.currentTab} onChange={this.tabHanndler}>
                    <R6ToggleButton value={1}> overview </R6ToggleButton>
                    <R6ToggleButton value={2}> 랭크 </R6ToggleButton>
                    <R6ToggleButton value={3}> 플레이분석 </R6ToggleButton>
                    <R6ToggleButton value={4}> 오퍼레이터 </R6ToggleButton>
                </R6ToggleButtonGroup>
                <R6Br size="lg"/> */}
                {/* {this.tabContentsHandler(this.state.currentTab)} */}
            {/* </Margin> */}
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
