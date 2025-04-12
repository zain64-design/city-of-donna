import React from 'react'
import { Col } from 'react-bootstrap'
import '../../assets/scss/components/Dashboard/ActivityStatsBox.scss'
import UserStatsBox from '../Common/UserStatsBox'

const ActivityStatsBox = () => {
    return (
        <>
            {Array.from({ length: 3 }).map((_, index) => {
                return (
                    <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4} key={index}>
                        <UserStatsBox boxClass='activity-box' tpTagName='span' btmTagName='h6' tpTagValue='Avg. No of sessions' btmTagValue='2300'/>
                    </Col>
                )
            })}
        </>
    )
}

export default ActivityStatsBox