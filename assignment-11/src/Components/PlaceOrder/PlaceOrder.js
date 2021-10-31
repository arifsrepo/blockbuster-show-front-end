import React from 'react';
import { useParams } from 'react-router-dom';
import './PlaceOrder.css';
import { Button } from 'react-bootstrap';
import { useEffect } from 'react';
import { useState } from 'react';
import Option from '../Option/Option';

const PlaceOrder = () => {
    const [placed, setPlaced] = useState([])
    const [keys, setKeys] = useState([])
    const [cart, setCart] = useState([])
    const{packageid} = useParams();

    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(placedOrder =>{
            placedOrder.map(res => {
                setKeys(keys => [...keys, res.order]);
            })
        })
    },[])

    useEffect(() => {
        fetch('http://localhost:5000/packages/search',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
        .then(res => res.json())
        .then(data => setCart(data))
    }, [keys])

    const handlePlaceOrder = () => {
        const orderid = {"order":packageid}
        fetch('http://localhost:5000/orders', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderid)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                 alert('New Record Added');
            }
        })
    }

    return (
        <div>
            <h1>Place An Order {packageid}</h1>
            <Button onClick={handlePlaceOrder}> Place Order </Button>
            <br />
            <br />
            <h1>Your Plan</h1>
            {
                // placed.map(order => <h1>{order.order}</h1>)
                  cart.map(data => <Option options={data}></Option>)
            }
        </div>
    );
};

export default PlaceOrder;