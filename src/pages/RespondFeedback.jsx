import React from 'react'
import ReviewCard from '../components/FeedbackSupport/ReviewCard'
import InnerBannerTitle from '../components/Common/InnerBannerTitle'

const RespondFeedback = () => {
    return (
        <>
            <div data-aos="fade-in" className='respond-area'>
                <div className="container-ct">
                    <InnerBannerTitle buttonClass='ct-arrow' mainHeadClass='xl-head' mainHead='Feedback & Support' bannerClass='mb-5'/>
                    <ReviewCard />
                </div>
            </div>
        </>
    )
}

export default RespondFeedback