import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useFirebase from '../hooks/useFirebase';
import './AdminRoute.css';

const AdminRoute = ({ children, ...rest }) => {
    const { user, accountDetails, authloading, detLoading, setDetLoading } = useFirebase();

    if(!authloading && !user?.email && detLoading){
        console.log('condition detectyed')
        setDetLoading(false);
    }

    console.log('loading report : ', authloading, detLoading);
    
    if(!authloading  && !detLoading){
        console.log('user : ', user, 'account details : ', accountDetails);
        return(
            <Route
                {...rest}
                render={({ location }) => 
                    user.email && (accountDetails.role === 'superadmin' || accountDetails.role === 'admin') ? (
                    children
                    ) : (
                    <Redirect
                        to={{
                        pathname: "/myprofile",
                        state: { from: location }
                        }}
                    />
                    )
                }
             />
        )
    }

    return (
         <div className="loading_admin_route">
             <Spinner animation="border" variant="danger" />
         </div>
    );
};

export default AdminRoute;