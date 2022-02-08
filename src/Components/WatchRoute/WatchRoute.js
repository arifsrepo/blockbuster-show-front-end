import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useFirebase from '../hooks/useFirebase';

const WatchRoute = ({ children, ...rest }) => {
    const { user, authloading, accountDetails } = useFirebase();
    const [watch, setWatch] = useState({})
    const show = rest?.computedMatch?.params?.show;
    const watchid = rest?.computedMatch?.params?.watchid;

    
    useEffect(() => {
        // fetch(`https://aqueous-peak-41377.herokuapp.com/watch${show}/${watchid}`)
        fetch(`http://localhost:5000/watch${show}/${watchid}`)
        .then(res => res.json())
        .then(watch => setWatch(watch))
    },[])

    if(authloading){
        return(<div><Spinner animation="border" variant="danger" /></div>)
    }
    const balance = accountDetails?.balance;
    const cost = parseInt(watch?.cost)

    
    if(user.email){
        console.log(user.email, cost, balance);
        console.log('start conditioning....')
        if(cost && balance){
            console.log('if');
            return (
                <Route
                    {...rest}
                    render={({ location }) =>
                        user.email && balance > cost? (
                        children
                        ) :(
                        <Redirect
                            to={{
                            pathname: "/myprofile",
                            state: { from: location }
                            }}
                        />
                        )
                    }
                />
            );
        }
    } else{
        console.log('else');
        return (
            <Route
                {...rest}
                render={({ location }) =>
                    user.email && balance > cost? (
                    children
                    ) :(
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
    }
    return(
        <div className="loading_admin_route"><Spinner animation="border" variant="danger" /></div>
    )
};

export default WatchRoute;