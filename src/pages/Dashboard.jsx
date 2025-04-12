import React from 'react'
import useAOS from '../utils/hooks/useAOS';
import { Col, Row } from 'react-bootstrap';
import StatsBox from '../components/Dashboard/StatsBox';
import UserActivity from '../components/Dashboard/UserActivity';
import FeaturesPerformance from '../components/Dashboard/FeaturesPerformance';
import UserEngagement from '../components/Dashboard/UserEngagement';

const Dashboard = () => {
  useAOS();
  return (
    <div data-aos="fade-in" className='dashboard-area'>
      <div className="container-ct">
        <Row>
          <StatsBox/>
          <UserActivity/>
          <UserEngagement/>
          <FeaturesPerformance/>
        </Row>
      </div>
    </div>
  )
}

export default Dashboard