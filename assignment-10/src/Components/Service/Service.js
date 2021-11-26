import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Servive.css'

const Service = (props) => {
    const{ id, img, service } = props.service;
    return (
        <div className="card_gap">
            <Card key={id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{service}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;