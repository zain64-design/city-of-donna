import React from 'react'
import { Button, Form } from 'react-bootstrap'
import '../../assets/scss/components/UI/SearchBar.scss'

const UserSearchBar = () => {
    return (
        <>
            <Form className="search-area">
                <Form.Group className='ct-flex-main'>
                    <Form.Group className='ct-flex-area'>
                        <Button variant="icon-search" type='submit'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                <g opacity="0.5">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.1413 12.7802C12.9241 11.5437 14.2208 8.18151 13.0376 5.27063C11.8544 2.35974 8.63935 1.00241 5.85656 2.23894C3.07377 3.47547 1.77704 6.83761 2.96024 9.7485C4.14344 12.6594 7.35851 14.0167 10.1413 12.7802Z" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.8667 11.5575L16.1124 16.0001" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                            </svg>
                        </Button>
                        <Form.Control type="search" className='search-inp' placeholder="Search Users" />
                    </Form.Group>
                    <Button variant="search" type='submit'>search</Button>
                </Form.Group>
            </Form>
        </>
    )
}

export default UserSearchBar