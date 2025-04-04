import React from 'react'
import useGoBack from '../../utils/hooks/useGoBack';

const InnerBannerTitle = ({bannerClass='',buttonClass='',subHead='',mainHead=''}) => {
    const goBack = useGoBack();
  return (
    <>
    <div className="inner-banner">
        Button
    </div>
    </>
  )
}

export default InnerBannerTitle