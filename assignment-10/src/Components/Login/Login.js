import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useFirebase from '../hooks/useFirebase';
import './Login.css'

const Login = () => {
    const { user, error, googleSignin, setUser, setError, logout} = useFirebase()||{};

    const handleGooglesignin = () =>{
        googleSignin()
        .then((result) => {
            const user = result.user;
            console.log(user);
            setUser(user);
        });
    }

    return (
        <div className="flexer">
            <div className="login_section">
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form>
                <Button variant="primary" type="submit"> Submit </Button>
            </div>
            <div className="login_section_right">
                {user}
                <Button onClick={handleGooglesignin}> Sign In With Google </Button>
                <br />
            </div>
        </div>
    );
};

export default Login;