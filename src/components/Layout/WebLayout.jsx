import React from 'react'
import Header from '../Header/Header'
import SideBar from '../Sidebar/SideBar'
import { Outlet } from 'react-router'

const WebLayout = () => {
    return (
        <>
            <Header />
            <main>
                <SideBar />
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