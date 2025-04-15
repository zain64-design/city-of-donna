import React from 'react'
import useAOS from '../utils/hooks/useAOS';
import FeedbackTabs from '../components/FeedbackSupport/FeedbackTabs';
import InnerHeadTitle from '../components/Common/InnerHeadTitle';

const FeedbackSupport = () => {
  useAOS();
  return (
    <div data-aos="fade-in" className='feedback-area'>
      <div className="container-ct">
      <InnerHeadTitle innerTitle='Feedback & Support' titleClass='mb-5' />
        <FeedbackTabs/>
      </div>
    </div>
  )
}

export default FeedbackSupport