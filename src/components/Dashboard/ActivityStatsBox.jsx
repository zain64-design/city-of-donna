import React, { useEffect } from 'react'
import { Col } from 'react-bootstrap'
import '../../assets/scss/components/Dashboard/ActivityStatsBox.scss'
import UserStatsBox from '../Common/UserStatsBox'
import { useDispatch, useSelector } from 'react-redux'
import { getUserActivities } from '../../utils/redux/slice/userActivities'

const ActivityStatsBox = () => {
    const dispatch = useDispatch();

    const {data,isLoading,error} = useSelector(state => state.userActivities);

    useEffect(()=> {
        dispatch(getUserActivities())
    },[dispatch])

    return (
        <>
            {data?.map((value) => {
                const {id,title,total} = value;
                return (
                    <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4} key={id}>
                        <UserStatsBox boxClass='activity-box' tpTagName='span' btmTagName='h6' tpTagValue={title} btmTagValue={total}/>
                    </Col>
                )
            })}
        </>
    )
}

export default ActivityStatsBox