import React, { useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../hooks/useFirebase';
import './Login.css';

const Login = () => {
    const [toggler, setToggler] = useState(false);
    const { googleSignIn, emailSignIn, registerUser, user, email, password, number, setNumber, setName, setUser, saveUser, setEmail, setPassword, error, setError, setAddress, address } = useFirebase();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location?.state?.from?.pathname || '/home';

    const handleSubmit = e => {
        e.preventDefault();
        if(toggler){
            registerUser(email, password, address);
        } else {
            emailLogin(email, password)
        }
    }

    const emailLogin = () => {
        emailSignIn(email, password)
        .then((userCredential) => {
            setUser(userCredential.user);
            history.push(redirect_url);
        })
        .catch((error) => {
            setError(error.message);
        });
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
        setError(null)
    }

    const handlePassChange = e => {
        setPassword(e.target.value)
        setError(null)
    }

    const handleMobile = e => {
        setNumber(e.target.value)
        setError(null)
    }

    const handleAddress = e => {
        setAddress(e.target.value)
        setError(null)
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleGoogleLogin = () => {
        googleSignIn()
        .then((result) => {
            const user = result.user;
            setUser(user);
            saveUser(user.email, user.displayName, address, number, 'PUT')
            history.push(redirect_url);
        }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
            setUser({});
        });
    }

    const toggling = e => {
        setToggler(e.target.checked);
    }

    console.log(user)

    return (
        <div className="login_div">
            <Container className="login_container">
                <Row>
                    <Col>
                        <div className="greeting_msg">
                            <h1 className="greeting_msg_welcome">WELCOME</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi porro autem exercitationem sed alias harum totam quod aliquid dignissimos molestiae enim animi possimus ullam, numquam esse soluta modi unde.</p>
                            <h4>You can also</h4>
                            <br />
                            <Button onClick={handleGoogleLogin}>Sign In With Google</Button>
                            <br />
                        </div>
                    </Col>
                    <Col>
                        <h1>{ toggler?'Register':'Sign In'}</h1>
                        <br />
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onBlur={handleEmailChange} type="email" />
                            </Form.Group>

                            {
                                toggler?<Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control onBlur={handleNameChange} type="text" />
                                </Form.Group>:''
                            }

                            {
                                toggler?<Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Address</Form.Label>
                                <Form.Control onBlur={handleAddress} type="text" />
                                </Form.Group>:''
                            }

                            {
                                toggler?<Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control onBlur={handleMobile} type="number" />
                                </Form.Group>:''
                            }

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onBlur={handlePassChange} type="password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check onChange={toggling} type="checkbox" label="New User?" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                            { toggler?'Register':'Sign In'}
                            </Button>
                            {
                                toggler?'':<Button style={{marginLeft:"10px"}} variant="secondary">Forgotten Password?</Button>
                            }
                            <p className="erroe_massage"><b>{error}</b></p>
                        </Form>
                        <br />
                        <div className="aggrement_div">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, illum quis iusto illo distinctio sint.
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;