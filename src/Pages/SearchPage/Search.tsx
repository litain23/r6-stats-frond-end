import React from 'react';
import '../../App.css'
import './search.css'
import {API, GETRANKS} from '../../util/API'
import {RANKAPI, GENERALAPI, RANKALLAPI} from '../../util/type'
import route, { RouteDecoratorProps } from '../../route';


import R6Spinner from '../../R6Components/R6Spinner'

import styled from 'styled-components';

import SearchOverviewTab from './Overview';
import SearchSeasonsTab from './Seasons';
import SearchOperators from './Operators';

import { Statistic } from 'antd';
import { Row, Col, Divider } from 'antd';
import { Typography } from 'antd';
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import R6Icon from '../../R6Components/R6Icon';
import { Progress } from 'antd';
import { Menu , Layout} from 'antd';
import { AppstoreOutlined, TeamOutlined, TrophyOutlined } from '@ant-design/icons';
import { UserOutlined, IdcardOutlined, AreaChartOutlined } from '@ant-design/icons';
import Profile from './Profile';



const { SubMenu } = Menu;

const { Header, Content, Footer, Sider } = Layout;

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;


interface State {
    rankData : RANKAPI
    generalData : GENERALAPI
    loading: boolean
    currentTab: number
    allRankData: RANKALLAPI
    current:string
}

interface Props {
}
const Margin = styled.section`
    margin-left:20px;
    margin-right:20px;
`;

// const Header = styled.section`
//     width:100%;
//     background:${theme.color.dark.gray.light};
// `;

// @(route('/search/:id') as any)
// export default class Search extends React.Component<Props&RouteDecoratorProps, State> {
export default class Search extends React.Component<Props, State> {



    constructor(props: Props){
        super(props);
        this.state = {
            rankData: {} as RANKAPI,
            generalData: {} as GENERALAPI,
            loading:true,
            currentTab:1,
            allRankData: [] as unknown as RANKALLAPI,
            current: 'overview',
        }
        // console.log(this.props.match.params);

        // this.tabHanndler = this.tabHanndler.bind(this);

        
        this.handleClick = this.handleClick.bind(this);
        
    }

    handleClick(e:any) {
        this.setState({
            current: e.key,
          });
    }


      
    // tabHanndler(tabNumber : number) {
    //     this.setState({currentTab:tabNumber})
    // }

    tabContentsHandler(key: string): React.ReactNode {
        
        switch(key){
            case 'overview':
                return(<SearchOverviewTab generalData={this.state.generalData} rankData={this.state.rankData}/>);
            case 'seasons':
                return(<SearchSeasonsTab seasons={this.state.allRankData}></SearchSeasonsTab>);
            case 'operators':
                return(<SearchOperators></SearchOperators>);
        } 

    }
    
