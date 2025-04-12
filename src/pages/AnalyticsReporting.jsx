import React from 'react'
import useAOS from '../utils/hooks/useAOS';
import InnerHeadTitle from '../components/Common/InnerHeadTitle';
import Image from '../components/UI/Image'
import pageImg from '/images/chart/demo-page.png'

const AnalyticsReporting = () => {
  useAOS();
  return (
    <div data-aos="fade-in">
      <div className="container-ct">
      <InnerHeadTitle innerTitle='Analytics & Reporting' />
      <Image src={pageImg} className='mb-5 mt-5'/>
      </div>
    </div>
  )
}

export default AnalyticsReporting