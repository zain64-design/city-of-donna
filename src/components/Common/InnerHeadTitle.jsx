import React from 'react'
import Text from '../UI/Text'
import { Col, Row } from 'react-bootstrap'
import CtButton from '../UI/CTButton'
import '../../assets/scss/components/Common/InnerHeadTitle.scss'

const InnerHeadTitle = ({innerTitle="",btnText=""}) => {
  return (
    <>
    <Row className='inner-title justify-content-between'>
        <Col xs={12} sm={12} md={6} lg={5} xl={5} xxl={5}>
            <Text as='h5'>{innerTitle}</Text>
        </Col>
        {btnText && <Col xs={12} sm={12} md={6} lg={5} xl={5} xxl={5}>
            <CtButton type="search" variant='log' label={btnText} />
        </Col>}
    </Row>
    </>
  )
}

export default InnerHeadTitle