import React from 'react';
import '../../App.css'
import {RANKAPI, GENERALAPI} from '../../util/type'
import R6TypoComponent from '../../R6Components/R6TypoComponent';
// import R6Card from '../Components/R6Card';
import R6CardComp from '../../R6Components/R6CardComp';
import {ProgressBar} from 'react-bootstrap'
import {theme} from '../../util/theme'


import {
    Container,
    Col,
    Row
} from 'react-bootstrap'

import styled from 'styled-components'
import R6Br from '../../R6Components/R6Br';

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
        )
    }
}


