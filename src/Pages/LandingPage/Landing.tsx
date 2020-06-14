import React from 'react';
import '../../App.css'
import './Landing.css'
import R6Icon from '../../R6Components/R6Icon';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface LandingState {
    key:number
    text:string
}


class Landing extends React.Component<RouteComponentProps,LandingState> {

    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            key: 0,
            text: ""
        }
    }
    
    componentDidMount(){
        // this.setLayout();
        window.addEventListener('resize', this.setLayout);
        window.addEventListener('load', this.setLayout);
        this.setLayout();
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
        const color = "#1890ff";
        return (
               
            <div className="landing-container">

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
                        <div className="input-container">

                            <div className="icons">
                                <R6Icon color={this.state.key === 0 ? color: undefined} icon={"windows"} onClick={()=>{this.setState({key:0})}}></R6Icon>
                                <R6Icon color={this.state.key === 1 ? color: undefined} icon={"playstation"} onClick={()=>{this.setState({key:1})}}></R6Icon>
                                <R6Icon color={this.state.key === 2 ? color: undefined}  icon={"xbox"} onClick={()=>{this.setState({key:2})}}></R6Icon>
                            </div>
                            <input placeholder="아이디를 입력해주세요" value={this.state.text} onChange={(e)=>{this.setState({text:e.currentTarget.value})}} onKeyDown={(event) => {
                                if (event.keyCode === 13) {
                                    this.props.history.push("/search/" + event.currentTarget.value)
                                 }}}/>
                            <button onClick={()=>{this.props.history.push("/search/" + this.state.text)}} > Search </button>
                        </div>

                    </div>
                </div>
            </div>
            )
        }
    }


export default withRouter(Landing);
