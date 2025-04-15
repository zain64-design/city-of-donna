import React, { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Text from '../UI/Text';
import CtSelect from '../UI/CtSelect';
import CrashStatsBox from './CrashStatsBox';
import '../../assets/scss/components/TechnicalMonitoring/CrashStats.scss'
import CrashBarChart from '../Charts/CrashBarChart';

const CrashStats = () => {
  const [selectedValue1, setSelectedValue1] = useState('');
  const options1 = [
    { value: 'this month', label: 'This Month' },
    { value: 'prev month', label: 'Prev Month' }
  ];
  return (
    <>
      <Card className='crash-box'>
        <div className="tp-area px-xxl-3">
          <Text as='h6'>Crash Statistics</Text>
          <CtSelect
            ctClass='ct-drp'
            options={options1}
            selectedValue={selectedValue1}
            onValueChange={(value) => setSelectedValue1(value)}
            placeholder="This Month"
          />
        </div>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={3} xxl={2}>
           <CrashStatsBox/>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={9} xxl={9} className='px-xxl-0'>
          <CrashBarChart/>
          </Col>
        </Row>
      </Card>
    </>
  )
}

export default CrashStats