import React, { CSSProperties, FormEvent, FormEventHandler, createRef, ComponentLifecycle } from 'react';
import { useEffect } from 'react';

import lottie from 'lottie-web';


//lottie
//https://github.com/airbnb/lottie-web#readme


interface State {
    isStopped:boolean
    isPaused:boolean
}

interface abc extends HTMLScriptElement {
    background:string
    loop:boolean
    controls:boolean
    autoplay:boolean
}

interface hey {
    mount:()=>void;
    unmount:()=>void;
}

const LOTTIE = ({mount,unmount}:hey) => {

    const s  = document.createElement('lottie-player') as abc;
    s.src = "https://assets7.lottiefiles.com/packages/lf20_y9qOnk.json";
    s.loop = true;
    s.autoplay=true;

    // mount = mount.apply();
    // mount.apply(document.body.appendChild(s))
    // unmount.apply(document.body.removeChild(s))
    return(
        <>
        </>
    )
}


export default class validation extends React.Component<{},{}>{


    constructor(props:{}) {
      super(props);
    }
  
    componentDidMount(){
        alert("abc");
        
        // document.body.removeChild(s);  
    }

    componentWillUnmount(){
        alert("def");
    }
    
      
    render() {
        return(<>
        <LOTTIE mount={this.componentDidMount.bind(this)} unmount={this.componentWillUnmount.bind(this)}></LOTTIE>
        </>)
        // const script = document.createElement('script');
        // script.src = "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
        // script.con
        // script.async = true;
        // document.body.appendChild(script);
      
        // return () => {
        //   document.body.removeChild(script);
        // }
    }
  }
  