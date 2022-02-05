import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import GeneredNav from '../GeneredNav/GeneredNav';
import SiteDetails from '../SiteDetails/SiteDetails';
import TheaterSection from '../TheaterSection/TheaterSection';
import './SectionToday.css';

const SectionToday = () => {
    return (
        <div className="todays_show">
            <Container>
            <Row>
                <Col sm={12} xs={12} md={8} className="generes_div">
                    <h4>IN GENERES</h4>
                    <GeneredNav></GeneredNav>
                    <br />
                    <h4>IN THEATER</h4>
                    <br />
                    <TheaterSection></TheaterSection>
                </Col>
                <Col sm={12} xs={12} md={4}>
                    <SiteDetails></SiteDetails>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default SectionToday;