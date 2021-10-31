import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carosel.css';

const Carosel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <div className="carosel_img">
                        <img
                        className="d-block w-100"
                        src="https://programmingtask.000webhostapp.com/p-hero/Assignment-11/Carosel_Image/img6.jpg"
                        alt="First slide"
                        />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carosel_img">
                        <img
                        className="d-block w-100"
                        src="https://assets.wego.com/image/upload/v1611848131/country-pages/bd.jpg"
                        alt="Second slide"
                        />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carosel_img">
                        <img
                        className="d-block w-100"
                        src="https://travelbd.xyz/en/wp-content/uploads/2018/07/travelBD.jpg"
                        alt="Third slide"
                        />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carosel_img">
                        <img
                        className="d-block w-100"
                        src="https://s3.ivisa.com/website-assets/blog/bangladeshivisa.png"
                        alt="First slide"
                        />
                    <Carousel.Caption>
                    <h3>Fourth slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Carosel;