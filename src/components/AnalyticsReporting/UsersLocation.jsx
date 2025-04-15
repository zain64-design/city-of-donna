import React, { useEffect } from 'react'
import Image from '../UI/Image'
import { FaChevronUp,FaChevronDown } from "react-icons/fa6";
import { ProgressBar } from 'react-bootstrap';
import Text from '../UI/Text';
import '../../assets/scss/components/AnalyticsReporting/UsersLocation.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getUserLocation } from '../../utils/redux/slice/userLocation';

const UsersLocation = () => {
    const dispatch = useDispatch();
    const { data, isLoading, error } = useSelector(state => state.userLocation);

    useEffect(() => {
        dispatch(getUserLocation())
    }, [dispatch])

    return (
        <>
            {data?.map((value) => {
                const {id,title,total,thumb,percent} = value;
                const cleanedPercent = percent.replace('%', '').replace('+', '').replace('-', '') + '%';
                const numeric = parseFloat(percent.replace('%', '').replace('+', '').replace('-', ''));
                const isPositive = percent.includes('+');
                return (
                    <div className="user-location" key={id}>
                        <figure>
                            <Image src={thumb} alt='flag-img' className='flag-icon' />
                        </figure>
                        <div className="info-area">
                            <Text as='h6'>{total}</Text>
                            <Text as='small'>{title}</Text>
                        </div>
                        <ProgressBar>
                            <ProgressBar
                                now={numeric} />
                        </ProgressBar>
                        <Text as='span' className={`percent ${isPositive ? 'txt-green': 'txt-red'}`}> {isPositive ? <FaChevronUp />:<FaChevronDown />} {cleanedPercent}</Text>
                    </div>
                )
            })}
        </>
    )
}

export default UsersLocation