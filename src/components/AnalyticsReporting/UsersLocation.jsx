import React from 'react'
import Image from '../UI/Image'
import flgImg from '../../../public/images/icons/flg1.png'
import { FaChevronUp } from "react-icons/fa6";
import { ProgressBar } from 'react-bootstrap';
import Text from '../UI/Text';
import '../../assets/scss/components/AnalyticsReporting/UsersLocation.scss'

const UsersLocation = () => {
    return (
        <>
            <div className="user-location">
                <figure>
                    <Image src={flgImg} alt='flag-img' className='flag-icon' />
                </figure>
                <div className="info-area">
                    <Text as='h6'>30k</Text>
                    <Text as='small'>USA</Text>
                </div>
                <ProgressBar>
                    <ProgressBar
                        now={30} />
                </ProgressBar>
                <Text as='span' className='percent'><FaChevronUp /> 25.8%</Text>

            </div>
        </>
    )
}

export default UsersLocation