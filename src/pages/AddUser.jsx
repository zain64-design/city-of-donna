import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import useAOS from '../utils/hooks/useAOS';
import InnerBannerTitle from '../components/Common/InnerBannerTitle';
import AddUserForm from '../components/SecurityManagement/AddUserForm';
import '../assets/scss/components/SecurityManagement/AddUserForm.scss'

const AddUser = () => {

  useAOS();

  return (
    <>
    <div data-aos="fade-in" className="activity-log-area">
        <div className="container-ct">
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                <Card className="add-user-card">
                  <InnerBannerTitle buttonClass='ct-arrow' mainHeadClass='md-head' mainHead='Add User'/>
                  <AddUserForm/>
                </Card>
                </Col>
            </Row>
        </div>
    </div>
    </>
  )
}

export default AddUser