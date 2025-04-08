import React from 'react'
import InnerBannerTitle from '../components/Common/InnerBannerTitle'
import { Card, Col, Row } from 'react-bootstrap'
import useAOS from '../utils/hooks/useAOS'
import LogSlider from '../components/ActivityLog/LogSlider'
import LogDesc from '../components/ActivityLog/LogDesc'

const LogDetails = () => {

  useAOS();

  return (
    <>
      <div data-aos="fade-in" className="activity-log-area">
        <div className="container-ct">
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <Card className="gb-tb2-card">
                <InnerBannerTitle buttonClass='ct-arrow' mainHeadClass='xl-head' mainHead='Activity Log' />
                <LogSlider/>
                <LogDesc/>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default LogDetails