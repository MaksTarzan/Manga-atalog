import React from "react";
import "./Footer.css";
import { Navbar, Container, Nav} from "react-bootstrap";

export default function Footer(){
    return(
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container>
                    <Nav className="mr-auto">
                        <Nav.Link>
                            <p className="text-xs-center">
                                &copy;{new Date().getFullYear()} by Maksym Zhylin
                            </p>
                        </Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    )
}