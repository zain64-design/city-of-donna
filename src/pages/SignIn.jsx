import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import '../assets/scss/components/Auth/SignIn.scss'
import SignForm from '../components/Auth/SignForm'
import logo from '/images/logo.png'
import Image from '../components/UI/Image'
import useAOS from '../utils/hooks/useAOS'

const SignIn = () => {
    useAOS();
    return (
        <>
            <section data-aos="fade-in" className="sec-auth-area">
                <Container>
                    <Row className='justify-content-center'>
                        <Col xs={12} sm={12} md={12} lg={12} xl={10} xxl={10}>
                            <Card className='sign-box'>
                                <Row className='align-items-center'>
                                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                                        <figure>
                                            <Image src={logo} className="logo m-auto d-block" />
                                        </figure>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                                    <SignForm/>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SignIn