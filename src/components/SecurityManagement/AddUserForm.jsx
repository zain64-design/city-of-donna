import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import CTButton from '../UI/CTButton';
import useDateInput from '../../utils/hooks/useInputDate';
import ProfileImage from './ProfileImg';

const AddUserForm = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const { inputType, handleDateClick } = useDateInput();
    const userRole = [
        {
            id: 1,
            label: 'Patrol Officer',
            type: 'radio',
            name: 'rd1'
        },
        {
            id: 2,
            label: 'Detective',
            type: 'radio',
            name: 'rd1'
        },
        {
            id: 3,
            label: 'Supervisor',
            type: 'radio',
            name: 'rd1'
        }
    ]

    return (
        <>
            <Form>
                <Form.Group className='text-center align-content-center'>
                    <ProfileImage/>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Group as={Col} xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                        <Form.Group className='inp-area'>
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" className='ct-inp' name="name" placeholder='Enter User Name' />
                        </Form.Group>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                        <Form.Group className='inp-area'>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" className='ct-inp' name="email" placeholder='Enter Email Address' />
                        </Form.Group>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                        <Form.Group className='inp-area'>
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control type="number" className='ct-inp' name="number" placeholder='Enter Contact Number' />
                        </Form.Group>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                        <Form.Group className='inp-area'>
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control type={inputType} value={selectedDate} className='ct-inp date-icn' name="date" placeholder='Enter Date of Birth' onClick={handleDateClick} onChange={(e) => setSelectedDate(e.target.value)} />
                        </Form.Group>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                        <Form.Group className='check-area'>
                            <Form.Label className='role-lbl'>Role</Form.Label>
                            <div className="d-flex align-items-center justify-content-start flex-wrap gap-3">
                                {userRole?.map((value) => {
                                    const { id, label, type, name } = value;
                                    return (
                                        <Form.Check
                                            key={`role-${id}`}
                                            type={type}
                                            id={`role-${id}`}
                                            name={name}
                                            label={label}
                                            className='ct-radio'
                                        />
                                    )
                                })}
                            </div>
                        </Form.Group>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <CTButton type='submit' variant='submit' label='submit' />
                    </Form.Group>
                </Form.Group>
            </Form>
        </>
    )
}

export default AddUserForm