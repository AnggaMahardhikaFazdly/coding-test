import React from 'react';
import './Footer.css';
import { Row, Col, Nav } from 'react-bootstrap';
import { FaInstagram } from 'react-icons/fa';
import ImgCover from '../../images/v502_768.png'

const Footer = () => {
    return (
        <div className="footer">
            <Row md={7}>
                <Col sm={3} className="footer-grid-1">
                    <img className="footer-logo" src={ImgCover} alt="logo" />
                    <p className="footer-company-name">united creative head office</p>
                    <p className="footer-company-address">wisma bali united, jalan panjang no. 29,</p>
                    <p className="footer-company-address">kedoya selatan, jakarta barat</p>
                    <p className="footer-phone-number">(021) 12345678</p>
                </Col>
                <Col sm={2} className="footer-grid-2">
                    <Nav className="flex-column" >
                        <Nav.Link className="footer-link" href="/product">products</Nav.Link>
                        <Nav.Link className="footer-link" href="/services">services</Nav.Link>
                        <Nav.Link className="footer-link" href="/works">works</Nav.Link>
                        <Nav.Link className="footer-link" href="/client">clients</Nav.Link>
                    </Nav>
                </Col>
                <Col sm={2} className="footer-grid-3">
                    <Nav className="flex-column">
                        <Nav.Link className="footer-link" href="/product">about us</Nav.Link>
                        <Nav.Link className="footer-link" href="/services">contact us</Nav.Link>
                        <Nav.Link className="footer-link" href="/works">careers</Nav.Link>
                    </Nav>
                </Col>
                <Col sm={1.5} className="footer-grid-4">
                    <a href="www.instagram.com" target='_blank' className="footer-social-media">
                        <FaInstagram />
                    </a>
                    <p className="footer-copyright">copyright &#169; 2021</p>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;