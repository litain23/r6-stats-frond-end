import React from 'react';
import '../../App.css'
import './search.css'

import { BasicErrorFormat, APIObservable } from '../../util/API'
// import R6Spinner from '../../R6Components/R6Spinner'
import {PVPAPI, GENERALAPI, OPERATORAPI, SEASONAPI, RANKBYREGION, getErrorMessage, PROFILEAPI} from '../../util/type'
import Profile from './Profile';
import SearchOverviewTab from './Overview';
import SearchSeasonsTab from './Seasons';
import SearchOperators from './Operators';

import { Menu, Empty } from 'antd';
import { withRouter, RouteComponentProps, Switch, Route } from 'react-router-dom';
import { forkJoin  } from 'rxjs';
import { flatMap, retry } from 'rxjs/operators';
import R6LottieLoader from '../../R6Components/R6LottieLoader';

interface State {
    currentRankData : RANKBYREGION[],
    allRankData: SEASONAPI[],
    generalData : GENERALAPI,
    casualPvpData: PVPAPI,
    rankPvpData: PVPAPI,
    profileData: PROFILEAPI,
    operators: OPERATORAPI[],
    loading: boolean,
    current:string,
    success:boolean,
}

interface Props extends RouteComponentProps {
}

/**
 * TO-DO : loading View.
 * TO-DO : if it is not filled => show that? => loading? how? 
 */

class Search extends React.Component<Props, State> {

    private username?:string | null = null;
    private platform?:string | null = null;
    private currentPage:string = "overview";
    private unlisten?:any;

