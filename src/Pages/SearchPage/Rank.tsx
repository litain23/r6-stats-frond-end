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
    allRankData : RANKAPI[]
    generalData : GENERALAPI
}



const DIV1 = styled.section`
    display:flex;
    flex:1;
    flex-direction:row;
    align-items:stretch;
`;
const LEFT = styled.section`
    display:flex;
    background:${theme.theme_color.warning.normal};
    flex-grow:0;
    text-align:center;
    justify-content:center;
    algin-items:center;
    align-content:center;
    width:300px;
`;

const LEFT1 = styled.section`
    flex:1;
    align-self:center;
`;

const RIGHT = styled.section`
    flex-grow : 1;
    align-items:center;
    justify-content:center;
    padding-top:10px;
    padding-bottom:10px;
    padding-left:10px;
`;


export default class SearchRankTab extends React.Component<Props> {


    compareFunction(a:string, b:string){
        if (+a < +b){
            return 0
        } else {
            return -1
        }
    }

    render(){

        //reduce로 만들어주거나해야함.
        //시즌별로묶어주기<div className=""></div>

        let allRankData = this.props.allRankData.reduce((previous,rankdata,index,total) => {

            //랭크별로분류하기.
            //시즌별로 분류한뒤에 넣기.
            // { 12 : [ <R6Card>abc</R6Card> , <R6Card>abc</R6Card> ] }
            
            if (previous[rankdata.season] == undefined) {
                previous[rankdata.season] = []
            } 

            let totalKills = rankdata.kills;
            let totalDeath = rankdata.death;
            let killdeathPercentage = Math.round((totalKills/totalDeath)*100)
            let totalWins = rankdata.wins
            let totalLoses = rankdata.losses
            let abaondons = rankdata.abandons
            let totalMatches = totalWins + totalLoses + abaondons
            let killperMatches = Math.round(totalKills/totalMatches*100)
            let winbyMatches = Math.round(totalWins/totalMatches*100)
            let season = rankdata.season
            let maxRank = rankdata.maxRank
            let maxMmr = rankdata.maxMmr
            let rank = rankdata.rank
            let mmr = rankdata.mmr
            let region = rankdata.region

            previous[rankdata.season].push(
                (
                        <DIV1>
                        <LEFT>
                            <LEFT1>
                            {region}
                            <R6Br/>
                            {rank}
                            <R6Br/>
                            <ProgressBar now={60} />
                            
                            현재 MMR : {mmr}
                            <R6Br/>
                            현재 MMR / MAX MMR : {mmr + ':' + maxMmr}
                            </LEFT1>
                        </LEFT>
                        <RIGHT>
                        <Container fluid>
                            <Row> 
                                <Col xs={6} sm={6} md={6}  lg={3}>
                                <R6TypoComponent header={"K/D"} body={killdeathPercentage.toString() + "%"} footer={""}/>
                                </Col>
                                <Col xs={6} sm={6} md={6}  lg={3}>
                                <R6TypoComponent header={"Kill/Matches"} body={killperMatches} footer={""}/>
                                </Col>
                                <Col xs={6} sm={6} md={6}  lg={3}>
                                <R6TypoComponent header={"Kills"} body={totalKills} footer={""}/>
                                </Col>
                                <Col xs={6} sm={6} md={6}  lg={3}>
                                <R6TypoComponent header={"Deaths"} body={totalDeath} footer={""}/>
                                </Col>
                            </Row>

                            <Row> 
                                <Col xs={6} sm={6} md={6}  lg={3}>
                                <R6TypoComponent header={"Win %"} body={winbyMatches.toString()+"%"} footer={""}/>
                                </Col>
                                <Col xs={6} sm={6} md={6}  lg={3}>
                                <R6TypoComponent header={"Wins"} body={totalWins} footer={""}/>
                                </Col>
                                <Col xs={6} sm={6} md={6}  lg={3}>
                                <R6TypoComponent header={"Losses"} body={totalLoses} footer={""}/>
                                </Col>
                                <Col xs={6} sm={6} md={6}  lg={3}>
                                <R6TypoComponent header={"Abandons"} body={abaondons} footer={""}/>
                                </Col>
                            </Row>

                            <Row> 
                                <Col xs={6} sm={6} md={6}  lg={3}>
                                <R6TypoComponent header={"Rank"} body={rank} footer={""}/>
                                </Col>
                                <Col xs={6} sm={6} md={6}  lg={3}>
                                <R6TypoComponent header={"Max Rank"} body={maxRank} footer={""}/>
                                </Col>
                                <Col xs={6} sm={6} md={6}  lg={3}>
                                <R6TypoComponent header={"MMR"} body={mmr} footer={""}/>
                                </Col>
                                <Col xs={6} sm={6} md={6}  lg={3}>
                                <R6TypoComponent header={"MAX MMR"} body={maxMmr} footer={""}/>
                                </Col>
                            </Row>

                        </Container>
                        </RIGHT>
                        {/* <Container>
                        <Row noGutters={true}> 
                            <Col xs={2}>
                                <div style={{backgroundColor:'red', padding:0, height:'100px', width:'100%'}}>asdfasdfasdfas </div>
                            </Col>

                            <Col xs={10}>
                                <div style={{backgroundColor:'red'}}> adsfasdfasdf </div>
                            </Col>
                        </Row>
                    </Container> */}
                    </DIV1>         
        )
            )
            return previous;
        }, {} as any)

        
        
        let cards = Object.keys(allRankData).sort(this.compareFunction).map((value) => {
            return (
                // <R6Card title={"Season " + value} visible={true}>
                //     {allRankData[value]}
                // </R6Card>
                <>
                <R6CardComp title={"Season " + value}>
                    {allRankData[value]}
                </R6CardComp>
                <R6Br size="lg" />
                </>
            )
        })
        /* max와의 비교 */


        return(
          <>
          {cards}
          </>
        )
    }
}


