import React from 'react';
import '../../App.css'
import './search.css'

import { API } from '../../util/API'
import R6Spinner from '../../R6Components/R6Spinner'
import {PVPAPI, GENERALAPI, RANKREGIONSTATAPI, OPERATORAPI} from '../../util/type'
import Profile from './Profile';
import SearchOverviewTab from './Overview';
import SearchSeasonsTab from './Seasons';
import SearchOperators from './Operators';

import { Menu } from 'antd';

interface State {
    currentRankData : RANKREGIONSTATAPI[]
    allRankData: RANKREGIONSTATAPI[]
    generalData : GENERALAPI
    operators: OPERATORAPI[]
    casualPvpData: PVPAPI
    rankPvpData: PVPAPI


    loading: boolean
    currentTab: number
	current:string
}

interface Props {
}

export default class Search extends React.Component<Props, State> {
      constructor(props: Props){
        super(props);
        this.state = {
            currentRankData: [] as RANKREGIONSTATAPI[],
			generalData: {} as GENERALAPI,
			allRankData: [] as unknown as RANKREGIONSTATAPI[],
            operators: [] as OPERATORAPI[],
            casualPvpData: {} as PVPAPI,
            rankPvpData: {} as PVPAPI,
            loading:true,
            currentTab:1,
            current: 'overview',
        }

        this.handleClick = this.handleClick.bind(this);
        
    }

    handleClick(e:any) {
        this.setState({
            current: e.key,
          });
    }

    tabContentsHandler(key: string): React.ReactNode {
        switch(key){
            case 'overview':
                return(
                    <SearchOverviewTab 
                        generalData={this.state.generalData}
                        allRankStat={this.state.allRankData}
                        casualPvpData={this.state.casualPvpData}
                        rankPvpData={this.state.rankPvpData}
                    />);
            case 'seasons':
                return(<SearchSeasonsTab seasons={this.state.allRankData}></SearchSeasonsTab>);
            case 'operators':
                return(<SearchOperators operators={this.state.operators}></SearchOperators>);
        } 

    }
    
    async componentDidMount(){
        const generalAPIs = await API<GENERALAPI>("generalpvp/uplay/piliot");
		const rankAPIs = await API<RANKREGIONSTATAPI[]>("rank/uplay/piliot");
		const allRankAPIs = await API<RANKREGIONSTATAPI[]>("rank/uplay/piliot/all");
        const operatorAPIs = await API<OPERATORAPI[]>("operator/uplay/piliot/");
		const rankPvpAPIs = await API<PVPAPI>("rankpvp/uplay/piliot");
		const casualPvpAPIs = await API<PVPAPI>("casualpvp/uplay/piliot");
		this.setState({generalData: generalAPIs});
		this.setState({currentRankData: rankAPIs});
		this.setState({allRankData: allRankAPIs});
        this.setState({operators: operatorAPIs});
        this.setState({rankPvpData: rankPvpAPIs});
        this.setState({casualPvpData: casualPvpAPIs});
        this.setState({loading: false});
    }
    render(){
        if (this.state.loading) {
            return <R6Spinner presentationStyle="full"></R6Spinner>
        } else {
            const tabContent = this.tabContentsHandler(this.state.current);
            return(
                <>
                <div className="search-page-container">
                    <div className="menu">
                        <Profile currentRankData={this.state.currentRankData}></Profile>
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
                    </div>
                    {tabContent}
                </div>
                </>
            )
		}
    }
}

