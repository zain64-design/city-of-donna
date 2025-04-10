import React from 'react'
import useAOS from '../utils/hooks/useAOS';
import FeedbackTabs from '../components/FeedbackSupport/FeedbackTabs';

const FeedbackSupport = () => {
  useAOS();
  return (
    <div data-aos="fade-in" className='feedback-area'>
      <div className="container-ct">
        <FeedbackTabs/>
      </div>
    </div>
  )
}

export default FeedbackSupport