import React, { useEffect, useRef, useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';
import Text from '../UI/Text'
import CustomBtn from '../UI/CustomBtn';
import CtSelect from '../UI/CtSelect';
import '../../assets/scss/components/Notification/NotificationForm.scss'
import useDateInput from '../../utils/hooks/useInputDate';

const NotificationForm = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const { inputType, handleDateClick } = useDateInput();

    const options = [
        { value: 'inAppNotifications', label: 'In App Notifications' },
        { value: 'pushNotifications', label: 'Push Notifications' },
    ];


const [uploadedFiles, setUploadedFiles] = useState([]);

const fileInputRef = useRef(null);

// Handle file selection via input
const handleFileChange = (event) => {
  const files = event.target.files;
  const newFiles = Array.from(files).map(file => URL.createObjectURL(file));
  setUploadedFiles(prevFiles => [...prevFiles, ...newFiles]);
};

const handleDrop = (event) => {
  event.preventDefault();
  const files = event.dataTransfer.files;
  const newFiles = Array.from(files).map(file => URL.createObjectURL(file));
  setUploadedFiles(prevFiles => [...prevFiles, ...newFiles]);
};

// Allow dropping
const handleDragOver = (event) => {
  event.preventDefault();
};

const handleButtonClick = () => {
  fileInputRef.current.click();
};

useEffect(() => {
  return () => {
    uploadedFiles.forEach(fileUrl => URL.revokeObjectURL(fileUrl));
  };
}, [uploadedFiles]);

    return (
        <>
            <div className="notification-form">
                <div className="form-head">
                    <Text as='h5'>Create Notifications</Text>
                </div>
                <Form>
                    <Row>
                        <Form.Group as={Col} xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                            <Form.Group className="inp-area">
                                <Form.Label>Notification Title</Form.Label>
                                <Form.Control type="text" className='ct-inp' name="notificationTitle" placeholder='Notification Title' />
                            </Form.Group>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                            <Form.Group className="inp-area">
                                <Form.Label>Notification Type</Form.Label>
                                <CtSelect
                                    ctClass='ct-drp'
                                    options={options}
                                    selectedValue={selectedValue}
                                    onValueChange={(value) => setSelectedValue(value)}
                                    placeholder="Select Notification Type"
                                />
                            </Form.Group>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                            <Form.Group className="inp-area">
                                <Form.Label>Select Date</Form.Label>
                                <Form.Control type={inputType} value={selectedDate} className='ct-inp date-icn' onChange={(e) => setSelectedDate(e.target.value)}
                                    onClick={handleDateClick} name="date" placeholder='Select Date to publish notification' />
                            </Form.Group>
                            <Form.Group className="inp-area">
                                <Form.Label>Attach Images</Form.Label>
                                <Form.Group
                                    className="attach-file"
                                    onDrop={handleDrop}
                                    onDragOver={handleDragOver}
                                >
                                    {uploadedFiles.length === 0 ? (
                                        <>
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="36" viewBox="0 0 30 36" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M29.3798 30.814C29.3798 32.012 28.9032 33.1624 28.0569 34.0104C27.2089 34.8567 26.0585 35.3333 24.8604 35.3333H5.1395C3.94145 35.3333 2.79106 34.8567 1.94306 34.0104C1.09671 33.1624 0.620117 32.012 0.620117 30.814V4.51938C0.620117 3.32133 1.09671 2.17095 1.94306 1.32295C2.79106 0.476589 3.94145 0 5.1395 0H19.2498C20.0124 0 20.7437 0.302388 21.2827 0.84307L28.5367 8.09709C29.0774 8.63612 29.3798 9.36744 29.3798 10.13V30.814ZM26.9147 30.814V10.13C26.9147 10.0215 26.872 9.91634 26.7947 9.8391L19.5407 2.58509C19.4635 2.50784 19.3583 2.46512 19.2498 2.46512H5.1395C4.59388 2.46512 4.07292 2.68205 3.68672 3.0666C3.30216 3.45281 3.08523 3.97377 3.08523 4.51938V30.814C3.08523 31.3596 3.30216 31.8805 3.68672 32.2667C4.07292 32.6513 4.59388 32.8682 5.1395 32.8682H24.8604C25.406 32.8682 25.927 32.6513 26.3132 32.2667C26.6978 31.8805 26.9147 31.3596 26.9147 30.814Z" fill="#64748B" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M18.6973 2.05434C18.6973 1.37396 19.2495 0.821777 19.9298 0.821777C20.6102 0.821777 21.1624 1.37396 21.1624 2.05434V7.80627C21.1624 8.03306 21.3464 8.21713 21.5732 8.21713H27.3252C28.0055 8.21713 28.5577 8.76931 28.5577 9.44968C28.5577 10.1301 28.0055 10.6822 27.3252 10.6822H21.5732C19.9841 10.6822 18.6973 9.39545 18.6973 7.80627V2.05434Z" fill="#64748B" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.42592 16.434C7.74555 16.434 7.19336 15.8818 7.19336 15.2014C7.19336 14.5211 7.74555 13.9689 8.42592 13.9689H21.5732C22.2536 13.9689 22.8058 14.5211 22.8058 15.2014C22.8058 15.8818 22.2536 16.434 21.5732 16.434H8.42592Z" fill="#64748B" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.42592 22.1861C7.74555 22.1861 7.19336 21.6339 7.19336 20.9535C7.19336 20.2731 7.74555 19.7209 8.42592 19.7209H21.5732C22.2536 19.7209 22.8058 20.2731 22.8058 20.9535C22.8058 21.6339 22.2536 22.1861 21.5732 22.1861H8.42592Z" fill="#64748B" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.42592 27.9381C7.74555 27.9381 7.19336 27.3859 7.19336 26.7055C7.19336 26.0251 7.74555 25.473 8.42592 25.473H15.8213C16.5016 25.473 17.0538 26.0251 17.0538 26.7055C17.0538 27.3859 16.5016 27.9381 15.8213 27.9381H8.42592Z" fill="#64748B" />
                                        </svg>
                                    </div>
                                    <Text>Choose or Drag & Drop the Image</Text>
                                        </>
                                    ) : (
                                        <div className="uploaded-images">
                                            {uploadedFiles.map((fileUrl, index) => (
                                                <img
                                                    key={index}
                                                    src={fileUrl}
                                                    alt={`Uploaded ${index}`}
                                                    className='img-fluid img-upload'
                                                />
                                            ))}
                                        </div>
                                    )}
                                <CustomBtn variant="choose" onClick={handleButtonClick} label='Choose Files'/>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    className='d-none'
                                    onChange={handleFileChange}
                                    accept="image/*"
                                    multiple
                                />
                                </Form.Group>
                            </Form.Group>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                            <Form.Group className="inp-area">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" as="textarea" rows={8} className='ct-text' name="description" placeholder='Type Description' />
                            </Form.Group>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <CustomBtn type='submit' variant='submit' label='Submit' />
                        </Form.Group>
                    </Row>
                </Form>
            </div>
        </>
    )
}

export default NotificationForm