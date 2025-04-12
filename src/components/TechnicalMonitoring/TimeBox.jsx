import React, { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import CtSelect from '../UI/CtSelect'
import '../../assets/scss/components/TechnicalMonitoring/TimeBox.scss'
import Text from '../UI/Text'
import Image from '../UI/Image'
import barChart from '/images/chart/bar-chart.png'

const TimeBox = () => {
    const [selectedValue1, setSelectedValue1] = useState('');
    const options1 = [
        { value: 'this month', label: 'This Month' },
        { value: 'prev month', label: 'Prev Month' }
    ];
    return (
        <>
            <Row>
                <Col xs={12} sm={6} md={8} lg={8} xl={8} xxl={9} className='mb-3'>
                    <Card className='time-box'>
                        <div className="tp-area">
                            <Text as='h6'>Uptime</Text>
                            <CtSelect
                                ctClass='ct-drp'
                                options={options1}
                                selectedValue={selectedValue1}
                                onValueChange={(value) => setSelectedValue1(value)}
                                placeholder="This Month"
                            />
                        </div>
                        <div className="chart-area">
                            <figure>
                                <Image src={barChart} alt='chart-img' className='bar-img' />
                            </figure>
                        </div>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4} lg={4} xl={4} xxl={3} className='mb-3'>
                    <Card className='time-box'>
                        <div className="tp-area">
                            <Text as='h5'>Downtime</Text>
                        </div>
                        <Text as='ul' className="time-area">
                            <Text as='li'>
                                <Text as='h5'>3 Hours 47 Minutes</Text>
                                <Text as='span'>With 2 outages</Text>
                            </Text>
                            <Text as='li'>
                                <Text as='h5'>Latest Downtime</Text>
                                <Text as='span'>Jan 21, 2025, 3:18 A.M</Text>
                            </Text>
                        </Text>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default TimeBox