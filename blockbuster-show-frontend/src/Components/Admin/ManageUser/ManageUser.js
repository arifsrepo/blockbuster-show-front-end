import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';
import './ManageUser.css';
import UserDetails from '../../UserDetails/UserDetails';

const ManageUser = () => {
    const [alluser, setAlluser] = useState([]);
    const { user, accountDetails, authloading } = useFirebase();
    const [permissionReport, setPermissionRemort] = useState(null);

    useEffect(()=> {
        setPermissionRemort(null);
        if(accountDetails.superadminkey){
            console.log('Sending Request')
            fetch('http://localhost:5000/allusers',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify({"adminkey":accountDetails?.superadminkey})
            })
            .then(res => res.json())
            .then(alluser => {setAlluser(alluser)})
        } else{
            setPermissionRemort('Only Super Admin Can View This')
        }
    },[accountDetails])

    if(authloading){
        return(<div><Spinner animation="border" variant="danger" /></div>)
    }

    return (
        <div className="alluser_holder">
            <h1>Manage User</h1>
            <div className="userDetails_style">
                <div className="user_sl">S/L</div>
                <div className="user_name">User Name</div>
                <div className="user_email">User Email</div>
                <div className="user_balance">Balance</div>
                <div className="user_mob">Mob</div>
                <div className="user_info">Role</div>
            </div>
            <br />
            {
                alluser.map((user, index) =><UserDetails usersl={index} user={user}></UserDetails>)
            }
            <h4>{permissionReport}</h4>
        </div>
    );
};

export default ManageUser;