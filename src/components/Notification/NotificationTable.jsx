import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import CustomTable from '../UI/CustomTable';
import { getUserNotification } from '../../utils/redux/slice/userNotification';
import '../../assets/scss/components/Notification/NotificationTable.scss'
import Text from '../UI/Text';
import CTButton from '../UI/CTButton';

const NotificationTable = () => {
    const dispatch = useDispatch();
    const { data, isLoading, error } = useSelector(state => state.userNotification);
    useEffect(() => {
        dispatch(getUserNotification());
    }, [dispatch]);

    const tbHeader = [{ text: 'Notification Title' }, { text: 'Notification Type' }, { text: 'Description' }, { text: 'Date' }, { text: 'Action' }];

    const DltIcn = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
            <path d="M12.6562 1.875H10.3125V1.40625C10.3125 0.630844 9.68166 0 8.90625 0H5.15625C4.38084 0 3.75 0.630844 3.75 1.40625V1.875H1.40625C0.630844 1.875 0 2.50584 0 3.28125C0 3.904 0.407031 4.43316 0.968906 4.61753L1.805 14.7105C1.86522 15.4336 2.48078 16 3.20638 16H10.8561C11.5817 16 12.1973 15.4336 12.2576 14.7103L13.0936 4.6175C13.6555 4.43316 14.0625 3.904 14.0625 3.28125C14.0625 2.50584 13.4317 1.875 12.6562 1.875ZM4.6875 1.40625C4.6875 1.14778 4.89778 0.9375 5.15625 0.9375H8.90625C9.16472 0.9375 9.375 1.14778 9.375 1.40625V1.875H4.6875V1.40625ZM11.3232 14.6327C11.3032 14.8737 11.098 15.0625 10.8561 15.0625H3.20638C2.96453 15.0625 2.75934 14.8737 2.73931 14.6329L1.91544 4.6875H12.1471L11.3232 14.6327ZM12.6562 3.75H1.40625C1.14778 3.75 0.9375 3.53972 0.9375 3.28125C0.9375 3.02278 1.14778 2.8125 1.40625 2.8125H12.6562C12.9147 2.8125 13.125 3.02278 13.125 3.28125C13.125 3.53972 12.9147 3.75 12.6562 3.75Z" fill="black" />
            <path d="M5.15538 13.6272L4.68663 6.0647C4.6706 5.8063 4.44694 5.60977 4.18979 5.62586C3.93138 5.64189 3.73491 5.86433 3.75091 6.1227L4.21966 13.6852C4.23507 13.9338 4.44144 14.125 4.68707 14.125C4.95854 14.125 5.17204 13.8964 5.15538 13.6272Z" fill="black" />
            <path d="M7.03125 5.625C6.77237 5.625 6.5625 5.83487 6.5625 6.09375V13.6562C6.5625 13.9151 6.77237 14.125 7.03125 14.125C7.29013 14.125 7.5 13.9151 7.5 13.6562V6.09375C7.5 5.83487 7.29013 5.625 7.03125 5.625Z" fill="black" />
            <path d="M9.87275 5.62592C9.61494 5.60988 9.39191 5.80635 9.37591 6.06476L8.90716 13.6273C8.89119 13.8856 9.08766 14.1081 9.34603 14.1241C9.60456 14.1401 9.82688 13.9435 9.84288 13.6853L10.3116 6.12276C10.3276 5.86435 10.1312 5.64192 9.87275 5.62592Z" fill="black" />
        </svg>
    )
    const EditIcn = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <g clipPath="url(#clip0_20_4986)">
                <path d="M12.9692 6.93715C12.7103 6.93715 12.5004 7.14703 12.5004 7.40591V14.2811C12.5004 14.7119 12.1499 15.0624 11.7191 15.0624H1.7188C1.28801 15.0624 0.937529 14.7119 0.937529 14.2811V4.28082C0.937529 3.85002 1.28801 3.49954 1.7188 3.49954H8.59402C8.8529 3.49954 9.06278 3.28966 9.06278 3.03078C9.06278 2.77189 8.8529 2.56201 8.59402 2.56201H1.7188C0.771055 2.56201 0 3.33307 0 4.28082V14.2811C0 15.2289 0.771055 15.9999 1.7188 15.9999H11.7191C12.6669 15.9999 13.4379 15.2289 13.4379 14.2811V7.40591C13.4379 7.14703 13.228 6.93715 12.9692 6.93715Z" fill="black" />
                <path d="M15.68 1.20377L14.796 0.319838C14.3696 -0.106613 13.6757 -0.106613 13.2492 0.319838L6.17794 7.39112C6.1125 7.45656 6.06791 7.53991 6.04972 7.63066L5.60774 9.84045C5.57702 9.99414 5.62511 10.153 5.73596 10.2638C5.82474 10.3526 5.94434 10.4012 6.06741 10.4012C6.098 10.4012 6.12875 10.3982 6.15932 10.3921L8.3691 9.95008C8.45986 9.93192 8.5432 9.88729 8.60864 9.82185L15.68 2.7506C15.68 2.7506 15.68 2.7506 15.68 2.75057C16.1064 2.32415 16.1064 1.63025 15.68 1.20377ZM8.04609 9.05858L6.66499 9.33484L6.94125 7.95373L12.6967 2.19815L13.8016 3.30306L8.04609 9.05858ZM15.017 2.08767L14.4646 2.64013L13.3597 1.53522L13.9121 0.982796C13.973 0.921857 14.0722 0.921826 14.1331 0.982765L15.017 1.8667C15.078 1.92761 15.078 2.02677 15.017 2.08767Z" fill="black" />
            </g>
            <defs>
                <clipPath id="clip0_20_4986">
                    <rect width="16" height="16" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )

    const renderRow = (value) => {
        const { id, notificationTitle, notificationType, description, date } = value;
        return (
            <tr key={id}>
                <td>{notificationTitle}</td>
                <td>{notificationType}</td>
                <td>{description}</td>
                <td>{date}</td>
                <td>
                    <div className="d-flex gap-3">
                    <CTButton buttonClass="dlt-btn" showIcon={true} icon={<EditIcn />} />
                    <CTButton buttonClass="dlt-btn" showIcon={true} icon={<DltIcn />} />
                    </div>
                </td>
            </tr>
        )
    }

    return (
        <>
            <Card className='not-card'>
                <Text as="h5">Current Notifications</Text>
                <CustomTable tbHeader={tbHeader} data={data} isLoading={isLoading} error={error} renderRow={renderRow} tbClass='not-table' />
            </Card>
        </>
    )
}

export default NotificationTable