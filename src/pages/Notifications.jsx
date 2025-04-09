import React from 'react'
import useAOS from '../utils/hooks/useAOS';
import InnerHeadTitle from '../components/Common/InnerHeadTitle';
import NotificationForm from '../components/Notification/NotificationForm';
import NotificationTable from '../components/Notification/NotificationTable';

const Notifications = () => {
  useAOS();
  return (
    <div data-aos="fade-in" className='notification-area'>
      <div className="container-ct">
        <InnerHeadTitle innerTitle='Notifications Management' titleClass='fw-semibold'/>
        <NotificationForm/>
        <NotificationTable/>
      </div>
    </div>
  )
}

export default Notifications