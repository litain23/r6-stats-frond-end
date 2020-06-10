import React from 'react';
import '../../../App.css'

import { PVPAPI }  from '../../../util/type'

import { Col, Row, Card, Statistic } from 'antd';

interface Props {
    casualData : PVPAPI
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
                                value={this.props.casualData.kills}
                            />
                        </Card>
                    </Col>
                    <Col span={3}>
                        <Card>
                            <Statistic
                                title="death"
                                value={this.props.casualData.death}
                            />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col span={3}>
                        <Card>
                            <Statistic
                                title="matchWon"
                                value={this.props.casualData.matchWon}
                            />
                        </Card>
                    </Col>
                    <Col span={3}>
                        <Card>
                            <Statistic
                                title="matchLost"
                                value={this.props.casualData.matchLost}
                            />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col span={3}>
                        <Card>
                            <Statistic
                                title="Kill"
                                value={this.props.casualData.matchPlayed}
                            />
                        </Card>
                    </Col>
                    <Col span={3}>
                        <Card>
                            <Statistic
                                title="Kill"
                                value={this.props.casualData.timePlayed}
                            />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col span={3}>
                        <Card>
                            <Statistic
                                title="Kill"
                                value={this.props.casualData.matchPlayed}
                            />
                        </Card>
                    </Col>
                    <Col span={3}>
                        <Card>
                            <Statistic
                                title="Kill"
                                value={this.props.casualData.timePlayed}
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}