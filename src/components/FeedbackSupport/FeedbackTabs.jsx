import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import ReviewDetails from './ReviewDetails';
import ReviewTabs from './ReviewTabs';
import Paginations from '../UI/Paginations'
import '../../assets/scss/components/FeedbackSupport/FeedbackTabs.scss'
import SearchBar from '../Common/SearchBar';
import UserGuideCard from './UserGuideCard';

const FeedbackTabs = () => {
    const [key, setKey] = useState('tab-1');
    return (
        <>
            <Tabs
            className='ct-feedback'
                id="controlled"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="tab-1" title="User Reviews">
                    <ReviewDetails/>
                    <ReviewTabs/>
                    <Paginations ctClass='justify-content-start d-flex align-items-center gap-3' />
                </Tab>
                <Tab eventKey="tab-2" title="User Guides & Training">
                    <SearchBar ctBtnType="search" ctBtnVariant="search" ctBtnLabel="upload" inpPlaceholder='Search'/>
                    <UserGuideCard/>
                </Tab>
            </Tabs>
        </>
    )
}

export default FeedbackTabs