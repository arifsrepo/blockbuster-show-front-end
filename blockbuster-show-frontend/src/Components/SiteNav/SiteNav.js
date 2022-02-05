import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import './SiteNav.css';

const SiteNav = () => {
    const { user, accountDetails , logout } = useFirebase();
    
    return (
        <div className="nav_div">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to="/home" className="nav_menu">Home</NavLink>
                    <NavLink to="/show" className="nav_menu">Show</NavLink>
                    {
                        user?.email?'':<NavLink to="/login" className="nav_menu">Login</NavLink>
                    }
                    {
                        user?.email?<NavLink to="/myprofile" className="nav_menu">My Profile</NavLink>:''
                    }
                    {
                        user?.email?<NavLink to="/watchlater" className="nav_menu">Watch Later</NavLink>:''
                    }
                    {
                        accountDetails?.role === 'admin'?<NavLink to="/admin" className="nav_menu">Admin Dashboard</NavLink>:''
                    }
                    {
                        accountDetails?.role === 'superadmin'?<NavLink to="/admin" className="nav_menu">Admin Dashboard</NavLink>:''
                    }
                </Nav>
                <Nav>
                    <Nav.Link className="nav_menu">{accountDetails?.displayName}</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={logout}>Log Out</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default SiteNav;