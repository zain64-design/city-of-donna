import React from 'react'
import {Col, Row } from 'react-bootstrap'
import UserTable from '../components/UserManagement/UserTable'
import Paginations from '../components/UI/Paginations'
import useAOS from '../utils/hooks/useAOS'
import SearchBar from '../components/Common/SearchBar'

const UserManagement = () => {

  useAOS();

  return (
    <>
      <div data-aos="fade-in" className='user-manage-area'>
        <div className="container-ct">
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <SearchBar ctBtnType="search" ctBtnVariant="search" ctBtnLabel="search" inpPlaceholder='Search Users' />
              <UserTable/>
              <Paginations ctClass='justify-content-end d-flex align-items-center gap-3' />
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default UserManagement