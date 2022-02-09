import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <br />
            <br />
            <div className="footer_sub">
                <h5>Our Team</h5>
                <div className="team_style">
                    <br />
                    <p>Blockbuster Production House</p>
                    <p>Always Upstream Ltd</p>
                    <p>Server Plex Org</p>
                    <hr />
                    <p>Tearms & Conditions</p>
                    <p>Refund Policy</p>
                </div>
            </div>
            <div className="footer_sub">
                <h5>Developers</h5>
                <div className="team_style">
                    <br />
                    <h4>Md Ariful Islam</h4>
                    <p className="dev_text">MERN Stack Developers</p>
                    <p className="dev_text">Email : arif.me.40943@gmail.com</p>
                </div>
            </div>
            <div className="footer_sub">
                <h5>Payment</h5>
                <br />
                <div className="team_style">
                    <img className="payment_img" src="https://programmingtask.000webhostapp.com/p-hero/Images/pay.jpg" alt="" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;