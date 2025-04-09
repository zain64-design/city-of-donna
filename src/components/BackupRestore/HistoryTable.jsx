import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserBackup } from '../../utils/redux/slice/userBackup';
import { Card } from 'react-bootstrap';
import CustomTable from '../UI/CustomTable';
import InnerBtnTitle from '../Common/InnerBtnTitle';

const HistoryTable = () => {

    const dispatch =  useDispatch();
    
    const {data,isLoading,error} = useSelector(state => state.userBackup);

    useEffect(()=> {
        dispatch(getUserBackup())
    },[]);

    const tbHeader = [{ text: 'Backup ID' }, { text: 'Date' }, { text: 'Time' }, { text: 'Size' }, { text: 'Type' }];

    const renderRow = (value) => {
        const { id, backupId, date, time, size, type } = value;

        return (
            <tr key={id}>
                <td>{backupId}</td>
                <td>{date}</td>
                <td>{time}</td>
                <td>{size}</td>
                <td>{type}</td>
            </tr>
        )
    }

  return (
    <>
            <Card className='audit-tb-card'>
            <InnerBtnTitle mainTitle='Backup History' btnTitle='Create Backup' navigateTo='/backup-restore'/>
                <CustomTable tbHeader={tbHeader} data={data} isLoading={isLoading} error={error} renderRow={renderRow} tbClass='audit-table mt-5' />
            </Card>
    </>
  )
}

export default HistoryTable