import React from 'react'
import { Tab, Nav, Col, Card, Row } from 'react-bootstrap';
import Text from '../UI/Text';
import ActivityStatsBox from './ActivityStatsBox';
import '../../assets/scss/components/Dashboard/UserActivity.scss'
import '../../assets/scss/components/Dashboard/CtPills.scss'
import MixedChart from '../Charts/MixedChart';

const UserActivity = () => {
    return (
        <>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                <Card className='user-active-box'>
                    <Tab.Container id="right-tabs-example" defaultActiveKey="week">
                        <div className="d-flex justify-content-between flex-wrap align-items-center">
                            <Text as='h4'>User Activity</Text>
                            <Nav variant="pills" className="ct-pills">
                                <Nav.Item>
                                    <Nav.Link eventKey="week">Weekly</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="month">Monthly</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="year">Yearly</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <Tab.Content>
                            <Tab.Pane eventKey="week">
                                <Row className='gx-md-5'>
                                    <ActivityStatsBox />
                                </Row>
                                <MixedChart />
                            </Tab.Pane>
                            <Tab.Pane eventKey="month">
                                <Row className='gx-md-5'>
                                    <ActivityStatsBox />
                                </Row>
                                <MixedChart />
                            </Tab.Pane>
                            <Tab.Pane eventKey="year">
                                <Row className='gx-md-5'>
                                    <ActivityStatsBox />
                                </Row>
                                <MixedChart />
                            </Tab.Pane>
                        <Text className='btm-text'>Active User over time</Text>
                        </Tab.Content>
                    </Tab.Container>
                </Card>
            </Col>
        </>
    )
}

export default UserActivity