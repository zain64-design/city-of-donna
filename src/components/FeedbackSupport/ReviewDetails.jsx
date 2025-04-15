import React from 'react'
import { Col, ProgressBar, Row } from 'react-bootstrap'
import { FaStar } from "react-icons/fa6";
import Text from '../UI/Text'
import '../../assets/scss/components/FeedbackSupport/ReviewDetails.scss'

const ReviewDetails = () => {
    const ratingsData = [
        { rating: 5, percentage: 80, color: '#4AA54A' },
        { rating: 4, percentage: 60, color: '#A5D631' },
        { rating: 3, percentage: 40, color: '#F7D732' },
        { rating: 2, percentage: 20, color: '#F7AB32' },
        { rating: 1, percentage: 10, color: '#EF3A10' },
      ];
    return (
        <>
            <div className="review-content">
                <Row className="align-items-center gap-2 gap-sm-3 gap-md-4 gap-lg-4 gap-xl-5 gap-xxl-5">
                    <Col xs='auto'>
                        <div className="review-title">
                            <Text as='h2'>User Reviews</Text>
                            <div className="rating-info">
                                <Text as='span' className="rating-number">4.0</Text>
                                <div className="rating-stars">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                            <Text className="review-count">Based on 223 reviews</Text>
                        </div>
                    </Col>

                    <Col xs='auto'>
                        <div className="rating-info-text">
                            <div className="rating-bars">
                                {ratingsData?.map((value, index) => {
                                    const {rating,percentage,color} = value;
                                    return (
                                        <div className="rating-row" key={index}>
                                        <Text as='span'>{rating}</Text>
                                        <div className="progress-area">
                                            <ProgressBar>
                                            <ProgressBar 
                                            now={percentage} 
                                            // label={`${percentage}%`}
                                            style={{ backgroundColor: color }} />
                                            </ProgressBar>
                                        </div>
                                    </div>
                                    )
                                })}
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default ReviewDetails