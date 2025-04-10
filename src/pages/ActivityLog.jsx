import React from 'react'
import InnerBannerTitle from '../components/Common/InnerBannerTitle'
import { Card, Col, Row } from 'react-bootstrap'
import ActivityLogTable from '../components/ActivityLog/ActivityLogTable'
import Paginations from '../components/UI/Paginations'
import useAOS from '../utils/hooks/useAOS'

const ActivityLog = () => {

  useAOS();

  return (
    <>
    <div data-aos="fade-in" className="activity-log-area">
        <div className="container-ct">
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                <Card className="gb-tb2-card">
                    <InnerBannerTitle buttonClass='ct-arrow' mainHeadClass='xl-head' mainHead='Activity Log'/>
                    <ActivityLogTable/>
                </Card>
                <Paginations ctClass='justify-content-end d-flex align-items-center gap-3' />
                </Col>
            </Row>
        </div>
    </div>
    </>
  )
}

export default ActivityLog