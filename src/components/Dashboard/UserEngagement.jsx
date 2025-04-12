import React from 'react'
import { Tab, Nav, Col, Card, Row } from 'react-bootstrap';
import Text from '../UI/Text';
import '../../assets/scss/components/Dashboard/UserEngagement.scss'
import EngageBox from './EngageBox';
import BarChart from '../Charts/BarChart';

const UserEngagement = () => {
    return (
        <>
            <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                <Card className='user-engage-box'>
                    <Tab.Container id="right-tabs-example" defaultActiveKey="week">
                        <div className="d-flex justify-content-between flex-wrap align-items-center">
                            <Text as='h4'>User Engagement Graph</Text>
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
                        <Tab.Content className='mt-4'>
                            <Tab.Pane eventKey="week">
                                <Row className='align-items-end'>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={3}>
                                        <EngageBox />
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={8} xxl={9}>
                                        <BarChart />
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="month">
                                <Row className='align-items-end'>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={3} xxl={3}>
                                        <EngageBox />
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={9} xxl={9}>
                                        <BarChart />
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="year">
                                <Row className='align-items-end'>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={3} xxl={3}>
                                        <EngageBox />
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={9} xxl={9}>
                                        <BarChart />
                                    </Col>
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Card>
            </Col>
        </>
    )
}

export default UserEngagement