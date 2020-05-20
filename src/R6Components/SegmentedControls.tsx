import React from 'react'
import {ToggleButtonGroup, ToggleButton
,Button,ButtonGroup} from 'react-bootstrap'
import Space from './R6Br'

// export interface Props {
//     data:[{name: string, handler: ()=>void}],
// }

export type dataType = {name: string, handler: ()=>void}[]

interface Props {
    data:dataType,
}

interface State {
    value:number
}

export default class SegmentedControls extends React.Component<Props,State> {   

    constructor(props : Props){
        super(props)
        this.state = {
            value: 0
        }
    }

    //  this.props.data[value].handler()
    handleChange = (value:number) => { 
        this.setState({value:value})
        this.props.data[value].handler();
    }

    render(){
        // alert(this.props.height!-40)
        // alert((8+(this.props.height!-40)).toString() + "px");
        const buttons = this.props.data.map((data:{name: string},index:number) => {
            return (
                <ToggleButton value={index} variant="dark" style={{height:'100%',width:'100%'}}>{data.name}</ToggleButton>
            )
        })
        return(
            <ToggleButtonGroup 
            style={{ width:'100%'}}
            type="radio"
            value={this.state.value}
            onChange={this.handleChange}
            name="radio"
            size="lg"
            defaultValue={0}>
                {buttons}
            </ToggleButtonGroup>
         )
    }

}