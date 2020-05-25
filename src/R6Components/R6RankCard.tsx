import React from 'react';
import styled , {ThemeProvider} from 'styled-components';
import { RANKAPI } from '../util/type';
import R6RankIcon from './R6RankIcon';
// import {ProgressBar, Container, Row, Col } from 'react-bootstrap'

export type RankIconProps = {
    /** 랭크 타입 */
    api: RANKAPI;
    /** 아이콘 사이즈 */
};



const Card = styled.section`
    display:flex;
    flex-direction: column;
    width:100%;
    border-radius:0.25rem;
    border-width: 1px;
    border-style: solid;
    border-color:black;
    background-color:red;
    flex:1;
`;

const Header = styled.section`
    height:45px;
    width:100%;
    padding-left:15px;
    padding-top:10px;
    padding-bottom:10px;
    border-radius: 0.20rem 0.20rem 0 0;
    border-color:gray;
    border-width: 0 0px 1px 0px;
    border-style: solid;
`;

const Body = styled.section`
    display:flex;
    flex-direction: row;
`

const Left = styled.section`
    display:flex;
    flex:1;
    flex-direction: column;
    text-align:center;
    justify-content:center;
    algin-items:center;
    align-content:center;
    background:green;
    height:100px;
`;

const LeftContainer = styled.section`
    justify-content: space-evenly;
`;

const LeftRank = styled.section`
    display:flex;
    flex-direction:row;
    align-items:center;
`;

const Right = styled.section`
    display:flex;
    flex-direction: row;
    flex:1;
    background:blue;
    align-items:center;
    justify-content:center;
    height:100px;
    margin-left:10px;
`;

// //    div + div { 
//         margin-left:10px;
//     }

// button + button : { 

const RightElementContainer = styled.section`
    display:table;
    background:red;
    width:500px;
`;
//    flex:1;

const RightElement = styled.section`
    display:table-row;
`;

//    flex-direction: row;

const HELL = styled.section`
    display:table-cell;
`;

const BigFont = styled.span`
    font-weight:900;
    color:black;
    font-size:15px;
`;

const SmallFont = styled.span`
    font-weight:200;
    color:gray;
    font-size:8px;
`;
//export => import string.

