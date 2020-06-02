import React from 'react';
import '../../App.css'
import SearchBar from '../../R6Components/SearchBar/SearchBar'
import Space from '../../R6Components/R6Br'
import route from '../../route'
import {RouteDecoratorProps} from '../../route'
import {RouteComponentProps} from 'react-router-dom'

import { Input } from 'antd';

const { Search } = Input;

export default class Landing extends React.Component {
    render() {
        return (
            <div id="landing-root" style={{background: "#1c1c1f", zIndex: 10}}>
                <div className="background-video" style={{position: "absolute", width: "100%", zIndex: 10, opacity: "0.3"}}>
                    <video style={{width: "100%", height: "100%"}} id="myVideoContent" muted={true} autoPlay={true} loop={true} preload="auto" src="background_void_edge.mp4">
                    </video>
                </div>

                <div className="logo-container" style={{
                    zIndex: 11,
                    height: "440px",
                    width: "1140px", 
                    position: "relative",
                    color: "#fff",
                    marginLeft: "auto",
                    marginRight: "auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                }}> 
                    <span style={{
                        fontSize: "40px",
                    }}>
                        Rain Box Six Seige : 
                    </span>

                </div>
                <div className="searchbar-container" style={{
                    zIndex: 11,
                    width: "1140px", 
                    height: "60px",
                    position: "relative",
                    padding: "0 100px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    display:"border_box",
                }}>
                    <Search
                        placeholder="아이디를 입력해주세요"
                        enterButton="Go"
                        size="large"
                    />
                </div>
                <div className="container" style={{
                    height: "calc(100vh - 500px)",

                }}> 
                </div>
            </div>
        )
    }
}


