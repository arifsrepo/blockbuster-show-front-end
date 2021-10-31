import React, { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Login.css';

const Login = () => {
    const{ googleSignIn, isLoading, setUser, setError, user, setIsLoading, logout } = useAuth();  
    const location = useLocation();
    const history = useHistory();
    const redirectTo = location.state?.from.pathname || '/home';
    console.log(user)

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then((result) => {
          const user = result.user;
          setUser(user);
          setIsLoading(false);
          history.push(redirectTo)
          console.log(user);
          setIsLoading(false);
        }).catch((error) => {
          const email = error.email;
          setError(error)
          console.log(email);
        });
    }

    if(isLoading){
        return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
        )
    }

    return (
        <div className="login_div">
            <div className="google_login">
            <img className="google_logo" src="https://programmingtask.000webhostapp.com/p-hero/Assignment-11/image/google-g-2015-logo-png-transparent.png" alt="" />
            <br />
            <br />
            {
                user.displayName?<div><h1>{user.displayName}</h1><br /><br /><Button onClick={logout}> Logout </Button></div>:<h1> Please Login </h1>
            }
            <br />
            <br />
            <Button onClick={handleGoogleSignIn}>Sign In Using Google</Button>
            </div>
        </div>
    );
};

export default Login;