const R6RankCard = ({ api }: RankIconProps) => {
    //children..?
    return (
        <Card>
            <Header> {api.season} </Header>
            <Body>
            {/* <Container fluid={true}>
                <Row noGutters={true}> 
                    <Col md={4}>
                        <Left>
                            <LeftContainer>
                            <div style={{justifyContent:'center', backgroundColor:'pink'}}> {api.region} </div>
                            <LeftRank>
                                <div><R6RankIcon rank={"rank3"} size={30}></R6RankIcon></div>
                                <div style={{width:'100%'}}><ProgressBar now={30}></ProgressBar></div>
                                <div><R6RankIcon rank={"rank4"} size={30}></R6RankIcon></div>
                            </LeftRank>
                            <div> {api.mmr} </div>
                            </LeftContainer>
                        </Left>
                    </Col>  
                    <Col md={8} >
                        <Right>
                            <RightElementContainer>
                            
                            <RightElement>
                                <HELL> 
                                    <BigFont>
                                        {api.abandons}
                                        <SmallFont> abandons</SmallFont>
                                    </BigFont>
                                </HELL>

                                <HELL>
                                    <BigFont>
                                        {api.abandons}
                                        <SmallFont> abandons</SmallFont>
                                    </BigFont>
                                </HELL>
                                <HELL>                   
                                     <BigFont>
                                        {api.abandons}
                                        <SmallFont> abandons</SmallFont>
                                    </BigFont>
                                </HELL> 
                            </RightElement>

                            <RightElement>
                                <HELL>                   
                                     <BigFont>
                                        {api.abandons}
                                        <SmallFont> abandons</SmallFont>
                                    </BigFont>
                                </HELL>                                 
                                <HELL>                   
                                     <BigFont>
                                        {api.abandons}
                                        <SmallFont> abandons</SmallFont>
                                    </BigFont>
                                </HELL>                                
                                <HELL>                   
                                     <BigFont>
                                        {api.abandons}
                                        <SmallFont> sabandons</SmallFont>
                                    </BigFont>
                                </HELL>                 
                            </RightElement>
                            </RightElementContainer>
                            <R6RankIcon rank={"rank0"} size={50}></R6RankIcon>
                        </Right>
                    </Col>
            </Row>
            </Container>
            </Body>
            <Body>
            <Container fluid={true}>
                <Row noGutters={true}> 
                    <Col md={4}>
                        <Left>
                            <LeftContainer>
                            <div style={{justifyContent:'center', backgroundColor:'pink'}}> {api.region} </div>
                            <LeftRank>
                                <div><R6RankIcon rank={"rank3"} size={30}></R6RankIcon></div>
                                <div style={{width:'100%'}}><ProgressBar now={30}></ProgressBar></div>
                                <div><R6RankIcon rank={"rank4"} size={30}></R6RankIcon></div>
                            </LeftRank>
                            <div> {api.mmr} </div>
                            </LeftContainer>
                        </Left>
                    </Col>  
                    <Col md={8} >
                        <Right>
                            <RightElementContainer>
                            
                            <RightElement>
                                <HELL> 
                                    <BigFont>
                                        {api.abandons}
                                        <SmallFont> abandons</SmallFont>
                                    </BigFont>
                                </HELL>

                                <HELL>
                                    <BigFont>
                                        {api.abandons}
                                        <SmallFont> abandons</SmallFont>
                                    </BigFont>
                                </HELL>
                                <HELL>                   
                                     <BigFont>
                                        {api.abandons}
                                        <SmallFont> abandons</SmallFont>
                                    </BigFont>
                                </HELL> 
                            </RightElement>

                            <RightElement>
                                <HELL>                   
                                     <BigFont>
                                        {api.abandons}
                                        <SmallFont> abandons</SmallFont>
                                    </BigFont>
                                </HELL>                                 
                                <HELL>                   
                                     <BigFont>
                                        {api.abandons}
                                        <SmallFont> abandons</SmallFont>
                                    </BigFont>
                                </HELL>                                
                                <HELL>                   
                                     <BigFont>
                                        {api.abandons}
                                        <SmallFont> sabandons</SmallFont>
                                    </BigFont>
                                </HELL>                 
                            </RightElement>
                            </RightElementContainer>
                            <R6RankIcon rank={"rank0"} size={50}></R6RankIcon>
                        </Right>
                    </Col>
            </Row>
            </Container>
            </Body>
            <Body>
            <Container fluid={true}>
                <Row noGutters={true}> 
                    <Col md={4}>
                        <Left>
                            <LeftContainer>
                            <div style={{justifyContent:'center', backgroundColor:'pink'}}> {api.region} </div>
                            <LeftRank>
                                <div><R6RankIcon rank={"rank3"} size={30}></R6RankIcon></div>
                                <div style={{width:'100%'}}><ProgressBar now={30}></ProgressBar></div>
                                <div><R6RankIcon rank={"rank4"} size={30}></R6RankIcon></div>
                            </LeftRank>
                            <div> {api.mmr} </div>
                            </LeftContainer>
                        </Left>
                    </Col>  
                    <Col md={8} >
                        <Right>
                            <RightElementContainer>
                            
                            <RightElement>
                                <HELL> 
                                    <BigFont>
                                        {api.abandons}
                                        <SmallFont> abandons</SmallFont>
                                    </BigFont>
                                </HELL>

                                <HELL>
                                    <BigFont>
                                        {api.abandons}
                                        <SmallFont> abandons</SmallFont>
                                    </BigFont>
                                </HELL>
                                <HELL>                   
                                     <BigFont>
                                        {api.abandons}
                                        <SmallFont> abandons</SmallFont>
                                    </BigFont>
                                </HELL> 
                            </RightElement>

                            <RightElement>
                                <HELL>                   
                                     <BigFont>
                                        {api.abandons}
                                        <SmallFont> abandons</SmallFont>
                                    </BigFont>
                                </HELL>                                 
                                <HELL>                   
                                     <BigFont>
                                        {api.abandons}
                                        <SmallFont> abandons</SmallFont>
                                    </BigFont>
                                </HELL>                                
                                <HELL>                   
                                     <BigFont>
                                        {api.abandons}
                                        <SmallFont> sabandons</SmallFont>
                                    </BigFont>
                                </HELL>                 
                            </RightElement>
                            </RightElementContainer>
                            <R6RankIcon rank={"rank0"} size={50}></R6RankIcon>
                        </Right>
                    </Col>
            </Row>
            </Container> */}
            </Body>
        </Card>
    );
};


export default R6RankCard;
  