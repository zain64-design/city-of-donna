import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';
import Text from '../UI/Text'
import usePasswordToggle from '../../utils/hooks/usePasswordToggle';
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";
import { Link } from 'react-router';
import '../../assets/scss/components/Auth/SignForm.scss'

const SignForm = () => {

    const { isPasswordVisible, passwordToggle } = usePasswordToggle()

  return (
    <>
      <div className='login-form'>
        <div className="form-head">
          <Text as='h6'>Welcome</Text>
          <Text as='p'>Please enter your credentials to continue</Text>
        </div>
        <Form>
          <Row>
            <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <Form.Group className="inp-area">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" className='ct-inp' name="email" placeholder='Enter Your Email' />
              </Form.Group>
            </Form.Group>
            <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <Form.Group className="inp-area position-relative">
                <Form.Label>Password</Form.Label>
                <Form.Control type={isPasswordVisible['password1'] ? 'text' : 'password'} className='ct-inp' name="password" placeholder='Enter Your Password' />
                <Button type="button" variant='toggle' onClick={() => passwordToggle('password1')}>{isPasswordVisible['password1'] ? <PiEyeLight /> : <PiEyeSlash />}</Button>
              </Form.Group>
            </Form.Group>
            <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <Text as='span'>Forgot your password? <Link to='/'>Reset Now</Link> </Text>
            </Form.Group>
            <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <Link className='btn-submit' to='/dashboard'>sign in</Link>
            </Form.Group>
            {/* <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <Text as='span'>Don’t have an account? <Link to='/'>Sign Up</Link> </Text>
            </Form.Group> */}
          </Row>
        </Form>
      </div>
    </>
  )
}

export default SignForm