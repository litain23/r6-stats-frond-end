import React from 'react';
import '../App.css'
import SearchBar from '../Components/SearchBar/SearchBar'
import {Container, Row, Col} from 'react-bootstrap'
import Space from '../Components/R6Br'
export default class Landing extends React.Component {


    render(){
        return(
            <div>
                <div id="myVideo">
                <video id="myVideoContent" muted={true} autoPlay={true} loop={true} preload="auto" src="https://r6.op.gg/video/r6-header-voidedge.mp4">
                    Not support video
                </video>
                </div>
                <div id="overlay">
                </div>
                <Space size={200}></Space>
                <Container>
                    <Row>
                        sadfasdf
                    </Row>
                    <Row>
                        <Col>
                            <SearchBar isLarge={true}/>
                        </Col>
                    </Row>
                </Container>
                <div id="main-container">
                    
                </div>

                <div id="search-bar">
                    {/* <SearchBar isLarge={true}/> */}
                </div>

            {/* <div id="outer">
                <div id="home-top-video">
                <video muted={true} autoPlay={true} loop={true} preload="auto" src="https://r6.op.gg/video/r6-header-voidedge.mp4">
                             Not support video
                 </video>
                <div id="home-text">
                    <h3>LIFESTYLE</h3>
                </div>
                </div>
            </div> */}


            </div>

       

        )
    }

}

