import React from 'react';
import { useState } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import './UserDetails.css';

const UserDetails = (props) => {
    const [userRole, setUserRole] = useState(null);
    console.log(props)
    const { displayName, email, balance, mob, adderss, role } = props.user;
    return (
        <div className="userDetails_style">
            <div className="user_sl">{props.usersl}</div>
            <div className="user_name">{displayName}</div>
            <div className="user_email">{email}</div>
            <div className="user_balance">{balance}</div>
            <div className="user_mob">{mob}</div>
            <div className="user_role_info">
                <NavDropdown title={!userRole?role:userRole} id="collasible-nav-dropdown">
                    <NavDropdown.Item onClick={()=> setUserRole('superadmin')}>Super Admin</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=> setUserRole('admin')}>Admin</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=> setUserRole('user')}>User</NavDropdown.Item>
                </NavDropdown>
            </div>
        </div>
    );
};

export default UserDetails;