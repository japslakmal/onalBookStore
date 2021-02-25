import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
    return (
        <div className="footer">
                <Navbar variant="dark" className="justify-content-between">
                        <Navbar.Brand href="/" ><img
                            src="/img/logo.png"
                            width="80px"
                            height="auto"
                            className="ml-3"
                            className="d-inline-block align-center"
                            alt="Logo"
                        />{' '}
                        BookStore
                        </Navbar.Brand>
                        <Navbar id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link href="https://www.instagram.com/" target="_blank"><FaInstagram /></Nav.Link>
                            <Nav.Link href="https://twitter.com/?lang=en" target="_blank"><FaTwitter /></Nav.Link>
                            <Nav.Link href="https://www.facebook.com/Onaal-Bookshop-Printers-111348603939217/" target="_blank"><FaFacebookF /></Nav.Link>
                        </Nav>
                        </Navbar>
                </Navbar>
        </div>
    )
}
export default Footer