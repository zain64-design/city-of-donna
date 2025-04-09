import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAudit } from '../../utils/redux/slice/userAudit';
import { Card } from 'react-bootstrap';
import Paginations from '../UI/Paginations';
import { Link } from 'react-router';
import CustomTable from '../UI/CustomTable';
import InnerBannerTitle from '../Common/InnerBannerTitle';
import '../../assets/scss/components/SecurityManagement/AuditLogTable.scss'
const AuditLogTable = () => {
    const dispatch = useDispatch();

    const { data, isLoading, error } = useSelector(state => state.userAudit);

    useEffect(() => {
        dispatch(getUserAudit())
    }, [dispatch]);

    const tbHeader = [{ text: 'Date' }, { text: 'Time' }, { text: 'User' }, { text: 'Action' }, { text: 'Details' }, { text: 'Status' }];

    const renderRow = (value) => {
        const { id, date, time, user, action, details, status } = value;

        return (
            <tr key={id}>
                <td>{date}</td>
                <td>{time}</td>
                <td>{user}</td>
                <td><Link to="">{action}</Link></td>
                <td>{details}</td>
                <td className={status === 'Success' ? 'txt-green':'txt-red'}>{status}</td>
            </tr>
        )
    }

    return (
        <>
            <Card className='audit-tb-card'>
                <InnerBannerTitle mainHead='Audit Log' mainHeadClass='md-head' buttonClass='ct-arrow'/>
                <CustomTable tbHeader={tbHeader} data={data} isLoading={isLoading} error={error} renderRow={renderRow} tbClass='audit-table mt-4' />
                <Paginations />
            </Card>
        </>
    )
}

export default AuditLogTable