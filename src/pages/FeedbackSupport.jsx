import React from 'react'
import useAOS from '../utils/hooks/useAOS';
import FeedbackTabs from '../components/FeedbackSupport/FeedbackTabs';
import InnerHeadTitle from '../components/Common/InnerHeadTitle';

const FeedbackSupport = () => {
  useAOS();
  return (
    <>
      <meta name="description" content="Customer feedback and support page" />
      <meta name="keywords" content="feedback, support, customer service" />
      <meta name="author" content="Your Company Name" />

      <div data-aos="fade-in" className='feedback-area'>
        <div className="container-ct">
          <InnerHeadTitle innerTitle='Feedback & Support' titleClass='mb-5' />
          <FeedbackTabs />
        </div>
      </div>
    </>
  )
}

export default FeedbackSupport