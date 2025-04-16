import React from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'
import reviewerImg from '/images/users/reviewer.png';
import Image from '../UI/Image';
import '../../assets/scss/components/FeedbackSupport/ReviewCard.scss'
import Text from '../UI/Text';
import Ratings from '../UI/Ratings';
import CustomBtn from '../UI/CustomBtn'
import { Link, useLocation } from 'react-router';

const ReviewCard = () => {

    const location = useLocation();

    const mainHeadRoute = ['/feedback-support/respond']
    const isReviewRoute = mainHeadRoute.includes(location.pathname);

    const RespIcn = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <g clipPath="url(#clip0_44_2747)">
                <path d="M20.5465 6.95178C20.0757 6.48067 19.3273 6.45107 18.8212 6.86344C18.7481 6.92308 18.8047 6.87053 17.6904 7.98484L20.5829 10.8774L21.6225 9.8508C22.1251 9.34819 22.1251 8.53041 21.6225 8.02776L20.5465 6.95178Z" fill="white" />
                <path d="M11.759 13.9712L10.0575 17.6173C9.94295 17.8629 9.99421 18.154 10.1859 18.3456C10.3775 18.5373 10.6687 18.5885 10.9142 18.4739L14.5602 16.7724C14.7045 16.7051 14.2678 17.1138 19.6659 11.7831L16.7791 8.8963C11.427 14.2484 11.8277 13.8241 11.759 13.9712Z" fill="white" />
                <path d="M15.646 17.5644C15.4881 17.7202 15.3062 17.8468 15.1052 17.9406L11.4591 19.6421C10.7421 19.9767 9.86623 19.8493 9.27425 19.2572C8.70143 18.6844 8.5467 17.8063 8.88925 17.0722L10.5908 13.426C10.6863 13.2213 10.8158 13.0364 10.9756 12.8766L16.457 7.39518V1.93359C16.457 0.86741 15.5896 0 14.5234 0H1.93359C0.86741 0 0 0.86741 0 1.93359V20.0664C0 21.1326 0.86741 22 1.93359 22H14.5234C15.5896 22 16.457 21.1326 16.457 20.0664V16.7634L15.646 17.5644ZM3.43754 4.16797H13.0625C13.4185 4.16797 13.7071 4.45655 13.7071 4.8125C13.7071 5.16845 13.4185 5.45703 13.0625 5.45703H3.43754C3.08159 5.45703 2.79301 5.16845 2.79301 4.8125C2.79301 4.45655 3.08159 4.16797 3.43754 4.16797ZM3.43754 7.60547H11C11.356 7.60547 11.6446 7.89405 11.6446 8.25C11.6446 8.60595 11.356 8.89453 11 8.89453H3.43754C3.08159 8.89453 2.79301 8.60595 2.79301 8.25C2.79301 7.89405 3.08159 7.60547 3.43754 7.60547ZM2.79301 11.6875C2.79301 11.3315 3.08159 11.043 3.43754 11.043H8.93754C9.2935 11.043 9.58207 11.3315 9.58207 11.6875C9.58207 12.0435 9.2935 12.332 8.93754 12.332H3.43754C3.08159 12.332 2.79301 12.0435 2.79301 11.6875Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_44_2747">
                    <rect width="22" height="22" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )

    return (
        <>
            <Card className="review-item">
                <div className="reviewer-info">
                    <figure className="reviewer-avatar">
                        <Image src={reviewerImg} alt="Copper Grey" className="ct-img" />
                    </figure>
                    <div className="reviewer-details">
                        <Text as="h4" className='reviewer-name'>Copper Grey</Text>
                        <div className="rating">
                            <Text as='span' className="rating-number">4.0</Text>
                            <Ratings rating={4} />
                        </div>
                        <Text as='span' className="review-date">14 days ago</Text>
                    </div>
                    {!isReviewRoute && <div className="action-area">
                        <Link to='/feedback-support/respond' className='btn-respond'><RespIcn /> respond</Link>
                    </div>}
                </div>
                <div className="review-content-area">
                    <Text>Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                </div>

                {isReviewRoute && <div className="review-reply-area">
                    <Form action="">
                        <Form.Group as={Row}>
                            <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                <Form.Group className='inp-area'>
                                    <Form.Label>Reply</Form.Label>
                                    <Text as='small'>Write your reply to user review</Text>
                                    <Form.Control type="text" as="textarea" rows={8} className='ct-text' name="description" placeholder='Description' />
                                </Form.Group>
                            </Form.Group>
                            <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                <CustomBtn label='Submit' variant='submit' type='submit'/>
                            </Form.Group>
                        </Form.Group>
                    </Form>
                </div>}
            </Card>
        </>
    )
}

export default ReviewCard