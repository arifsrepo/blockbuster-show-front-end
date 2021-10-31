import React from 'react';
import { Button } from 'react-bootstrap';
import './Cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom';

const Cards = (props) => {
    const {place, cost, img, location, ratings, minidesc, _id, key} = props.packagedata;


    return (
        <div className="custome_card">
            <div className="custome_card_sub">
                <img className="card_img" src={img} alt="" />
                <p className="cards_margin">Total Rating (4.5)</p>
                <div className="icon_holder">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={farStar} />
                </div>
                <h4>{cost}</h4>
            </div>
            <div className="custome_card_sub">
                <h3>{place}</h3>
                <p className="cart_para">{minidesc}</p>
                <h6>Location : {location}</h6>
                <Link to={`/place-order/${key}`}><Button>Booking Order</Button></Link>
            </div>
        </div>
    );
};

export default Cards;