import React, { useEffect } from 'react'
import {Col} from 'react-bootstrap'
import '../../assets/scss/components/Dashboard/StatsBox.scss'
import UserStatsBox from '../Common/UserStatsBox'
import { useDispatch, useSelector } from 'react-redux'
import { getUserStats } from '../../utils/redux/slice/userStats'

const StatsBox = () => {
    const dispatch = useDispatch();

    const {data,isLoading,error} = useSelector(state => state.userStats);

    useEffect(()=> {
        dispatch(getUserStats())
    },[dispatch])

    return (
        <>
            {data?.map((value) => {
                const {id,title,total,thumb} = value;
                return (
                    <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4} key={id} className='mb-4 mb-sm-4 mb-md-4 mb-lg-0 mb-xl-0 mb-xxl-0'>
                        <UserStatsBox boxClass='stats-box' boxIcon={thumb} tpTagName='small' btmTagName='h6' tpTagValue={title} btmTagValue={total}/>
                    </Col>
                )
            })}
        </>
    )
}

export default StatsBox