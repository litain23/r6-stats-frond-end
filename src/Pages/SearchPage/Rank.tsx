import React from 'react';
import '../../App.css'
import {RANKAPI, GENERALAPI} from '../../util/type'
// import R6TypoComponent from '../../R6Components/R6TypoComponent';
// import R6Card from '../../R6Components/R6CardComp';
// import R6CardComp from '../../R6Components/R6CardComp';

// import {theme} from '../../util/theme'
import { Statistic, Space } from 'antd';
import { Row, Col, Divider } from 'antd';
import { Typography } from 'antd';
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import R6Icon from '../../R6Components/R6Icon';
import { Progress } from 'antd';
import { Menu , Layout} from 'antd';
import { AppstoreOutlined, TeamOutlined, TrophyOutlined } from '@ant-design/icons';
import { UserOutlined, IdcardOutlined, AreaChartOutlined } from '@ant-design/icons';
import R6RankIcon from '../../R6Components/R6RankIcon';

import styled from 'styled-components'
import R6Br from '../../R6Components/R6Br';

const { SubMenu } = Menu;

const { Header, Content, Footer, Sider } = Layout;

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;



interface Props {
    rankData : RANKAPI
    generalData : GENERALAPI
}

export default class SearchRankTab extends React.Component<Props> {
    
    render(){

        let totalTimePlayed = this.props.generalData.totalTimePlayed
        let totalTimePlayedInHour = Math.round(this.props.generalData.totalTimePlayed)

        let totalMatches = this.props.generalData.totalMatchPlayed

        let win = this.props.generalData.totalMatchWon
        let lose = totalMatches - win

        let winPercentage = Math.round((win/totalMatches)*100) 
        let losePerecentage = Math.round((lose/totalMatches)*100)
        
        let totalKills = this.props.generalData.totalKills;
        let totalDeath = this.props.generalData.totalDeath;
        let killassist = this.props.generalData.totalKillAssists

        let killdeathPercentage = Math.round((totalKills/this.props.generalData.totalDeath)*100)
        let killDeathAssistPercentage = Math.round((totalKills+killassist)/totalDeath*100);

        let penetrationkill = this.props.generalData.totalPenetrationKills
        let meleekill = this.props.generalData.totalMeleeKills
        let headshotkill = this.props.generalData.totalHeadShot
        let revive = this.props.generalData.totalRevive

        let bullithit = this.props.generalData.totalBulletHit
    
        //advnnced

        
        //매치당 킬.
        let killperMatches = Math.round(totalKills/totalMatches*100)
        //분당 킬.
        let killperMin = Math.round(totalKills/totalTimePlayed*100)
        //헤드샷 률.
        let headshotPerecntage = Math.round(headshotkill/totalKills*100)



        return(
            <>
                {/* <Divider><Title> 시즌 12 </Title> </Divider> */}

                {/* auto */ 
                    // <Col flex="200px" xs={24}>    
                    // <Col flex="auto" xs={24}>
       
                
                }
                    <Row style={{background:"red"}}>
                            <Col xs={24} sm={24} md={12} style={{background:'pink'}}>
                                <Row justify="center" style={{textAlign:'center'}}>
                                    <Space direction="vertical">
                                    <Row>
                                        <Col span={24}> 유돈노미 </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24}> 안녕하세요 </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24} style={{background:'red'}}>
                                            안녕
                                            {/* <div style={{display:'flex', flexDirection:'row', width:'200px', alignItems:'center'}}>
                                                <R6RankIcon size={30} rank={20}></R6RankIcon>
                                                <Progress percent={30} showInfo={false} strokeLinecap="square" strokeWidth={18} />
                                                <R6RankIcon size={30} rank={20}></R6RankIcon>
                                            </div> */}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24}> 반갑습니다 </Col>
                                    </Row>
                                    </Space>
                                </Row>
                            </Col>
                            <Col xs={24} sm={24} md={12}>
                                <Row>
                                    <Col span={12}>abcv</Col>
                                    <Col span={12}>abcd</Col>
                                </Row>
                                <Row>
                                    <Col span={12}>abcv</Col>
                                    <Col span={12}>abcd</Col>
                                </Row>
                            </Col>
                        </Row>
                    <Collapse
                    bordered={false}
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                    >
                        <Panel header="자세히보기" key="1" style={{border:"0px"}}>
                        {/* { xs: 8, sm: 16, md: 24, lg: 32 } */}
                        {/* <Row gutter={[24, 24]} justify="end"> */}
                        <Row gutter={[24, 24]} style={{textAlign:'center'}} justify="center" align="middle">
                            <Col className="gutter-row" xs={24} sm={12}  md={6} >
                                <Statistic title="총 플레이 시간" decimalSeparator={","} value={totalTimePlayed} suffix={"hour"} />
                            </Col>
                            <Col className="gutter-row" xs={24}  sm={12} md={6} >
                                <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                            </Col>
                            <Col className="gutter-row" xs={24}  sm={12}  md={6}>
                                <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                            </Col>
                            <Col className="gutter-row" xs={24}  sm={12} md={6}>
                                <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                            </Col>
                        </Row>
                        <Divider>Text</Divider>

                        <Row gutter={[24, 24]} style={{textAlign:'center'}} justify="center" align="middle">
                            <Col span={6}>
                                <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                            </Col>
                            <Col span={6}>
                                <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                            </Col>
                            <Col span={6}>
                                <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                            </Col>
                            <Col span={6}>
                                <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                            </Col>
                        </Row>
                        <Row gutter={24} style={{textAlign:'center'}} justify="center" align="middle">
                            <Col span={6}>
                                <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                            </Col>
                            <Col span={6}>
                                <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                            </Col>
                            <Col span={6}>
                                <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                            </Col>
                            <Col span={6}>
                                <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                            </Col>
                        </Row>


                            </Panel>
                    </Collapse>
                    </>

        )
    }
}


