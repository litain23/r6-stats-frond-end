import React from "react";
import '../../../src/App.css'
import './operator.css'
import styled, {keyframes } from 'styled-components'
import lottie, { AnimationConfigWithPath } from 'lottie-web';

const FILL = styled.div`
    display:block;
    background:black;
    min-height:100vh;
    height:100vh;
    width:100%;
    overflow:hidden;
    position:fixed;
    top:0;
    left:0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

// const LOADING = styled.div`
//     display:flex;
//     align-items:center;
//     justify-content:center;
//     position:relative;
//     background:transparent;
//     top:0;
//     left:0;
//     bottom:0;
//     right:0;
//     z-index:100;
//     background:transparent;
//     opacity:1;
//     transition: 0.5s;
// `;

// const KEYFRAME = keyframes`
//     0% { stroke-dashoffset: 157 };
//     75% { stroke-dashoffset: -147 };
//     100% { stroke-dashoffset: -157 };
// `

// const LOADINGCIRCLE = styled.svg`

//     width:54px;
//     height:54px;

//     circle {
//         stroke:white;
//         stroke-width:4;
//         fill:none;
//         stroke-dasharray:157;
//         stroke-dashoffset:-157;
//         animation: ${KEYFRAME} 1s infinite;
//     }
// `;

// const WHITECOLOR = styled.div`
//     color:white;
//     font-size:1.2em;
// `



// styled componnt transition이 부자연스럽습니다.
// interface Flipped {
//     flipped: boolean
// }

// const FRONT = styled.div<Flipped>`
//     position: absolute;
//     overflow:hidden;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     border-radius: 10px;
//     backface-visibility: hidden;
//     background:white;
//     color: #000;
//     // transition: transform .6s linear;
//     // transform: ${props => props.flipped ? 'perspective(300px) rotateY(0deg)' : 'perspective(300px) rotateY(180deg)'};
// `;

// const BACK = styled.div<Flipped>`
//     position: absolute;
//     overflow:hidden;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     border-radius: 10px;
//     backface-visibility: hidden;
//     background:red;
//     color: #000;
//     // transform: ${props => props.flipped ? 'perspective(300px) rotateY(180deg)' : 'perspective(300px) rotateY(0deg)'};
//     // transition: transform .6s ease-out;
// ` 

/**
 * min-width/
 * flex-basis/
 * flex:1 (flex shrink)
 * flex-grow:1;
 * flex-basis: 0%;
 */

// 0.6 
// 거리를 재서 그것대로 height.
// height기준으로 하기. 

// interface ContainerSize {
//     height:number;
//     width:number;
// }

// const CARD_CONTAINER = styled.div<ContainerSize>`
//     position: relative;
//     color:white;
//     width:${props => props.width}px;
//     height:${props => props.height}px;
//     border-radius: 20px;
//     padding: 0px;
// `


/** 오퍼레이터 설명을 위한 카드. */
export default class LoadingWithCard extends React.Component<{}, { height: number, width: number}> {
    


    constructor(props: {}) {
        super(props)
        this.state = {
            height: 0,
            width: 0,
        }
    }
    
    flipped:boolean = false;

    componentDidMount(){

        let option : AnimationConfigWithPath = {
            path : "https://assets9.lottiefiles.com/packages/lf20_9p6Smt.json",
            container:document.querySelector('.loadingbar') as Element,
            renderer:'svg',
            loop:true,
            autoplay:true
        }

        let anim = lottie.loadAnimation(option);
        anim.setSpeed(2);
        anim.play();
        
        // let option : AnimationConfig = {
        //     container:document.querySelector('abc') as HTMLElement,
        //     renderer:"svg",
        //     loop:true,
        //     autoplay: true,
        //     assetsPath:animationData,
        // }


        // const card = document.querySelector('.operator-card') as HTMLElement;
        // const front = document.querySelector('.operator-card .front') as HTMLElement;
        // const back = document.querySelector('.operator-card .back') as HTMLElement;

        // // card.addEventListener('click', () => {
        // //     if (this.flipped) {
        // //         front.style.transform = 'rotateY(0deg)'
        // //         back.style.transform = 'rotateY(180deg)'
        // //         this.flipped = !this.flipped;
        // //     } else {
        // //         front.style.transform = 'rotateY(180deg)'
        // //         back.style.transform = 'rotateY(0deg)'
        // //         this.flipped = !this.flipped;
        // //     }
        // // })

        // setTimeout(() => {
        //     front.style.transform = 'rotateY(180deg)'
        //     back.style.transform = 'rotateY(0deg)'
        // }, 500);
        
        // window.addEventListener('load' , () => {

        //     this.setState({height: window.innerHeight * 0.5, width: window.innerHeight* 0.5 * 0.6})
        // })

        // window.addEventListener('resize' , () => {
        //     this.setState({height: window.innerHeight * 0.5 , width: window.innerHeight* 0.5 * 0.6})
        // })
        // this.height = window.innerHeight;
        // this.width = this.height * 0.6;
    }


    componentWillUnmount() {
        // window.removeEventListener('resize', () => {});
        // window.removeEventListener('load', () => {});
        clearTimeout();
    }

    render(){


        return(
            <FILL>
                <div className="loadingbar"
                    style={{height:"100px",width:"100px"}}>
                </div>
           </FILL>
        )
    }
    
}



  
            