import ReactMinimalPieChart from 'react-minimal-pie-chart';
import React from 'react'


interface Props {
    data : [{color:string, title:string, value:number}]
    animated: boolean
}


export default class Grpah extends React.Component<Props> {

// color: '#e84057',
// title: 'Win',
// value: 100
// },
// {
// color: '#5383e8',

    render(){
        return(
            <ReactMinimalPieChart
                animate={this.props.animated}
                animationDuration={400}
                animationEasing="ease-out"
                cx={50}
                cy={50}
                data={this.props.data}
                label={false}
                labelPosition={50}
                lengthAngle={360}
                lineWidth={30}
                paddingAngle={0} 
                radius={50}
                // rounded
                startAngle={90}
                viewBoxSize={[
                    100,
                    100
                ]}
            />
        )
    }
}