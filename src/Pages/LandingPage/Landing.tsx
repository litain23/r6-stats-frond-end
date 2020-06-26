import React from 'react';
import '../../App.css'
import './Landing.css'
import R6PlatformIcon from '../../R6Components/R6PlatformIcon';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { PlatformType } from '../../util/type';
import R6PlatformIonGroup from '../../R6Components/R6PlatformIconGroup';

interface LandingState {
    key:PlatformType
    text:string
}

  

class Landing extends React.Component<RouteComponentProps,LandingState> {

    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            key: "uplay",
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
        return (
               
            <div className="landing-container">

               <div className="background-video" style={{}}>
                    <video id="background-video-content" style={{}} muted={true} autoPlay={true} loop={true} preload="auto" src="season18.mp4">
                    </video>
                </div>

                <div className="black-layer"></div>

                <div className="search-container">
                <div className="search-items" style={{lineHeight:1.5}}>

                        <div className="sub-header white-text">
                                시즌 18 : Operation Steel Wave
                        </div>
                        <div className="sub-sub-header white-text ">
                            내 계정의 최근 전적을 확인하세요
                        </div>

                        
                        <div className="input-container">

                            <R6PlatformIonGroup className="icons" value={this.state.key} onChange={(value) => { this.setState({key: value})}}>
                                <R6PlatformIcon value={"uplay"}></R6PlatformIcon>
                                <R6PlatformIcon value={"psn"}></R6PlatformIcon>
                                <R6PlatformIcon value={"xbl"}></R6PlatformIcon>
                            </R6PlatformIonGroup>

                            <input placeholder="아이디를 입력해주세요" value={this.state.text} onChange={(e)=>{this.setState({text:e.currentTarget.value})}} onKeyDown={(event) => {
                                if (event.keyCode === 13) {
                                    this.props.history.push(`/search/overview/query?platform=${this.state.key}&username=${this.state.text}`)
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
