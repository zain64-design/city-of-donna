import React, { useEffect } from 'react'
import Image from '../UI/Image'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getUserGuide } from '../../utils/redux/slice/userGuide';
import Text from '../UI/Text'
import { Card, Col, Row } from 'react-bootstrap'
import '../../assets/scss/components/FeedbackSupport/UserGuideCard.scss'
import FancyBox from '../Common/FancyBox'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const UserGuideCard = () => {
    const dispatch = useDispatch();
    const { data, isLoading, error } = useSelector(state => state.userGuide);

    useEffect(() => {
        dispatch(getUserGuide());
    }, [dispatch])

    return (
        <>
            <FancyBox options={{
                Carousel: {
                    infinite: false,
                }
            }}>
                <Row>
                    {isLoading ? Array.from({ length: 4 }).map((_, index) => <GuideSkl key={index} />)
                        : error ? <Text>{error.message}</Text>
                            : data?.map((value) => {
                                const { id, title, size, thumb, videoLink } = value;
                                return (
                                    <Col xs={12} sm={6} md={6} lg={3} xl={3} xxl={3} className='mt-4' key={id}>
                                        <Card className='guide-box'>
                                            <GuideImage thumb={thumb} videoLink={videoLink} />
                                            <GuideDesc title={title} size={size} />
                                        </Card>
                                    </Col>
                                )
                            })}
                </Row>
            </FancyBox>
        </>
    )
}

export default UserGuideCard

export const GuideImage = ({ thumb, videoLink }) => {
    return (
        <figure>
            {!thumb && !videoLink ? (
                <Skeleton
                    height={200}
                    width='100%'
                    containerClassName='video-thumb'
                />
            ) : (
                !videoLink ? <Image src={thumb} alt="guide-icon" className="file-icon" />
                    : (
                        <>
                            <Image src={thumb} alt="video-thumb" className="video-thumb" />
                            <a data-fancybox="video-gallery" data-type="html5video" data-src={videoLink} href={videoLink} className='play-btn'>
                                <Image src={thumb} alt="video-thumb" className="d-none" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                                    <path d="M32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64C49.6731 64 64 49.6731 64 32C63.9813 14.3348 49.6653 0.018884 32 0ZM45.4764 33.0196C45.2549 33.464 44.8948 33.8242 44.4503 34.0458V34.0571L26.1646 43.2001C25.0353 43.7643 23.6625 43.3064 23.0982 42.1771C22.9377 41.8561 22.8551 41.5017 22.8571 41.1429V22.8572C22.8566 21.5948 23.8794 20.5711 25.1418 20.5704C25.4968 20.5703 25.847 20.6528 26.1646 20.8115L44.4503 29.9544C45.5801 30.5174 46.0396 31.8898 45.4764 33.0196Z" fill="white" />
                                </svg>
                            </a>
                        </>
                    )
            )}
        </figure>
    )
}

export const GuideDesc = ({ title, size }) => {
    return (
        <div className="desc">
            <Link to=''>{title || <Skeleton count={1} height={10} width={100} />}</Link>
            <Text as="span">{size || <Skeleton count={1} height={10} width={100} />}</Text>
        </div>
    )
}

export const GuideSkl = () => {
    return (
        <Col xs={12} sm={6} md={6} lg={3} xl={3} xxl={3} className='mt-4'>
            <Card className='guide-box'>
                <GuideImage />
                <GuideDesc />
            </Card>
        </Col>
    )
}