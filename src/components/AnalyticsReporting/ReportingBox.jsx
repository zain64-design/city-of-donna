import React from 'react'
import { Card } from 'react-bootstrap'
import '../../assets/scss/components/AnalyticsReporting/ReportingBox.scss'
import Text from '../UI/Text'

const ReportingBox = ({cdHead,children}) => {
  return (
    <>
    <Card className='report-box'>
        <div className="tp-area">
            <Text as='h6'>{cdHead}</Text>
        </div>
        <div className="desc">
            {children}
        </div>
    </Card>
    </>
  )
}

export default ReportingBox