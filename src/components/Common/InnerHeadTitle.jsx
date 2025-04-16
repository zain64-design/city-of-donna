import React from 'react'
import Text from '../UI/Text'
import { Col, Row } from 'react-bootstrap'
import CustomBtn from '../UI/CustomBtn';
import { useNavigate } from "react-router";
import '../../assets/scss/components/Common/InnerHeadTitle.scss'

const InnerHeadTitle = ({innerTitle="",titleClass='',btnText="",btnIcon='',btnVariant='',navigateTo = "/"}) => {
  const  navigate = useNavigate();

  const handleNavigate = () => {
    navigate(navigateTo);
  };

  return (
    <>
    <Row className='inner-title justify-content-between'>
        <Col xs={12} sm={12} md={6} lg={5} xl={5} xxl={5}>
            <Text as='h5' className={titleClass}>{innerTitle}</Text>
        </Col>
        {btnText && <Col xs={12} sm={12} md={6} lg={5} xl={5} xxl={5}>
            <CustomBtn type="button" variant={btnVariant} label={btnText} icon={btnIcon} onClick={handleNavigate} />
        </Col>}
    </Row>
    </>
  )
}

export default InnerHeadTitle