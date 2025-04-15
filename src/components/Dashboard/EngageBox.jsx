import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import UserStatsBox from '../Common/UserStatsBox'
import '../../assets/scss/components/Dashboard/EngageBox.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getUserIncident } from '../../utils/redux/slice/userIncident'

const EngageBox = () => {
  const dispatch = useDispatch();
  const {data,isLoading,error} = useSelector(state => state.userIncident)

  useEffect(()=> {
    dispatch(getUserIncident())
  },[dispatch]);

  return (
    <>
      <Row>
        {data?.map((value) => {
          const {id,title,total} = value;
          return (
            <Col xs={12} sm={4} md={4} lg={4} xl={12} xxl={12} className='mt-4' key={id}>
              <UserStatsBox boxClass='engage-box' tpTagName='span' btmTagName='h6' tpTagValue={title} btmTagValue={total} />
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default EngageBox