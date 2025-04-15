import React from 'react'
import { Card } from 'react-bootstrap'
import Image from '../UI/Image'
import Text from '../UI/Text'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const UserStatsBox = ({ boxClass = '', boxIcon = '', tpTagName = '', btmTagName = '', tpTagValue = '', btmTagValue = '' }) => {
    return (
        <>
            <Card className={boxClass}>
                <div className="ct-flex">
                    {boxClass === 'stats-box' && (
                        <figure>
                            <Image src={boxIcon} className="stat-icon" alt='statsImg' />
                        </figure>
                    )}
                    <Text as={tpTagName}>{tpTagValue}</Text>
                </div>
                <div className="desc">
                    <Text as={btmTagName}>{btmTagValue}</Text>
                </div>
            </Card>
        </>
    )
}

export default UserStatsBox