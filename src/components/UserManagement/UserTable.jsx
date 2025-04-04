import React, { useEffect } from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../utils/redux/slice/users';
import Image from '../UI/Image'
import { Link } from 'react-router';
import CustomTable from '../UI/CustomTable';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const UserTable = () => {

    const dispatch = useDispatch();
    const { data, isLoading, error } = useSelector(state => state.users)

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const tbHeader = ['User Name', 'Contact Number', 'Email', 'Date of Birth', 'Role', 'Activity Log', 'Action']

    const renderRow = (value) => {
        const { id, img, name, contactNumber, email, dateOfBirth, role } = value;
        return (
            <tr key={id}>
                <td>
                    <Form.Check type="checkbox" className='user-check' id={`user-checkbox-${id}`}>
                        <Form.Check.Input
                            type="checkbox"
                            className="user-inp"
                        />
                        <Form.Check.Label className="user-lbl">
                            <Image src={img} alt='image' className="user-thumb" /> {name}
                        </Form.Check.Label>
                    </Form.Check>
                </td>
                <td>{contactNumber}</td>
                <td>{email}</td>
                <td>{dateOfBirth}</td>
                <td>{role}</td>
                <td><Link to="/user-management/activity-log">View</Link></td>
                <td>
                    <Button variant='' className='dlt-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                            <path d="M12.6562 1.875H10.3125V1.40625C10.3125 0.630844 9.68166 0 8.90625 0H5.15625C4.38084 0 3.75 0.630844 3.75 1.40625V1.875H1.40625C0.630844 1.875 0 2.50584 0 3.28125C0 3.904 0.407031 4.43316 0.968906 4.61753L1.805 14.7105C1.86522 15.4336 2.48078 16 3.20638 16H10.8561C11.5817 16 12.1973 15.4336 12.2576 14.7103L13.0936 4.6175C13.6555 4.43316 14.0625 3.904 14.0625 3.28125C14.0625 2.50584 13.4317 1.875 12.6562 1.875ZM4.6875 1.40625C4.6875 1.14778 4.89778 0.9375 5.15625 0.9375H8.90625C9.16472 0.9375 9.375 1.14778 9.375 1.40625V1.875H4.6875V1.40625ZM11.3232 14.6327C11.3032 14.8737 11.098 15.0625 10.8561 15.0625H3.20638C2.96453 15.0625 2.75934 14.8737 2.73931 14.6329L1.91544 4.6875H12.1471L11.3232 14.6327ZM12.6562 3.75H1.40625C1.14778 3.75 0.9375 3.53972 0.9375 3.28125C0.9375 3.02278 1.14778 2.8125 1.40625 2.8125H12.6562C12.9147 2.8125 13.125 3.02278 13.125 3.28125C13.125 3.53972 12.9147 3.75 12.6562 3.75Z" fill="black" />
                            <path d="M5.15538 13.6272L4.68663 6.0647C4.6706 5.8063 4.44694 5.60977 4.18979 5.62586C3.93138 5.64189 3.73491 5.86433 3.75091 6.1227L4.21966 13.6852C4.23507 13.9338 4.44144 14.125 4.68707 14.125C4.95854 14.125 5.17204 13.8964 5.15538 13.6272Z" fill="black" />
                            <path d="M7.03125 5.625C6.77237 5.625 6.5625 5.83487 6.5625 6.09375V13.6562C6.5625 13.9151 6.77237 14.125 7.03125 14.125C7.29013 14.125 7.5 13.9151 7.5 13.6562V6.09375C7.5 5.83487 7.29013 5.625 7.03125 5.625Z" fill="black" />
                            <path d="M9.87275 5.62592C9.61494 5.60988 9.39191 5.80635 9.37591 6.06476L8.90716 13.6273C8.89119 13.8856 9.08766 14.1081 9.34603 14.1241C9.60456 14.1401 9.82688 13.9435 9.84288 13.6853L10.3116 6.12276C10.3276 5.86435 10.1312 5.64192 9.87275 5.62592Z" fill="black" />
                        </svg>
                    </Button>
                </td>
            </tr>
        )
    }

    return (
        <>
            <Card className="gb-tb-card">
            <CustomTable tbHeader={tbHeader} data={data} isLoading={isLoading} error={error} renderRow={renderRow} />
            </Card>
        </>
    )
}

export default UserTable