import React from 'react';
import '../../App.css'
import {RANKAPI, GENERALAPI} from '../../util/type'
import R6TypoComponent from '../../R6Components/R6TypoComponent';
import R6Card from '../../R6Components/R6Card';
import { Table, Space, Divider, Row } from 'antd';
import { ColumnType } from 'antd/lib/table/interface'
import {API} from '../../util/API';
import { Statistic , Typography} from 'antd';
import R6Icon from '../../R6Components/R6Icon';
import { Progress, Col } from 'antd';
import { Menu , Layout} from 'antd';
import { AppstoreOutlined, TeamOutlined, TrophyOutlined } from '@ant-design/icons';
import { UserOutlined, IdcardOutlined, AreaChartOutlined } from '@ant-design/icons';
import R6RankIcon from '../../R6Components/R6RankIcon';

const { Title , Paragraph , Text} = Typography

interface Props {
    generalData : GENERALAPI
}


export default class SearchOverviewTab extends React.Component<Props> {
    
    render(){
        let timePlayed = this.props.generalData.timePlayed
        let tmePlayedInHour = Math.round(this.props.generalData.timePlayed)

        let matches = this.props.generalData.matchPlayed

        let win = this.props.generalData.matchWon
        let lose = matches - win

        let winPercentage = Math.round((win/matches)*100) 
        let losePerecentage = Math.round((lose/matches)*100)
        
        let kills = this.props.generalData.kills;
        let death = this.props.generalData.death;
        let killassist = this.props.generalData.killAssists

        let killdeathPercentage = Math.round((kills/this.props.generalData.death)*100)
        let killDeathAssistPercentage = Math.round((kills+killassist)/death*100);

        let penetrationkill = this.props.generalData.penetrationKills
        let meleekill = this.props.generalData.meleeKills
        let headshotkill = this.props.generalData.headShot
        let revive = this.props.generalData.revive

        let bullithit = this.props.generalData.bulletHit
    
        //advnnced

        
        //매치당 킬.
        let killperMatches = Math.round(kills/matches*100)
        //분당 킬.
        let killperMin = Math.round(kills/timePlayed*100)
        //헤드샷 률.
        let headshotPerecntage = Math.round(headshotkill/kills*100)



        return(

            <>
            <Title> 전체 데이터 </Title>
            <Row gutter={[24, 24]} style={{textAlign:'center'}} justify={"space-between"} align="middle">
                <Col span={6}>
                    <Statistic title="Account Balance (CNY)" value={timePlayed} precision={2} />
                </Col>
                <Col span={6}>
                    <Statistic title="Account Balance (CNY)" value={tmePlayedInHour} precision={2} />
                </Col>
                <Col span={6}>
                    <Statistic title="Account Balance (CNY)" value={matches} precision={2} />
                </Col>
                <Col span={6}>
                    <Statistic title="Account Balance (CNY)" value={win} precision={2} />
                </Col>
            </Row>
            <Row gutter={[24, 24]} style={{textAlign:'center'}} justify={"end"} align="middle">
                <Col span={6}>
                    <Statistic title="Account Balance (CNY)" value={lose} precision={2} />
                </Col>
                <Col span={6}>
                    <Statistic title="Account Balance (CNY)" value={kills} precision={2} />
                </Col>
                <Col span={6}>
                    <Statistic title="Account Balance (CNY)" value={death} precision={2} />
                </Col>
                <Col span={6}>
                    <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                </Col>
            </Row>
            <Row gutter={24} style={{textAlign:'center'}} justify="center" align="middle">
                <Col span={6}>
                    <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                </Col>
                <Col span={6}>
                    <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                </Col>
                <Col span={6}>
                    <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                </Col>
                <Col span={6}>
                    <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                </Col>
            </Row>

            </>
                
        )
    }
}


