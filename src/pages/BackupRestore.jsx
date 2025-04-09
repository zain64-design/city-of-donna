import React from 'react'
import useAOS from '../utils/hooks/useAOS';
import { Col, Row } from 'react-bootstrap';
import InnerHeadTitle from '../components/Common/InnerHeadTitle';
import HistoryTable from '../components/BackupRestore/HistoryTable';
import BackupGroup from '../components/BackupRestore/BackupGroup';

const BackupRestore = () => {
  useAOS();
  return (
    <div data-aos="fade-in" className='backup-area'>
      <div className="container-ct">
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <InnerHeadTitle innerTitle='Backup & Restore' />
            <BackupGroup/>
            <HistoryTable/>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default BackupRestore