    constructor(props: Props){
        super(props);
        this.state = {
            currentRankData: [] as RANKBYREGION[],
			generalData: {} as GENERALAPI,
			allRankData: [] as SEASONAPI[],
            casualPvpData: {} as PVPAPI,
            operators: {} as OPERATORAPI[],
            rankPvpData: {} as PVPAPI,
            profileData: {} as PROFILEAPI,
            loading:true,
            current: 'overview',
            success:false
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e:any) {

        // 바뀌지않은경우 반응하지않음.
        if (this.currentPage === e.key) {
            return;
        }

        this.setState({
            current: e.key,
        }, () => {
            this.props.history.push(`/search/${this.state.current}/query?platform=${this.platform}&username=${this.username}`)
        });
    }

    updateFromAPI(){

        const params = new URLSearchParams(this.props.history.location.search);

        //만약 path에 search가 안들어간경우. 위에 네비바에서 히스토리 조작 거르기 위함.
        if (!this.props.history.location.pathname.includes("/search")){
            return;
        } 

        
        /**
         * 엣지케이스 URL Search Params가 안될경우
         * 그래도 재시도해보고싶을경우 piliot => piliot // 쿼리가 안바뀌고, 서치 페이지만 바뀔경우. return 
         */

        // 1. 기존쿼리는 그대로 유지하면서
        // 2. 탭만바뀐경우
        if ( this.username === params.get('username') && this.platform === params.get('platform')) {
            if (this.currentPage !== this.state.current ) {
                this.currentPage = this.state.current;
                return
            } 
        }

        // 1. 기존쿼리는 그대로 유지하는데
        // 2. 탭이안바뀐경우 (이럴경우는 검색 재시도의 목적이 있으므로, 그대로 통과한다.)

        this.username = params.get('username')
        this.platform = params.get('platform')

        this.setState({loading: true})

        if (this.username && this.platform) {

            APIObservable<PROFILEAPI>(`profile/${this.platform}/${this.username}`)
                .pipe(
                    flatMap(
                        (value) => {
                            this.setState({profileData: value})
                            return forkJoin(
                                APIObservable<PVPAPI>(`rankpvp/${this.platform}/${this.username}`),
                                APIObservable<PVPAPI>(`casualpvp/${this.platform}/${this.username}`),
                                APIObservable<RANKBYREGION[]>(`rank/${this.platform}/${this.username}`),
                                APIObservable<GENERALAPI>(`generalpvp/${this.platform}/${this.username}`),
                                APIObservable<SEASONAPI[]>(`rank/${this.platform}/${this.username}/all`),
                                APIObservable<OPERATORAPI[]>(`operator/${this.platform}/${this.username}`),
                            )
                        }
                    )
                ).pipe(
                    retry(1)
                ).subscribe(
                    res => {
                        this.setState({
                            rankPvpData : res[0],
                            casualPvpData: res[1],
                            currentRankData : res[2],
                            generalData : res[3],
                            allRankData : res[4],
                            operators: res[5],
                            success:true,
                            loading:false
                        })
                    },
                    err => {
                        let message = err as BasicErrorFormat;
                        alert(getErrorMessage(message.status))
                        this.setState({loading: false, success:false})
                    }
                )

            } else {
                alert(getErrorMessage(400));
                this.setState({loading: false, success:false})
            }
    }
    
    async componentDidMount(){


        //1. search/...? 로 안들어온경우 => 메인 라우터에서 404로 보냄.
        //2. search/...? 로 들어왔으나 내부 쿼리문법대로 안들어온경우
        // search / tab 이름 / query? username & platform
        if (
            this.props.history.location.pathname.split('/').length === 4 &&
            this.props.history.location.pathname.split('/')[3] === "query"
        ) { 

            // 쿼리문법 체크 통과! 
            this.setState({current: this.props.history.location.pathname.split('/')[2]}, () => {
                this.currentPage = this.state.current;
                this.updateFromAPI();
            })

            this.unlisten = this.props.history.listen( (location, action) => {
                this.updateFromAPI()
            })

        } else {
            this.props.history.push('/404');
            // 쿼리 문법 체크 비통과! 404 귀양.
        }

        //3 내부 쿼리문법대로 들어온경우
        // 1. 탭 바꿔주기.
        // 2. 리스너 등록시키기.
        // 3. API요청하기.

    }

    componentWillUnmount(){

        if(this.unlisten) {
            this.unlisten();
        }
    }

    render(){
        


        if (this.state.loading) {
            return (
              <div className="center-container-fixed">
                    <R6LottieLoader 
                        path={"https://assets9.lottiefiles.com/packages/lf20_9p6Smt.json"} 
                        width={100}
                        height={100}
                        speed={2}
                    />
                </div>
            )

        } else if (!this.state.loading && !this.state.success) {
            return (
                <Empty
                    imageStyle={{
                    height: 500,
                    }}
                    description={
                    <span>
                        {getErrorMessage(400)}
                    </span>
                    }
                >
              </Empty>
            
            )
        } else {


            return(
                <>
                <div className="search-page-container">
                    <div className="menu">
                        <Profile profileID={this.state.profileData} username={this.username!} currentRankData={this.state.currentRankData}></Profile>
                        <Menu mode="horizontal" selectedKeys={[this.state.current]} onClick={this.handleClick}>
                            <Menu.Item key="overview">
                            OVERVIEW
                            </Menu.Item>
                            <Menu.Item key="seasons">
                            ALL SEASONS
                            </Menu.Item>
                            <Menu.Item key="operators">
                            OPERATORS
                            </Menu.Item>
                        </Menu>
                    </div>
                    <Switch>
                        <Route path="/search/overview/:searchTerm">
                            <SearchOverviewTab 
                                generalData={this.state.generalData}
                                allRankStat={this.state.allRankData}
                                casualPvpData={this.state.casualPvpData}
                                rankPvpData={this.state.rankPvpData}
                            />
                        </Route>
                        <Route path="/search/seasons/:searchTerm">
                            <SearchSeasonsTab seasons={this.state.allRankData}></SearchSeasonsTab>
                        </Route>
                        <Route path="/search/operators/:searchTerm">
                            <SearchOperators operators={this.state.operators}></SearchOperators>
                        </Route>
                    </Switch>
                    {/* {tabContent} */}
                </div>
                </>
            )
		}
    }
}


export default withRouter(Search);