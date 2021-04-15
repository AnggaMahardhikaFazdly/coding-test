import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './OurClients.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import ImgCover1 from '../../images/v502_749.png';
import ImgCover2 from '../../images/v502_751.png';
import ImgCover3 from '../../images/v502_744.png';
import ImgCover4 from '../../images/v502_753.png';
import ImgCover5 from '../../images/v502_745.png';
import ImgCover6 from '../../images/v502_759.png';
import ImgCover7 from '../../images/v502_746.png';
import ImgCover8 from '../../images/v502_761.png';
import ImgCover9 from '../../images/v502_747.png';
import ImgCover10 from '../../images/v502_754.png';
import ImgCover11 from '../../images/v502_748.png';
import ImgCover12 from '../../images/v502_742.png';
import ImgCover13 from '../../images/v502_756.png';
import ImgCover14 from '../../images/v502_757.png';

const OurClients = () => {
    return (
        <div className="our-clients">
            <div className="our-clients-title">
                <Row md={2.5}>
                    <Col className="clients-header-grid-1">
                        <h2 className="clients-header-text">clients</h2>
                        <p className="clients-header-tagline">our happy client</p>
                    </Col>
                    <Col className="clients-header-grid-2">
                        <Button className="clients-header-button" variant="outline-danger">view all</Button>
                    </Col>
                </Row>
            </div>
            <div className="carousel-clients">
                <Row md={7}>
                    <Col sm={1} className="carousel-grid-1">
                        <a href="www.instagram.com">
                            <FontAwesomeIcon icon={faChevronCircleLeft} color="#CA171E" size="3x" />
                        </a>
                    </Col>
                    <Col className="carousel-grid-2">
                        <img className="clients-img" src={ImgCover1} alt="indomie" />
                        <img className="clients-img" src={ImgCover2} alt="indomilk" />
                        <img className="clients-img" src={ImgCover2} alt="indomilk" />
                    </Col>
                    <Col className="carousel-grid-3">
                        <img className="clients-img" src={ImgCover3} alt="bola-nusantara" />
                        <img className="clients-img" src={ImgCover4} alt="mobil" />
                        <img className="clients-img" src={ImgCover4} alt="mobil" />
                    </Col>
                    <Col className="carousel-grid-4">
                        <img className="clients-img" src={ImgCover5} alt="bos" />
                        <img className="clients-img" src={ImgCover6} alt="achilles" />
                        <img className="clients-img" src={ImgCover6} alt="achilles" />
                    </Col>
                    <Col className="carousel-grid-5">
                        <img className="clients-img" src={ImgCover7} alt="corsa" />
                        <img className="clients-img" src={ImgCover8} alt="aishaderm" />
                        <img className="clients-img" src={ImgCover8} alt="aishaderm" />
                    </Col>
                    <Col className="carousel-grid-6">
                        <img className="clients-img" src={ImgCover9} alt="elevenia" />
                        <img className="clients-img" src={ImgCover10} alt="planet-ban" />
                        <img className="clients-img" src={ImgCover10} alt="planet-ban" />
                    </Col>
                    <Col className="carousel-grid-7">
                        <img className="clients-img" src={ImgCover11} alt="indofood" />
                        <img className="clients-img" src={ImgCover12} alt="bareksa" />
                        <img className="clients-img" src={ImgCover12} alt="bareksa" />
                    </Col>
                    <Col className="carousel-grid-8">
                        <img className="clients-img" src={ImgCover13} alt="sari-roti" />
                        <img className="clients-img" src={ImgCover14} alt="aca" />
                        <img className="clients-img" src={ImgCover14} alt="aca" />
                    </Col>
                    <Col className="carousel-grid-9">
                        <a href="www.instagram.com">
                            <FontAwesomeIcon icon={faChevronCircleRight} color="#CA171E" size="3x" />
                        </a>
                    </Col>
                </Row>
            </div>
            <div className="headline-clients">
                <h3 className="tagline-clients">let's create <span className="mark-tagline-clients">creative project</span></h3>
                <Button className="btn-action-clients" variant="outline-danger">start project with us</Button>
            </div>
        </div >
    )
}

export default OurClients