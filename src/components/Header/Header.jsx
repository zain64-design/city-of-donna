import React from 'react';
import { NavLink } from 'react-router';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../assets/scss/layout/header.scss';
import userProfile from '/images/user.png';
import useScrollNav from '../../utils/hooks/useScrollNav';
import { RxHamburgerMenu } from "react-icons/rx";
import useAOS from '../../utils/hooks/useAOS';

const Header = () => {
    const scrolled = useScrollNav();
    useAOS();

    return (
        <header data-aos="fade-down" className={`${scrolled ? 'sticky' : ''}`}>
            <Navbar expand="sm">
                <Container fluid className='px-2 px-sm-5 px-md-5 px-lg-5 px-xl-5 px-xxl-5'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <RxHamburgerMenu />
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="flex-wrap align-items-center justify-content-center justify-content-sm-between justify-content-md-between justify-content-lg-between justify-content-xl-between justify-content-xxl-between w-100 gap-3">
                            <li className="nav-item">
                                <div className="user-details">
                                    <h6><span>Hi,</span> Ron Steve</h6>
                                    <p>Welcome to Admin Panel</p>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="d-flex align-items-center gap-3">
                                    <NavLink to="/settings" className="user-profile-area">
                                        <img src={userProfile} className="img-fluid" alt="Profile" />
                                        <div className="desc">
                                            <h6>Ron Steve</h6>
                                            <span>Super Admin</span>
                                        </div>
                                    </NavLink>
                                    {/* <NavLink to='/notifications' className='bell-icon'>
                                        <div className="icon-area">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" fill="none">
                                                <path d="M10.0017 18.5235C7.93431 18.5235 5.86747 18.5246 3.80012 18.523C2.90604 18.5219 2.21674 17.9883 2.0394 17.1512C1.93754 16.672 2.03518 16.225 2.3091 15.8154C2.73345 15.181 3.15779 14.5466 3.57316 13.9069C3.63281 13.8151 3.67133 13.6905 3.67186 13.5813C3.6782 12.0142 3.67397 10.4478 3.67661 8.88074C3.68083 6.08873 5.37874 3.72264 8.01981 2.82381C11.5016 1.63892 15.3772 3.82081 16.151 7.41771C16.2555 7.90275 16.3046 8.40784 16.3109 8.9045C16.3309 10.4578 16.3162 12.0116 16.3225 13.5654C16.3225 13.681 16.3616 13.8124 16.4244 13.9095C16.8477 14.5603 17.2905 15.1984 17.7116 15.8502C18.3714 16.872 17.8462 18.1926 16.6719 18.4712C16.5014 18.5119 16.3199 18.5214 16.143 18.5219C14.0957 18.5251 12.0484 18.524 10.0011 18.524L10.0017 18.5235Z" fill="black" />
                                                <path d="M7.64453 19.3688H12.3435C12.2458 20.1784 11.1258 21.0012 10.0613 21.0487C9.00729 21.0957 7.8282 20.2787 7.64453 19.3688Z" fill="black" />
                                            </svg>
                                        </div>
                                    </NavLink> */}
                                </div>
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;