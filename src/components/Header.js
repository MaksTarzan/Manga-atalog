import React from 'react';
import {Container, Form, Navbar, Nav, FormControl, Button} from "react-bootstrap";
import logo from '../img/logo.png';
import {Link} from "react-router-dom";


function Header() {
    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        height="60"
                        width="60"
                        className="d-inline-block align-top"
                        alt="logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About us</Nav.Link>
                        <Nav.Link as={Link} to="/contacts">Contacts</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                            //onChange={}
                        />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}



export default Header;