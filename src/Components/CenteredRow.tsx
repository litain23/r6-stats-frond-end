
import {
    Row
} from 'react-bootstrap'
import React from 'react'
import '../App.css'


export default class CenteredRow extends React.Component {
    render(){
        return(
            <>
                <Row className="wrapper">
                    {this.props.children}
                </Row>
            </>
        )
    }
}