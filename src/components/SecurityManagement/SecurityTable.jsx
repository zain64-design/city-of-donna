import React, { useEffect } from 'react'
import { Card, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAccess } from '../../utils/redux/slice/userAccess';
import Image from '../UI/Image'
import { Link } from 'react-router';
import CustomTable from '../UI/CustomTable';
import CustomBtn from '../UI/CustomBtn';
import Paginations from '../UI/Paginations';
import '../../assets/scss/components/SecurityManagement/SecurityTable.scss'
import InnerBtnTitle from '../Common/InnerBtnTitle';

const SecurityTable = () => {
  const dispatch = useDispatch();

  const { data, isLoading, error } = useSelector(state => state.userAccess)

  useEffect(() => {
    dispatch(getUserAccess())
  }, [dispatch]);

  const tbHeader = [{ text: 'Name' }, { text: 'Role' }, { text: 'Email' }, { text: 'Audit Logs' }, { text: 'System Access' }, { text: 'Action' }];

  const DltIcn = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
      <path d="M12.6562 1.875H10.3125V1.40625C10.3125 0.630844 9.68166 0 8.90625 0H5.15625C4.38084 0 3.75 0.630844 3.75 1.40625V1.875H1.40625C0.630844 1.875 0 2.50584 0 3.28125C0 3.904 0.407031 4.43316 0.968906 4.61753L1.805 14.7105C1.86522 15.4336 2.48078 16 3.20638 16H10.8561C11.5817 16 12.1973 15.4336 12.2576 14.7103L13.0936 4.6175C13.6555 4.43316 14.0625 3.904 14.0625 3.28125C14.0625 2.50584 13.4317 1.875 12.6562 1.875ZM4.6875 1.40625C4.6875 1.14778 4.89778 0.9375 5.15625 0.9375H8.90625C9.16472 0.9375 9.375 1.14778 9.375 1.40625V1.875H4.6875V1.40625ZM11.3232 14.6327C11.3032 14.8737 11.098 15.0625 10.8561 15.0625H3.20638C2.96453 15.0625 2.75934 14.8737 2.73931 14.6329L1.91544 4.6875H12.1471L11.3232 14.6327ZM12.6562 3.75H1.40625C1.14778 3.75 0.9375 3.53972 0.9375 3.28125C0.9375 3.02278 1.14778 2.8125 1.40625 2.8125H12.6562C12.9147 2.8125 13.125 3.02278 13.125 3.28125C13.125 3.53972 12.9147 3.75 12.6562 3.75Z" fill="black" />
      <path d="M5.15538 13.6272L4.68663 6.0647C4.6706 5.8063 4.44694 5.60977 4.18979 5.62586C3.93138 5.64189 3.73491 5.86433 3.75091 6.1227L4.21966 13.6852C4.23507 13.9338 4.44144 14.125 4.68707 14.125C4.95854 14.125 5.17204 13.8964 5.15538 13.6272Z" fill="black" />
      <path d="M7.03125 5.625C6.77237 5.625 6.5625 5.83487 6.5625 6.09375V13.6562C6.5625 13.9151 6.77237 14.125 7.03125 14.125C7.29013 14.125 7.5 13.9151 7.5 13.6562V6.09375C7.5 5.83487 7.29013 5.625 7.03125 5.625Z" fill="black" />
      <path d="M9.87275 5.62592C9.61494 5.60988 9.39191 5.80635 9.37591 6.06476L8.90716 13.6273C8.89119 13.8856 9.08766 14.1081 9.34603 14.1241C9.60456 14.1401 9.82688 13.9435 9.84288 13.6853L10.3116 6.12276C10.3276 5.86435 10.1312 5.64192 9.87275 5.62592Z" fill="black" />
    </svg>
  )

  const EditIcn = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
      <g clipPath="url(#clip0_46_3661)">
        <path d="M13.9067 6.93721C13.6478 6.93721 13.4379 7.14709 13.4379 7.40597V14.2812C13.4379 14.712 13.0874 15.0625 12.6566 15.0625H2.6563C2.22551 15.0625 1.87503 14.712 1.87503 14.2812V4.28088C1.87503 3.85008 2.22551 3.4996 2.6563 3.4996H9.53152C9.7904 3.4996 10.0003 3.28972 10.0003 3.03084C10.0003 2.77195 9.7904 2.56207 9.53152 2.56207H2.6563C1.70856 2.56207 0.9375 3.33313 0.9375 4.28088V14.2812C0.9375 15.2289 1.70856 16 2.6563 16H12.6566C13.6044 16 14.3754 15.2289 14.3754 14.2812V7.40597C14.3754 7.14709 14.1655 6.93721 13.9067 6.93721Z" fill="black" />
        <path d="M16.6184 1.20377L15.7345 0.319838C15.3081 -0.106613 14.6142 -0.106613 14.1877 0.319838L7.11642 7.39112C7.05098 7.45656 7.00638 7.53991 6.98819 7.63066L6.54621 9.84045C6.51549 9.99414 6.56359 10.153 6.67443 10.2638C6.76322 10.3526 6.88282 10.4012 7.00588 10.4012C7.03648 10.4012 7.06723 10.3982 7.09779 10.3921L9.30758 9.95008C9.39833 9.93192 9.48168 9.88729 9.54712 9.82185L16.6184 2.7506C16.6184 2.7506 16.6185 2.7506 16.6185 2.75057C17.0449 2.32415 17.0449 1.63025 16.6184 1.20377ZM8.98457 9.05858L7.60346 9.33484L7.87972 7.95373L13.6352 2.19815L14.7401 3.30306L8.98457 9.05858ZM15.9555 2.08767L15.4031 2.64013L14.2981 1.53522L14.8506 0.982796C14.9115 0.921857 15.0106 0.921826 15.0716 0.982765L15.9555 1.8667C16.0164 1.92761 16.0164 2.02677 15.9555 2.08767Z" fill="black" />
      </g>
      <defs>
        <clipPath id="clip0_46_3661">
          <rect width="16" height="16" fill="white" transform="translate(0.9375)" />
        </clipPath>
      </defs>
    </svg>
  )

  const renderRow = (value) => {
    const { id, img, name, email, access, role } = value;

    return (
      <tr key={id}>
        <td>
          <Form.Check type="checkbox" className='user-check' id={`access-checkbox-${id}`}>
            <Form.Check.Input
              type="checkbox"
              className="user-inp"
            />
            <Form.Check.Label className="user-lbl">
              <Image src={img} alt='image' className="access-thumb" /> {name}
            </Form.Check.Label>
          </Form.Check>
        </td>
        <td>{role}</td>
        <td>{email}</td>
        <td><Link to="/user-management/activity-log">View</Link></td>
        <td><Form.Check type="switch" id={`access-switch-${id}`} defaultChecked={access} /></td>
        <td>
          <div className="d-flex gap-3">
          <CustomBtn buttonClass='act-btn' icon={<EditIcn />} />
          <CustomBtn buttonClass='act-btn' icon={<DltIcn />} />
          </div>
        </td>
      </tr>
    )
  }

  return (
    <>
      <Card className='sec-tb-card'>
        <InnerBtnTitle mainTitle='User Access Level Settings' btnTitle='create user' navigateTo='/security-management/add-user'/>
        <CustomTable tbHeader={tbHeader} data={data} isLoading={isLoading} error={error} renderRow={renderRow} tbClass='security-table mt-4' />
        <Paginations ctClass='justify-content-end d-flex align-items-center gap-3' />
      </Card>
    </>
  )
}

export default SecurityTable