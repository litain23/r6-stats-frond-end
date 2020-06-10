import React from 'react';
import '../../../App.css'

import { GENERALAPI}  from '../../../util/type'

import { Col, Row, Card, Statistic } from 'antd';

interface Props {
    generalData : GENERALAPI
}

export default class OverviewGeneralCard extends React.Component<Props> {
    constructor(props: Props){
        super(props);
    }

    render() {
        return (
            <div>
                <Row gutter={[16, 16]}>
                    <Col span={3}>
                        <Card>
                            <Statistic
                                title="Kill"
                                value={this.props.generalData.kills}
                            />
                        </Card>
                    </Col>
                    <Col span={3}>
                        <Card>
                            <Statistic
                                title="death"
                                value={this.props.generalData.death}
                            />
                        </Card>
                    </Col>
                    <Col span={3}>
                        <Card>
                            <Statistic
                                title="headShot"
                                value={this.props.generalData.headShot}
                            />
                        </Card>
                    </Col>
                    <Col span={3}>
                        <Card>
                            <Statistic
                                title="penetrationKills"
                                value={this.props.generalData.penetrationKills}
                            />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col span={3}>
                        <Card>
                            <Statistic
                                title="matchWon"
                                value={this.props.generalData.matchWon}
                            />
                        </Card>
                    </Col>
                    <Col span={3}>
                        <Card>
                            <Statistic
                                title="matchLost"
                                value={this.props.generalData.matchLost}
                            />
                        </Card>
                    </Col>
                    <Col span={3}>
                        <Card>
                            <Statistic
                                title="matchPlayed"
                                value={this.props.generalData.matchPlayed}
                            />
                        </Card>
                    </Col>
                    <Col span={3}>
                        <Card>
                            <Statistic
                                title="timePlayed"
                                value={this.props.generalData.timePlayed}
                            />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col span={3}>
                        <Card>
                            <Statistic
                                title="Kill"
                                value={this.props.generalData.kills}
                            />
                        </Card>
                    </Col>
                    <Col span={3}>
                        <Card>
                            <Statistic
                                title="Kill"
                                value={this.props.generalData.kills}
                            />
                        </Card>
                    </Col>
                    <Col span={3}>
                        <Card>
                            <Statistic
                                title="Kill"
                                value={this.props.generalData.kills}
                            />
                        </Card>
                    </Col>
                    <Col span={3}>
                        <Card>
                            <Statistic
                                title="Kill"
                                value={this.props.generalData.kills}
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}