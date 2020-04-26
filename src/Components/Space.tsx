import React, { CSSProperties } from 'react';

type Props = {
    size:number;
}

export default class Space extends React.Component<Props> {
    render(){
        const style : CSSProperties = {height : this.props.size}
        return(
            <div style={style}>
            </div>
        )
    }
}