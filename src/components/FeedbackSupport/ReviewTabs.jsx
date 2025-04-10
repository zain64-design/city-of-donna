import React, { useState } from 'react'
import { Row, Col, Tab, Tabs } from 'react-bootstrap'
import ReviewCard from './ReviewCard';
import '../../assets/scss/components/FeedbackSupport/ReviewTabs.scss'
import Text from '../UI/Text';

const ReviewTabs = () => {
    const [key, setKey] = useState('rv-tab-1');
    return (
        <>
            <div className="review-tab-area">
                <Text as='h4'>Sort By</Text>
                <Tabs
                className='ct-review'
                    id="controlled"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                >
                    <Tab eventKey="rv-tab-1" title="Most Relevant">
                        <div className="review-item-area">
                            <Row>
                                {Array.from({ length: 8 })?.map((_, index) => {
                                    return (
                                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} key={index}>
                                            <ReviewCard />
                                        </Col>
                                    )
                                })}
                            </Row>
                        </div>
                    </Tab>
                    <Tab eventKey="rv-tab-2" title="Highest">
                        <div className="review-item-area">
                            <Row>
                                {Array.from({ length: 8 })?.map((_, index) => {
                                    return (
                                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} key={index}>
                                            <ReviewCard />
                                        </Col>
                                    )
                                })}
                            </Row>
                        </div>
                    </Tab>
                    <Tab eventKey="rv-tab-3" title="Lowest">
                        <div className="review-item-area">
                            <Row>
                                {Array.from({ length: 8 })?.map((_, index) => {
                                    return (
                                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} key={index}>
                                            <ReviewCard />
                                        </Col>
                                    )
                                })}
                            </Row>
                        </div>
                    </Tab>
                    <Tab eventKey="rv-tab-4" title="Newest">
                        <div className="review-item-area">
                            <Row>
                                {Array.from({ length: 8 })?.map((_, index) => {
                                    return (
                                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} key={index}>
                                            <ReviewCard />
                                        </Col>
                                    )
                                })}
                            </Row>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}

export default ReviewTabs