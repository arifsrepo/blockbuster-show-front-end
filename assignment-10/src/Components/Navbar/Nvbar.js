import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import './Navbar.css';

const Nvbar = () => {
    const {user} = useFirebase();
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav_log" to="/home"> Home </NavLink>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavLink className="nav_log" to="/login"> Login </NavLink>
                    </Nav>
                    </Navbar.Collapse>
                    <Navbar.Brand>{user.displayName}</Navbar.Brand>
                </Container>
                </Navbar>
        </div>
    );
};

export default Nvbar;