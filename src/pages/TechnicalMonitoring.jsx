import React from 'react'
import useAOS from '../utils/hooks/useAOS';
import InnerHeadTitle from '../components/Common/InnerHeadTitle';
import ServerBox from '../components/TechnicalMonitoring/ServerBox';
import TimeBox from '../components/TechnicalMonitoring/TimeBox';
import ErrorLog from '../components/TechnicalMonitoring/ErrorLog';
import CrashStats from '../components/TechnicalMonitoring/CrashStats';

const TechnicalMonitoring = () => {
  useAOS();
  return (
    <>
    <div data-aos="fade-in" className='monitoring-area'>
      <div className="container-ct">
        <InnerHeadTitle innerTitle='Server Health'/>
        <ServerBox/>
        <TimeBox/>
        <ErrorLog/>
        <CrashStats/>
      </div>
    </div>
    </>
  )
}

export default TechnicalMonitoring