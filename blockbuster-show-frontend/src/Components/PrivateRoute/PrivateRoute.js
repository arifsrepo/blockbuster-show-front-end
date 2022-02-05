import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useFirebase from '../hooks/useFirebase';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, authloading } = useFirebase();

    if(authloading){
        return(<div><Spinner animation="border" variant="danger" /></div>)
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
         />
    );
};

export default PrivateRoute;