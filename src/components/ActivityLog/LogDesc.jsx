import React from 'react'
import Text from '../UI/Text'
import '../../assets/scss/components/ActivityLog/LogDesc.scss'

const LogDesc = () => {
  return (
    <>
    <div className="log-desc">
        <Text as='h5'>Details</Text>
        <Text as='ul'>
            <Text as='li'>
                <Text as='span'>Name:</Text>
                <Text as='small'>Lorem Ipsum</Text>
            </Text>
            <Text as='li'>
                <Text as='span'>Phone:</Text>
                <Text as='small'>000 111 222 333</Text>
            </Text>
            <Text as='li'>
                <Text as='span'>Email:</Text>
                <Text as='small'>loremIpsum@gmail.com</Text>
            </Text>
        </Text>
        <Text as='h6'>Description:</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
    </div>
    </>
  )
}

export default LogDesc