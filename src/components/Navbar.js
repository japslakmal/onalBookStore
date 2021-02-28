import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';


class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar className="Navbar" variant="dark" expand="md" sticky="top">
                        <Navbar.Brand href="/" ><img
                            src="/img/logo.png"
                            width="100px"
                            height="auto"
                            className="d-inline-block align-center"
                            alt="Logo"
                        />{' '}
                        BOOKSTORE
                        </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link href="#heroSection">HOME</Nav.Link>
                            <Nav.Link href="#books">BOOKS</Nav.Link>
                            <Nav.Link href="#addBook">ADD BOOK</Nav.Link>
                            <Nav.Link href="#contactSection">CONTACT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavBar
