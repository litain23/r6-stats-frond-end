
import React from 'react';
import * as operators from '../../@operatorpng'; // 자동으로 타입을 만듬. operators tyle.
import { OPERATORAPI } from '../../util/type';

import { Table, Row } from 'antd';
import { ColumnType } from 'antd/lib/table/interface'
import { Typography } from 'antd';
import { API } from '../../util/API';
import { withRouter, RouteComponentProps} from 'react-router-dom';
const { Text } = Typography;


interface Props {
    operators: OPERATORAPI[];

}
interface State {
}

class SearchOperators extends React.Component<RouteComponentProps & Props, State> {

    constructor(props:RouteComponentProps & Props) {
        super(props);

        // this.state = {
        //     operators: [] as OPERATORAPI[]
        // }
    }

    async componentDidMount() {
        // const [operatorAPIs, operatorError] = await API<OPERATORAPI[]>("operator/uplay/piliot");

        // if (operatorError) {
        //     this.props.history.goBack();
        // } else {
        //     this.setState({operators : operatorAPIs!})
        // }
    }


    row = (api : OPERATORAPI) => {


            return(
            <tr>
            <td>
                <img alt={"operators"} style={{width:'40px'}}src={operators[api.name]}></img>
                <div>{api.name}</div> 
            </td>
            <td>{api.kills}</td>
            <td>{api.death}</td>
            <td>{api.roundWon}</td>
            <td>{api.roundLost}</td>
            <td>{api.headShot}</td>
            <td>{api.meleeKills}</td>
            <td>{api.totalXp}</td>
            <td>{api.timePlayed}</td>
            </tr>
        )  
    }

    render() {


        const columns: ColumnType<OPERATORAPI>[] = [{
            title: '오퍼레이터',
            dataIndex: "name",
            sorter: (a, b) => a.name.localeCompare(b.name),
            filters: [
                { text: '공격팀', value: 'atk' },
                { text: '방어팀', value: 'def' },
            ],
            onFilter: (value, record) => { return record.category === value},
            ellipsis: false,
            showSorterTooltip:false,
            render: (value, record, index) => {
                return(
                    <>  
                        <Row justify="center">
                            <img alt={"operators"} style={{width:'50px' , height:'50px'}} src={operators[record.name]}></img>
                        </Row>
                        <Row justify="center">
                        <Text strong>{record.name.toString().toUpperCase()}</Text>
                        </Row>
                    </>
                )
            }
            },  
            
            {
                title: '킬 수',
                dataIndex: 'kills',
                ellipsis: false,
                sorter: (a, b) => (a.kills > b.kills)? 1 : -1,
                showSorterTooltip:false,
            },{
                title: '데스 수',
                dataIndex: 'death',
                ellipsis: false,
                sorter: (a, b) => (a.death > b.death)? 1 : -1,
                showSorterTooltip:false,
            },{
                title: '승리 수',
                dataIndex: 'roundWon',
                ellipsis: false,
                sorter: (a, b) => (a.roundWon > b.roundWon)? 1 : -1,
                showSorterTooltip:false,
            },{
                title: '패배 수',
                dataIndex: 'roundLost',
                ellipsis: false,
                sorter: (a, b) => (a.roundLost > b.roundLost)? 1 : -1,
                showSorterTooltip:false,

            },{
                title: '헤드샷 수',
                dataIndex: 'headShot',
                ellipsis: false,
                sorter: (a, b) => (a.headShot > b.headShot)? 1 : -1,
                showSorterTooltip:false,
            },{
                title: '근접 킬 수',
                dataIndex: 'meleeKills',
                ellipsis: false,
                sorter: (a, b) => (a.meleeKills > b.meleeKills)? 1 : -1,
                showSorterTooltip:false,
            },{
                title: '총 XP',
                dataIndex: 'totalXp',
                ellipsis: false,
                sorter: (a, b) => (a.totalXp > b.totalXp)? 1 : -1,
                showSorterTooltip:false,
            },
        ]

        const dataSource = (operators : OPERATORAPI[]): (OPERATORAPI & { key : string })[] =>{
            let index : number = 0;
            return operators.map( (api) => {
                const operator = Object.assign(api, {key : index.toString()});
                index++;
                return operator;
            })
        }       

    return( 
        <>
         <Table
            columns={columns}
            dataSource={dataSource(this.props.operators)}
            scroll={{x:true}}
            pagination={false}
            />
        </>
        ) 
    }
}

export default withRouter(SearchOperators);