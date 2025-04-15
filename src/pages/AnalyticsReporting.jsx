import React from 'react'
import useAOS from '../utils/hooks/useAOS';
import InnerHeadTitle from '../components/Common/InnerHeadTitle';
import { Col, Row } from 'react-bootstrap';
import ReportingBox from '../components/AnalyticsReporting/ReportingBox';
import ReportingBarChart from '../components/Charts/ReportingBarChart';
import DonutChart from '../components/Charts/DonutChart';
import Image from '../components/UI/Image'
import mapImg from '/images/chart/map.png'
import Text from '../components/UI/Text';
import UsersLocation from '../components/AnalyticsReporting/UsersLocation';

const AnalyticsReporting = () => {
  const colors = ['#089BAB', '#FFBF3E', '#6347EB', '#F36068', '#01C5DB'];
  useAOS();
  return (
    <div data-aos="fade-in" className="reporting-area">
      <div className="container-ct">
        <InnerHeadTitle innerTitle='Analytics & Reporting' />
        <InnerHeadTitle innerTitle='Demographics' titleClass='mt-5' />
        <Row>
          <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4}>
            <ReportingBox cdHead='Age Groups'>
              <ReportingBarChart />
            </ReportingBox>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4}>
            <ReportingBox cdHead='Gender'>
              <DonutChart series={[10.2, 4.8,]}
                labels={['Female', 'Male']} />
            </ReportingBox>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4}>
            <ReportingBox cdHead='Devices'>
              <DonutChart series={[10.2, 4.8,]}
                labels={['IOS', 'Android']} />
            </ReportingBox>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <ReportingBox cdHead='Users Location'>
            <Row>
              <Col xs={12} sm={12} md={12} lg={5} xl={4} xxl={4}>
              <Text as='h5' className='lg-txt'>16.5K</Text>
                <Text as='span' className='sm-txt'>Total Users</Text>
                <UsersLocation/>
              </Col>
              <Col xs={12} sm={12} md={12} lg={7} xl={8} xxl={8}>
                <Image src={mapImg} alt='map-img'/>
              </Col>
            </Row>
          </ReportingBox>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default AnalyticsReporting