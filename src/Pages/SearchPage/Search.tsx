import React from 'react';
import '../../App.css'
import './search.css'

import { API, APISTREAM } from '../../util/API'
import R6Spinner from '../../R6Components/R6Spinner'
import {PVPAPI, GENERALAPI, OPERATORAPI, SEASONAPI, RANKBYREGION} from '../../util/type'
import Profile from './Profile';
import SearchOverviewTab from './Overview';
import SearchSeasonsTab from './Seasons';
import SearchOperators from './Operators';

import { Menu } from 'antd';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface State {
    currentRankData : RANKBYREGION[],
    allRankData: SEASONAPI[],
    generalData : GENERALAPI,
    operators: OPERATORAPI[],
    casualPvpData: PVPAPI,
    rankPvpData: PVPAPI,
    loading: boolean,
    currentTab: number,
	current:string,
}

interface Props extends RouteComponentProps {
}

/**
 * TO-DO : loading View.
 * TO-DO : if it is not filled => show that? => loading? how? 
 */

class Search extends React.Component<Props, State> {
      constructor(props: Props){
        super(props);
        this.state = {
            currentRankData: [] as RANKBYREGION[],
			generalData: {} as GENERALAPI,
			allRankData: [] as SEASONAPI[],
            operators: [] as OPERATORAPI[],
            casualPvpData: {} as PVPAPI,
            rankPvpData: {} as PVPAPI,
            loading:true,
            currentTab:1,
            current: 'overview',
        }

        this.handleClick = this.handleClick.bind(this)
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
                return(<SearchOperators></SearchOperators>);
        } 

    }
    
    async componentDidMount(){


        // 테스트 중 -  APISTREAM
        APISTREAM.stream()
        .request("rankpvp/uplay/piliot")
        .do<PVPAPI>( value => {
            this.setState( {rankPvpData: value} )
        })
        .request("casualpvp/uplay/piliot")
        .do<PVPAPI>( value => {
            this.setState( {casualPvpData : value})
        })
        .request("rank/uplay/piliot")
        .do<RANKBYREGION[]>( value => {
            this.setState( {currentRankData : value})
        })
        .request("generalpvp/uplay/piliot")
        .do<GENERALAPI>( value => {
            this.setState( {generalData : value})
        })
        .request("rank/uplay/piliot/all")
        .do<SEASONAPI[]>( value => {
            this.setState( {allRankData : value})
            this.setState( {loading: false} )
        })
        .catch( (errorInfo, failedURL) => {
            console.log("에러발생")
            console.log(errorInfo)
            console.log(failedURL);
        })

        /** 기존코드 : 소스비교를 위해 나둡니다. */

        // 초반 성능 향상을 위해 따로따로 요청하는것으로 합니다.
        // const operatorAPIs = await API<OPERATORAPI[]>("operator/uplay/piliot/");
        // const generalAPIs = await API<GENERALAPI>("generalpvp/uplay/piliot");
        // const [rankPvpAPIs, rankpvpError] = await API<PVPAPI>("rankpvp/uplay/piliot");
        // const [casualPvpAPIs, casuapvpError] = await API<PVPAPI>("casualpvp/uplay/piliot");
        // const [rankAPIs, rankapiError]= await API<RANKBYREGION[]>("rank/uplay/piliot");
        // const [generalAPIs, generalapiError] = await API<GENERALAPI>("generalpvp/uplay/piliot");
        // const [allRankAPIs, allrankapiError] = await API<SEASONAPI[]>("rank/uplay/piliot/all");
        // if (rankpvpError || casuapvpError || rankapiError || generalapiError || allrankapiError) {
        //     alert("Error : 연결에 에러가 있습니다")
        //     this.props.history.goBack();
        // } else {
        //     this.setState({generalData: generalAPIs!});
        //     this.setState({currentRankData: rankAPIs!});
        //     this.setState({rankPvpData: rankPvpAPIs!});
        //     this.setState({casualPvpData: casualPvpAPIs!});
        //     this.setState({allRankData : allRankAPIs!})
        //     this.setState({loading: false});
        // }
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


export default withRouter(Search);