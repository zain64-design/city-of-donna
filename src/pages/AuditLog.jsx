import React from 'react'
import { Col, Row } from 'react-bootstrap'
import useAOS from '../utils/hooks/useAOS'
import InnerHeadTitle from '../components/Common/InnerHeadTitle';
import AuditLogTable from '../components/SecurityManagement/AuditLogTable';

const AuditLog = () => {

  useAOS();

  return (
    <>
    <div data-aos="fade-in" className="audit-log-area">
        <div className="container-ct">
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                  <InnerHeadTitle innerTitle='Security Management' />
                  <AuditLogTable/>
                </Col>
            </Row>
        </div>
    </div>
    </>
  )
}

export default AuditLog