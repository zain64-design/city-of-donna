import React from 'react'
import { Col, Row } from 'react-bootstrap'
import UserStatsBox from '../Common/UserStatsBox'


const CrashStatsBox = () => {
    return (
        <>
            <Row>
                {Array.from({ length: 3 }).map((_, index) => {
                    return (
                        <Col xs={12} sm={4} md={4} lg={4} xl={12} xxl={12} className='mt-4' key={index}>
                            <UserStatsBox boxClass='engage-box' tpTagName='span' btmTagName='h6' tpTagValue='Total Crashes' btmTagValue='5.68k' />
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}

export default CrashStatsBox