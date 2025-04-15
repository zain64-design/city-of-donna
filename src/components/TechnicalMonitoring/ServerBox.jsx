import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Image from '../UI/Image'
import meter1 from '/images/chart/odometer1.png'
import meter2 from '/images/chart/odometer2.png'
import Text from '../UI/Text'
import '../../assets/scss/components/TechnicalMonitoring/ServerBox.scss'


const ServerBox = () => {

    return (
        <>
            <Row className='gx-3 mt-5'>
                <Col xs={12} sm={6} md={4} lg={3} xl={3} xxl={3} className='mb-3'>
                    <Card className="server-box">
                        <div className="tp-area">
                            <Text as='h6'>Current Status</Text>
                            <Text as='h5'>UP <Text as='small'>For 7 days, 3 hours</Text></Text>
                        </div>
                        <div className="btm-area">
                            <Text as='span'>UP Percentage</Text>
                            <Text as='h4'>99.47%</Text>
                        </div>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} xl={3} xxl={3} className='mb-3'>
                    <Card className="server-box">
                        <div className="tp-area">
                            <Text as='h6'>CPU Usage</Text>
                        </div>
                        <div className="chart-area">
                            <figure>
                                <Image src={meter1} alt='chart' className='odometer-img'/>
                            </figure>
                        </div>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} xl={3} xxl={3} className='mb-3'>
                    <Card className="server-box">
                        <div className="tp-area">
                            <Text as='h6'>Memory Usage</Text>
                        </div>
                        <div className="chart-area">
                            <figure>
                                <Image src={meter2} alt='chart' className='odometer-img'/>
                            </figure>
                        </div>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} xl={3} xxl={3} className='mb-3'>
                    <Card className="server-box">
                        <div className="tp-area">
                            <Text as='h6'>Disk Usage</Text>
                        </div>
                        <div className="chart-area">
                            <figure>
                                <Image src={meter1} alt='chart' className='odometer-img'/>
                            </figure>
                        </div>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ServerBox