    async componentDidMount(){

        this.setState({
            allRankData:{
            abc :[
                {
                   "region":"ncsa",
                   "rankStat":[
                      {
                         "maxMmr":6203,
                         "death":0,
                         "rank":20,
                         "maxRank":20,
                         "kills":0,
                         "abandons":0,
                         "mmr":6150,
                         "wins":92,
                         "region":"ncsa",
                         "season":6,
                         "losses":13,
                         "createdTime":"2020-06-08T14:07:47.764903",
                         "maxRankString":"PLATINUM 2",
                         "rankString":"PLATINUM 2"
                      },
                      {
                         "maxMmr":4664,
                         "death":0,
                         "rank":20,
                         "maxRank":20,
                         "kills":0,
                         "abandons":0,
                         "mmr":4664,
                         "wins":22,
                         "region":"ncsa",
                         "season":7,
                         "losses":0,
                         "createdTime":"2020-06-08T14:07:48.212276",
                         "maxRankString":"PLATINUM 2",
                         "rankString":"PLATINUM 2"
                      },
                      {
                         "maxMmr":4653,
                         "death":0,
                         "rank":20,
                         "maxRank":20,
                         "kills":0,
                         "abandons":0,
                         "mmr":4653,
                         "wins":44,
                         "region":"ncsa",
                         "season":8,
                         "losses":12,
                         "createdTime":"2020-06-08T14:07:48.688821",
                         "maxRankString":"PLATINUM 2",
                         "rankString":"PLATINUM 2"
                      },
                      {
                         "maxMmr":3939,
                         "death":0,
                         "rank":18,
                         "maxRank":18,
                         "kills":0,
                         "abandons":0,
                         "mmr":3939,
                         "wins":14,
                         "region":"ncsa",
                         "season":9,
                         "losses":1,
                         "createdTime":"2020-06-08T14:07:49.181544",
                         "maxRankString":"GOLD 1",
                         "rankString":"GOLD 1"
                      },
                      {
                         "maxMmr":4000,
                         "death":0,
                         "rank":18,
                         "maxRank":18,
                         "kills":0,
                         "abandons":0,
                         "mmr":4000,
                         "wins":23,
                         "region":"ncsa",
                         "season":10,
                         "losses":6,
                         "createdTime":"2020-06-08T14:07:49.686369",
                         "maxRankString":"GOLD 1",
                         "rankString":"GOLD 1"
                      },
                      {
                         "maxMmr":4376,
                         "death":311,
                         "rank":20,
                         "maxRank":21,
                         "kills":320,
                         "abandons":0,
                         "mmr":3869,
                         "wins":41,
                         "region":"ncsa",
                         "season":16,
                         "losses":26,
                         "createdTime":"2020-06-08T14:07:52.883203",
                         "maxRankString":"PLATINUM 1",
                         "rankString":"PLATINUM 2"
                      },
                      {
                         "maxMmr":4413,
                         "death":2232,
                         "rank":20,
                         "maxRank":22,
                         "kills":2373,
                         "abandons":7,
                         "mmr":3862,
                         "wins":303,
                         "region":"ncsa",
                         "season":17,
                         "losses":206,
                         "createdTime":"2020-06-08T14:07:53.32884",
                         "maxRankString":"DIAMOND",
                         "rankString":"PLATINUM 2"
                      },
                      {
                         "maxMmr":6203,
                         "death":0,
                         "rank":20,
                         "maxRank":20,
                         "kills":0,
                         "abandons":0,
                         "mmr":6150,
                         "wins":92,
                         "region":"ncsa",
                         "season":6,
                         "losses":13,
                         "createdTime":"2020-06-08T14:07:47.764903",
                         "maxRankString":"PLATINUM 2",
                         "rankString":"PLATINUM 2"
                      },
                      {
                         "maxMmr":4664,
                         "death":0,
                         "rank":20,
                         "maxRank":20,
                         "kills":0,
                         "abandons":0,
                         "mmr":4664,
                         "wins":22,
                         "region":"ncsa",
                         "season":7,
                         "losses":0,
                         "createdTime":"2020-06-08T14:07:48.212276",
                         "maxRankString":"PLATINUM 2",
                         "rankString":"PLATINUM 2"
                      },
                      {
                         "maxMmr":4653,
                         "death":0,
                         "rank":20,
                         "maxRank":20,
                         "kills":0,
                         "abandons":0,
                         "mmr":4653,
                         "wins":44,
                         "region":"ncsa",
                         "season":8,
                         "losses":12,
                         "createdTime":"2020-06-08T14:07:48.688821",
                         "maxRankString":"PLATINUM 2",
                         "rankString":"PLATINUM 2"
                      },
                      {
                         "maxMmr":3939,
                         "death":0,
                         "rank":18,
                         "maxRank":18,
                         "kills":0,
                         "abandons":0,
                         "mmr":3939,
                         "wins":14,
                         "region":"ncsa",
                         "season":9,
                         "losses":1,
                         "createdTime":"2020-06-08T14:07:49.181544",
                         "maxRankString":"GOLD 1",
                         "rankString":"GOLD 1"
                      },
                      {
                         "maxMmr":4000,
                         "death":0,
                         "rank":18,
                         "maxRank":18,
                         "kills":0,
                         "abandons":0,
                         "mmr":4000,
                         "wins":23,
                         "region":"ncsa",
                         "season":10,
                         "losses":6,
                         "createdTime":"2020-06-08T14:07:49.686369",
                         "maxRankString":"GOLD 1",
                         "rankString":"GOLD 1"
                      },
                      {
                         "maxMmr":4376,
                         "death":311,
                         "rank":20,
                         "maxRank":21,
                         "kills":320,
                         "abandons":0,
                         "mmr":3869,
                         "wins":41,
                         "region":"ncsa",
                         "season":16,
                         "losses":26,
                         "createdTime":"2020-06-08T14:07:52.883203",
                         "maxRankString":"PLATINUM 1",
                         "rankString":"PLATINUM 2"
                      },
                      {
                         "maxMmr":4413,
                         "death":2232,
                         "rank":20,
                         "maxRank":22,
                         "kills":2373,
                         "abandons":7,
                         "mmr":3862,
                         "wins":303,
                         "region":"ncsa",
                         "season":17,
                         "losses":206,
                         "createdTime":"2020-06-08T14:07:53.32884",
                         "maxRankString":"DIAMOND",
                         "rankString":"PLATINUM 2"
                      }
                   ]
                },
                {
                   "region":"emea",
                   "rankStat":[
                      {
                         "maxMmr":6362,
                         "death":172,
                         "rank":23,
                         "maxRank":23,
                         "kills":252,
                         "abandons":1,
                         "mmr":5934,
                         "wins":66,
                         "region":"emea",
                         "season":17,
                         "losses":3,
                         "createdTime":"2020-06-08T14:07:45.055732",
                         "maxRankString":"CHAMPIONS",
                         "rankString":"CHAMPIONS"
                      }
                   ]
                },
                {
                   "region":"apac",
                   "rankStat":[
                      {
                         "maxMmr":6003,
                         "death":0,
                         "rank":20,
                         "maxRank":20,
                         "kills":0,
                         "abandons":1,
                         "mmr":6003,
                         "wins":77,
                         "region":"apac",
                         "season":6,
                         "losses":12,
                         "createdTime":"2020-06-08T14:07:31.945189",
                         "maxRankString":"PLATINUM 2",
                         "rankString":"PLATINUM 2"
                      },
                      {
                         "maxMmr":4720,
                         "death":0,
                         "rank":20,
                         "maxRank":20,
                         "kills":0,
                         "abandons":1,
                         "mmr":4720,
                         "wins":45,
                         "region":"apac",
                         "season":7,
                         "losses":11,
                         "createdTime":"2020-06-08T14:07:32.398731",
                         "maxRankString":"PLATINUM 2",
                         "rankString":"PLATINUM 2"
                      },
                      {
                         "maxMmr":5338,
                         "death":0,
                         "rank":20,
                         "maxRank":20,
                         "kills":0,
                         "abandons":0,
                         "mmr":5042,
                         "wins":61,
                         "region":"apac",
                         "season":8,
                         "losses":16,
                         "createdTime":"2020-06-08T14:07:32.907922",
                         "maxRankString":"PLATINUM 2",
                         "rankString":"PLATINUM 2"
                      },
                      {
                         "maxMmr":5739,
                         "death":0,
                         "rank":20,
                         "maxRank":20,
                         "kills":0,
                         "abandons":0,
                         "mmr":5679,
                         "wins":86,
                         "region":"apac",
                         "season":9,
                         "losses":21,
                         "createdTime":"2020-06-08T14:07:33.400441",
                         "maxRankString":"PLATINUM 2",
                         "rankString":"PLATINUM 2"
                      },
                      {
                         "maxMmr":5177,
                         "death":0,
                         "rank":20,
                         "maxRank":20,
                         "kills":0,
                         "abandons":0,
                         "mmr":5054,
                         "wins":58,
                         "region":"apac",
                         "season":10,
                         "losses":17,
                         "createdTime":"2020-06-08T14:07:33.829596",
                         "maxRankString":"PLATINUM 2",
                         "rankString":"PLATINUM 2"
                      },
                      {
                         "maxMmr":4632,
                         "death":0,
                         "rank":20,
                         "maxRank":20,
                         "kills":0,
                         "abandons":0,
                         "mmr":4632,
                         "wins":45,
                         "region":"apac",
                         "season":11,
                         "losses":9,
                         "createdTime":"2020-06-08T14:07:34.308958",
                         "maxRankString":"PLATINUM 2",
                         "rankString":"PLATINUM 2"
                      },
                      {
                         "maxMmr":4934,
                         "death":0,
                         "rank":20,
                         "maxRank":20,
                         "kills":0,
                         "abandons":0,
                         "mmr":4934,
                         "wins":51,
                         "region":"apac",
                         "season":12,
                         "losses":14,
                         "createdTime":"2020-06-08T14:07:34.757977",
                         "maxRankString":"PLATINUM 2",
                         "rankString":"PLATINUM 2"
                      },
                      {
                         "maxMmr":4561,
                         "death":0,
                         "rank":19,
                         "maxRank":20,
                         "kills":0,
                         "abandons":0,
                         "mmr":4406,
                         "wins":49,
                         "region":"apac",
                         "season":13,
                         "losses":18,
                         "createdTime":"2020-06-08T14:07:35.200988",
                         "maxRankString":"PLATINUM 2",
                         "rankString":"PLATINUM 3"
                      },
                      {
                         "maxMmr":3164,
                         "death":89,
                         "rank":18,
                         "maxRank":18,
                         "kills":140,
                         "abandons":0,
                         "mmr":3095,
                         "wins":15,
                         "region":"apac",
                         "season":17,
                         "losses":8,
                         "createdTime":"2020-06-08T14:07:37.06513",
                         "maxRankString":"GOLD 1",
                         "rankString":"GOLD 1"
                      }
                   ]
                }
             ]
        },
        loading: false})
           
    }

    

  

    render(){
        if (this.state.loading) {
            return <R6Spinner presentationStyle="full"></R6Spinner>
        } else {

            const tabContent = this.tabContentsHandler(this.state.current);

            return(
                <div className="container">
                    <Profile></Profile>
                    <Menu mode="horizontal" selectedKeys={[this.state.current]} onClick={this.handleClick}>
                    <Menu.Item key="overview">
                    Overview
                    </Menu.Item>
                    <Menu.Item key="seasons">
                    Seasons
                    </Menu.Item>
                    <Menu.Item key="operators">
                    Operators
                    </Menu.Item>
                </Menu>
                {tabContent}
                </div>
            )
        }
        
    }
}

