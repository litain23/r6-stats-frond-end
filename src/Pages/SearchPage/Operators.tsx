
import React from 'react';
import {Table} from 'react-bootstrap';
import * as operators from '../../@operatorpng'; // 자동으로 타입을 만듬. operators tyle.
import { OPERATORAPI } from '../../util/type';

interface Props {
    apis: OPERATORAPI[];
}

interface State {

}

export default class SearchOperators extends React.Component<Props, State> {

    constructor(props:Props) {
        super(props);
    }

    static defaultProps = {
        apis : [
            {
              "name": "thatcher",
              "operatorIndex": "5:1",
              "kills": 228,
              "death": 294,
              "headShot": 78,
              "meleeKills": 0,
              "totalXp": 729680,
              "timePlayed": 81124,
              "roundWon": 172,
              "roundLost": 226,
              "createdTime": "2020-05-19T10:46:47.2119806"
            },
            {
              "name": "castle",
              "operatorIndex": "2:2",
              "kills": 30,
              "death": 35,
              "headShot": 3,
              "meleeKills": 0,
              "totalXp": 112580,
              "timePlayed": 9874,
              "roundWon": 30,
              "roundLost": 17,
              "createdTime": "2020-05-19T10:46:47.2119806"
            },
            {
              "name": "ash",
              "operatorIndex": "3:2",
              "kills": 366,
              "death": 394,
              "headShot": 145,
              "meleeKills": 2,
              "totalXp": 972360,
              "timePlayed": 104508,
              "roundWon": 222,
              "roundLost": 292,
              "createdTime": "2020-05-19T10:46:47.2119806"
            }
          ]
    }

    row = (api : OPERATORAPI) => {
        return(
        <tr>
        <td>
            <img style={{width:'40px'}}src={operators[api.name]}></img>
            <div>{api.name}</div> 
        </td>
        <td>{api.kills}</td>
        <td>{api.death}</td>
        <td> "K/D" </td>
        <td>{api.roundWon}</td>
        <td>{api.roundLost}</td>
        <td> "W/L" </td>
        <td>{api.headShot}</td>
        <td>{api.meleeKills}</td>
        <td>{api.totalXp}</td>
        <td>{api.timePlayed}</td>
        </tr>
        )  
    }


    render() {
        return(
        <Table responsive striped bordered hover variant="dark" style={{textAlign:"center"}}>
            <thead>
                <tr>
                <th>Operator</th>
                <th>Kills</th>
                <th>Deaths</th>
                <th>K/D</th>
                <th>Wins</th>
                <th>Losses</th>
                <th>W/L</th>
                <th>Headshots</th>
                <th>Melee Kills</th>
                <th>total XP</th>
                <th>Playtime</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.props.apis.map( (api) => this.row(api))
                }
            </tbody>
        </Table>        
        )
    }

}