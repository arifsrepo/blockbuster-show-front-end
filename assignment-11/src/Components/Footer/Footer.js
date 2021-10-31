import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faUser} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <br />
                <br />
                <div className="footer_section">
                    <h3>Join With Us..</h3>
                        <div className="fotter_contacat">
                            <FontAwesomeIcon icon={faPhone} /><h6 className="footer_text">0987654</h6>
                        </div>
                        <br />
                        <div className="fotter_contacat">
                            <FontAwesomeIcon icon={faUser} /><h6 className="footer_text">0987654</h6>
                        </div>
                </div>
                <div className="footer_section border_left">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis illum a dicta distinctio ullam quidem ex quisquam vero blanditiis architecto aspernatur optio labore praesentium neque, amet quasi velit deleniti ut aliquam. Facere labore ratione ab odit autem maxime, porro animi?
                </div>
                <div className="footer_section border_left">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita reiciendis cumque, unde tempora voluptatem animi, eos ipsa quia distinctio ducimus quas?
                </div>
            </div>
        </div>
    );
};

export default Footer;