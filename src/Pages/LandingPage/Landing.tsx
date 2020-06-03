import React from 'react';
import '../../App.css'

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
`;

const LandingRoot = styled.div`
    z-index: 10;
`;

const Video = styled.video`
    width: 100%;
    height: 100%;
`;

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

    padding: 0 100px;
    @media (max-width: 768px) {
        padding: 0 12px;
    }
`;

export default class Landing extends React.Component {
    render() {
        return (
            <LandingRoot>
                <HomeBackground> </HomeBackground>
                <div className="background-video" style={{position: "absolute", width: "100%", zIndex: 10, opacity: "0.3"}}>
                    <Video id="background-video-content" muted={true} autoPlay={true} loop={true} preload="auto" src="background_void_edge.mp4">
                    </Video>
                </div>

                <Container>
                    <HomeLogo>
                        <span style={{
                            fontSize: "40px",
                        }}>
                            Rain Box Six Seige : 
                        </span>
                    </HomeLogo>
                </Container>

                <Container>
                    <HomeSearch>
                        <StyledSearch
                            placeholder="아이디를 입력해주세요"
                            enterButton="Go"
                            size="large"
                            style={{
                                background: "#1c1c1f"
                            }}
                        />
                    </HomeSearch>
               </Container>
            </LandingRoot>
        )
    }
}


