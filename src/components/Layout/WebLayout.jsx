import React from 'react'
import Header from '../Header/Header'
import AsideBar from '../SideBar/AsideBar'
import { Outlet } from 'react-router'

const WebLayout = () => {
    return (
        <>
            <Header />
            <main>
                <AsideBar />
                <section className='sec-main'>
                    <div className="container-fluid">
                        <div className="inner-area">
                            <Outlet />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default WebLayout