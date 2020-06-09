import React from 'react';
import '../../App.css'
import './Landing.css'


import { Input } from 'antd';

import styled from 'styled-components'

const { Search } = Input;

const StyledSearch = styled(Search)`
    .ant-input-group * {
        height: 60px;
        font-size: 20px;
        border-radius: 0px;
    }

    .ant-btn-primary {
        background: #515163;
        border-color: #515163;
    }

    .ant-input-group-addon {
        background: #515163;
    }
`;

const LandingRoot = styled.div`
    z-index: 10;
`;

/**
 *     // position:absolute;
    // top : 50%;
    // left: 50%;
    // width:1591;
    // height:900;
    // width: 100%;
    // height: 100%;

 */

// const VideoContainer = styled.div`
//     position: absolute; 
//     width:100%;
//     height:100%;
//     top:0;
//     left:0;
//     zIndex: 12;
//     opacity: 0.3;
//     background:red;
// `
// const Video = styled.video`
//     scale:0.5;
// `;

const Container = styled.div`
    @media (min-width: 576px) {
        max-width: 540px;
    }

    @media (min-width: 768px) {
        max-width: 720px;
    }

    @media (min-width: 992px) {
        max-width: 960px;
    }

    @media (min-width: 1200px) {
        max-width: 1140px;
    }

    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

const HomeBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: #1c1c1f;
`;

const HomeLogo = styled.div`
    z-index: 11;
    position: relative;
    color: #fff;
    display: flex;
    height: 440px;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        height: 300px;
    }

`;

const HomeSearch = styled.div`
    z-index: 11;
    height: 60px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    
    max-width:800px;

    padding: 0 100px;
    @media (max-width: 768px) {
        padding: 0 12px;
    }
`;

export default class Landing extends React.Component {
    
    componentDidMount(){
        // this.setLayout();
        window.addEventListener('resize', this.setLayout);
        window.addEventListener('load', this.setLayout);
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.setLayout);
        window.addEventListener('load', this.setLayout);
    }

    setLayout(){

        /** scale to fit */
        const videoElement = document.querySelector(".background-video") as HTMLElement;
        const videoContent = document.querySelector("#background-video-content") as HTMLElement

        const heightRatio = window.innerHeight / 900;
        const widthRatio = window.innerWidth / 1560;

        let ratio;
        if (widthRatio <= heightRatio) {
            ratio = heightRatio;
        } else {
            ratio = widthRatio;
        }

        if (videoElement && videoContent) {
            videoContent.style.transform = `translate3d(-50%,-50%,0) scale(${ratio})`;
        }
    }

    render() {
        return (
               
            <div>

               <div className="background-video" style={{}}>
                    <video id="background-video-content" style={{}} muted={true} autoPlay={true} loop={true} preload="auto" src="background_void_edge.mp4">
                    </video>
                </div>

                <div className="black-layer"></div>

                <div className="search-container">
                <div className="search-items">

                    <div className="logo">
                                Rain Box Six Seige
                        </div>
                        <StyledSearch
                            placeholder="아이디를 입력해주세요"
                            enterButton="Go"
                            size="large"
                        />

                    </div>
                </div>
            </div>
            )
        }
    }
