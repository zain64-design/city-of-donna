import React from 'react'
import {Col, Row } from 'react-bootstrap'
import UserTable from '../components/UserManagement/UserTable'
import Paginations from '../components/UI/Paginations'
import UserSearchBar from '../components/UserManagement/UserSearchBar'
import useAOS from '../utils/hooks/useAOS'

const UserManagement = () => {

  useAOS();

  return (
    <>
      <div data-aos="fade-in" className='user-manage-area'>
        <div className="container-ct">
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <UserSearchBar />
              <UserTable/>
              <Paginations />
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default UserManagement