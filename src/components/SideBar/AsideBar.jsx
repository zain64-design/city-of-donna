import React from 'react';
import { NavLink } from 'react-router';
import Logo from '/images/logo.png';
import Image from '../UI/Image';
import useSideBarToggle from '../../utils/hooks/useSideBarToggle';
import '../../assets/scss/layout/sidebar.scss'
import Links from './Links';
import { FaChevronRight } from "react-icons/fa6";
import useAOS from '../../utils/hooks/useAOS';

const AsideBar = () => {

    useAOS();
    const [isSidebarOpen,toggleSidebar] = useSideBarToggle(null);

    return (
        <aside data-aos="fade-right" className={`side-bar ${isSidebarOpen ? 'sidebar-close' : 'sidebar-open'}`}>
            <button className="side-bar-toggle" onClick={toggleSidebar}>
              <FaChevronRight />
            </button>
            <div className="side-top">
                <div className="side-logo">
                    <NavLink to="/dashboard">
                        <Image src={Logo} className="thumb-xl" alt="logo" />
                        {/* <Image src={Logosm} className="thumb-sm" alt="logo" /> */}
                    </NavLink>
                </div>
            </div>
            <div className="menu-main">
                <div className="menu-area">
                    <Links/>
                </div>
            </div>
        </aside>
    );
};

export default AsideBar;