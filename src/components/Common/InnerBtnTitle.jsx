import React from 'react'
import '../../assets/scss/components/Common/InnerBtnTitle.scss'
import { Link } from 'react-router'
import Text from '../UI/Text'

const InnerBtnTitle = ({mainTitle="",btnTitle="",navigateTo='/',btnClassName=''}) => {
  return (
    <>
    <div className="inner-btn-title">
          <Text as='h5'>{mainTitle}</Text>
          <Link to={navigateTo} className={`btn btn-title ${btnClassName}`}>{btnTitle}</Link>
        </div>
    </>
  )
}

export default InnerBtnTitle