import React from 'react'
import PieChart from '../Charts/PieChart'
import { Card, Col } from 'react-bootstrap'
import '../../assets/scss/components/Dashboard/FeaturesPerformance.scss'

const FeaturesPerformance = () => {
  return (
    <>
      <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
        <Card className='pie-card'>
          <PieChart
            series={[24, 26, 20, 16, 14]}
            labels={['Daily Check-In', 'Emergency SOS', 'Voice Recordings', 'Incident Reporting', 'Gameplay']}
          />
        </Card>
      </Col>
    </>
  )
}

export default FeaturesPerformance