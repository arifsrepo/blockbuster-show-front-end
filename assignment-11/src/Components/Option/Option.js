import React from 'react';
import './Option.css';
import { Button } from 'react-bootstrap';

const Option = (props) => {
    console.log(props)
    const {location, img, place, minidesc} = props.options;
    return (
        <div className="option_holder">
            <div className="option_container">
                <div>
                    <img className="option_img_div" src={img} alt="" />
                </div>
                <div className="option_text">
                    <h3>{place}</h3>
                    <h6>{location}</h6>
                    <p>{minidesc}</p>
                    <Button>Cancel Plane</Button>
                </div>
            </div>
        </div>
    );
};

export default Option;