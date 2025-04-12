import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import SearchBar from '../Common/SearchBar'
import Text from '../UI/Text'
import '../../assets/scss/components/TechnicalMonitoring/ErrorLog.scss'
import Image from '../UI/Image'
import TableImg from '/images/chart/table-img.png'

const ErrorLog = () => {
  return (
    <>
    <Card className='errorLog-box'>
        <Text as='h5'>Error Logs</Text>
        <SearchBar ctBtnType="search" ctBtnVariant="search" ctBtnLabel="search" inpPlaceholder='Search'/>
        <Row className='justify-content-center'>
            <Col xs={12} sm={12} md={10} lg={10} xl={11} xxl={11}>
            <Image src={TableImg}/>
            </Col>
        </Row>
    </Card>
    </>
  )
}

export default ErrorLog