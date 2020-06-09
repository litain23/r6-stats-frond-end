
import React from 'react';
// import {Table} from 'react-bootstrap';
import * as operators from '../../@operatorpng'; // 자동으로 타입을 만듬. operators tyle.
import { OPERATORAPI } from '../../util/type';

import { Table, Space, Divider, Row } from 'antd';
import { ColumnType } from 'antd/lib/table/interface'
import { Typography } from 'antd';
import {API} from '../../util/API';
const { Title , Paragraph } = Typography
const { Text } = Typography;

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



        // <th>Operator</th>
        // <th>Kills</th>
        // <th>Deaths</th>
        // <th>K/D</th>
        // <th>Wins</th>
        // <th>Losses</th>
        // <th>W/L</th>
        // <th>Headshots</th>
        // <th>Melee Kills</th>
        // <th>total XP</th>
        // <th>Playtime</th>

        //: ColumnType<any>[]
        const columns: ColumnType<OPERATORAPI>[] = [{
            
            title: 'Operator',
            dataIndex: "name",
            sorter: (a, b) => a.name.localeCompare(b.name),
            filters: [
                { text: '공격팀', value: 'attack' },
                { text: '방어팀', value: 'deffense' },
            ],
            ellipsis: false,
            showSorterTooltip:false,
            onCell: (record, index) => {
                console.log(record)
                return {
                    
                }
            },
            render: (value, record, index) => {
                return(
                    <>  
                        <Row justify="center">
                        <img style={{width:'50px'}} src={operators[record.name]}></img>
                        </Row>
                        <Row justify="center">
                        <Text strong>{record.name.toString().toUpperCase()}</Text>
                        </Row>
                    </>
                )
            }
            },  
            
            {
                title: 'Kills',
                dataIndex: 'kills',
                ellipsis: false,
            },{
                title: 'Deaths',
                dataIndex: 'death',
                ellipsis: false,
            },{
                title: 'K/D',
                dataIndex: 'K/D',
                ellipsis: false,
            }, {
                title: 'Wins',
                dataIndex: 'roundWon',
                ellipsis: false,
            },{
                title: 'Losses',
                dataIndex: 'roundLost',
                ellipsis: false,
            },{
                title: 'W/L',
                dataIndex: 'W/L',
                ellipsis: false,
            },{
                title: 'Headshots',
                dataIndex: 'headShot',
                ellipsis: false,
            },{
                title: 'Melee Kills',
                dataIndex: 'meleeKills',
                ellipsis: false,
            },{
                title: 'Total XP',
                dataIndex: 'totalXp',
                ellipsis: false,
            },{
                title: 'Playtime',
                dataIndex: 'timePlayed',
                ellipsis: false,
            }
        ]
       //    name:operators
    // operatorIndex: string,
    // kills: number,
    // death: number,
    // headShot: number,
    // meleeKills: number,
    // totalXp: number,
    // timePlayed: number,
    // roundWon: number,
    // roundLost: number,
    // createdTime: string


  
        const dataSource = (apis : OPERATORAPI[]): (OPERATORAPI & { key : string })[] =>{
            let index : number = 0;
            return apis.map( (api) => {
                const operator = Object.assign(api, {key : index.toString()});
                index++;
                return operator;
            })
        }       


           // {
        //     title: 'Name',
        //     dataIndex: 'name',
        //     key: 'name',
        //     filters: [
        //       { text: 'Joe', value: 'Joe' },
        //       { text: 'Jim', value: 'Jim' },
        //     ],
        //     filteredValue: filteredInfo.name || null,
        //     onFilter: (value, record) => record.name.includes(value),
        //     sorter: (a, b) => a.name.length - b.name.length,
        //     sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
        //     ellipsis: true,
        //   },
     


        
        
        
        // (api : OPERATORAPI) : ColumnType<any>[] => {
            
        //     //type
            
        //    const a : ColumnType<any>[] = [{
        //        title:
        //    }]
            
        //     return Object.keys(api).map( (key) => {
        //         const column : ColumnType<any> = {};
        //         column.dataIndex = key;
        //         column.ellipsis=false;
        //         column.title=

        //         return column
        //     })


            
        // }



        // {
        //     title: 'Name',
        //     dataIndex: 'name',
        //     key: 'name',
        //     filters: [
        //       { text: 'Joe', value: 'Joe' },
        //       { text: 'Jim', value: 'Jim' },
        //     ],
        //     filteredValue: filteredInfo.name || null,
        //     onFilter: (value, record) => record.name.includes(value),
        //     sorter: (a, b) => a.name.length - b.name.length,
        //     sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
        //     ellipsis: true,
        //   },
     


    return( <>

         <Table
            columns={columns}
            dataSource={dataSource(this.props.apis)}
            scroll={{x:true}}
            pagination={false}
            />


        {/* <Table
            columns={columns}
            rowKey={record => record.login.uuid}
            dataSource={data}
            pagination={pagination}
            loading={loading}
            onChange={this.handleTableChange}
        /> */}
        
        </>
     )
    }

}

/*

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


        */