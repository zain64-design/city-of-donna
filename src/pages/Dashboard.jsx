import React from 'react'
import useAOS from '../utils/hooks/useAOS';

const Dashboard = () => {
  useAOS();
  return (
    <div data-aos="fade-in">Dashboard</div>
  )
}

export default Dashboard