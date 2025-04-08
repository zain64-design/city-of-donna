import React, { useEffect } from 'react'
import { Link } from 'react-router';
import Text from '../UI/Text';
import CustomTable from '../UI/CustomTable';
import { useDispatch, useSelector } from 'react-redux';
import { getUserLogs } from '../../utils/redux/slice/userLogs';

const ActivityLogTable = () => {
    const dispatch = useDispatch();

    const {data,isLoading,error} = useSelector(state => state.userLogs);

    useEffect(()=> {
        dispatch(getUserLogs());
    },[dispatch])

    const tbHeader = [{text: 'Date'}, {text: 'Time'},{text: 'Action'},{text: 'Description'}];

    const renderRow = (value) => {
        const { id, userId, date, time, description } = value;
        return (
            <tr key={id}>
                <td>{date}</td>
                <td>{time}</td>
                <td><Link to="/user-management/activity-log/log-details">Incident Reported</Link></td>
                <td><Text className='ct-p'>{description} <Link to="/user-management/activity-log/log-details" className='ct-view'>view all</Link></Text></td>
            </tr>
        )
    }
  return (
    <>
    <CustomTable tbHeader={tbHeader} tbClass='mt-4 user-table' data={data} isLoading={isLoading} error={error} renderRow={renderRow} />
    </>
  )
}

export default ActivityLogTable