import React from 'react'
import useGoBack from '../../utils/hooks/useGoBack';
import CustomBtn from '../UI/CustomBtn';
import Text from '../UI/Text';
import '../../assets/scss/components/Common/InnerBannerTitle.scss'

const InnerBannerTitle = ({ bannerClass = '', buttonClass = '', mainHead = '', mainHeadClass="" }) => {
    const goBack = useGoBack();

    const ArrowBackIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
            <path d="M14.7282 7.59585H1.66568C1.06033 7.59585 0.569824 7.10534 0.569824 6.5C0.569824 5.89465 1.06033 5.40414 1.66568 5.40414H14.7282C15.3336 5.40414 15.8241 5.89465 15.8241 6.5C15.8241 7.10534 15.3336 7.59585 14.7282 7.59585Z" fill="black" />
            <path d="M6.68429 12.7792C6.41777 12.7792 6.15039 12.6824 5.93954 12.4869L0.3507 7.30349C0.125393 7.0944 -0.00216392 6.80028 2.77858e-05 6.49256C0.00221949 6.18529 0.133283 5.89248 0.361659 5.68646L6.10392 0.503077C6.55322 0.0976115 7.24624 0.133117 7.6517 0.582416C8.05717 1.03172 8.02166 1.72473 7.57236 2.1302L2.71905 6.51097L7.4299 10.8799C7.8735 11.2915 7.8998 11.985 7.4882 12.4286C7.2721 12.6613 6.97885 12.7792 6.68429 12.7792Z" fill="black" />
        </svg>
    )
    return (
        <>
            <div className={`inner-banner ${bannerClass}`}>
                <CustomBtn onClick={goBack} buttonClass={buttonClass} icon={<ArrowBackIcon/>} />
                <Text as='h6' className={mainHeadClass}>{mainHead}</Text>
            </div>
        </>
    )
}

export default InnerBannerTitle