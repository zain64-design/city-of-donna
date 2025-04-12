import React from 'react'
import {Col} from 'react-bootstrap'
import '../../assets/scss/components/Dashboard/StatsBox.scss'
import statIcon from '/images/icons/st1.png'
import UserStatsBox from '../Common/UserStatsBox'

const StatsBox = () => {
    return (
        <>
            {Array.from({ length: 3 }).map((_, index) => {
                return (
                    <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4} key={index} className='mb-4 mb-sm-4 mb-md-4 mb-lg-0 mb-xl-0 mb-xxl-0'>
                        <UserStatsBox boxClass='stats-box' boxIcon={statIcon} tpTagName='small' btmTagName='h6' tpTagValue='Total Users' btmTagValue='16.5K'/>
                    </Col>
                )
            })}
        </>
    )
}

export default StatsBox