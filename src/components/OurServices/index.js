import React from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import './Services.css';
import ImgBg1 from '../../images/alexander-dummer-aS4Duj2j7r4-unsplash.jpg';
import ImgBg2 from '../../images/austin-distel-wD1LRb9OeEo-unsplash.jpg';
import ImgBg3 from '../../images/sam-moqadam-yjr42Sepgis-unsplash.jpg';
import ImgBg4 from '../../images/devon-janse-van-rensburg-C4rOnHaSB34-unsplash.jpg';
import ImgBg5 from '../../images/jesus-loves-austin-0O0gux4OZX4-unsplash.jpg';
import ImgBg6 from '../../images/lycs-architecture-U2BI3GMnSSE-unsplash.jpg';
import ImgBg7 from '../../images/rachel-coyne-U7HLzMO4SIY-unsplash.jpg';
import ImgBg8 from '../../images/ian-schneider-TamMbr4okv4-unsplash.jpg';
import ImgBg9 from '../../images/fancy-crave-qowyMze7jqg-unsplash.jpg';
import ImgBg10 from '../../images/janosch-diggelmann-ZBZStqTOXFU-unsplash.jpg';


const OurServices = () => {
    return (
        <div className="products">
            <div className="products-title">
                <Row md={2.5}>
                    <Col className="products-header-grid-1">
                        <h2 className="products-header-text">services</h2>
                        <p className="products-header-tagline">what we can do for you</p>
                    </Col>
                    <Col className="products-header-grid-2">
                        <Button className="products-header-button" variant="outline-danger">view all</Button>
                    </Col>
                </Row>
                <div className="products-card-list">
                    <Card className="products-card">
                        <Card.Img className="img-cover" src={ImgBg1} alt="studio rental" />
                        <Card.ImgOverlay>
                            <Card.Title className="title-card"> studio rental</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="products-card">
                        <Card.Img className="img-cover" src={ImgBg2} alt="digital marketing" />
                        <Card.ImgOverlay>
                            <Card.Title className="title-card">digital marketing</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="products-card">
                        <Card.Img className="img-cover" src={ImgBg3} alt="production house" />
                        <Card.ImgOverlay>
                            <Card.Title className="title-card">production house</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="products-card">
                        <Card.Img className="img-cover" src={ImgBg4} alt="animation house" />
                        <Card.ImgOverlay>
                            <Card.Title className="title-card">animation house</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="products-card">
                        <Card.Img className="img-cover" src={ImgBg5} alt="live streaming" />
                        <Card.ImgOverlay>
                            <Card.Title className="title-card">live streaming</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="products-card">
                        <Card.Img className="img-cover" src={ImgBg6} alt="talent management" />
                        <Card.ImgOverlay>
                            <Card.Title className="title-card">talent management</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="products-card">
                        <Card.Img className="img-cover" src={ImgBg7} alt="event organizer" />
                        <Card.ImgOverlay>
                            <Card.Title className="title-card">event organizer</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="products-card">
                        <Card.Img className="img-cover" src={ImgBg8} alt="pr-brand reputation" />
                        <Card.ImgOverlay>
                            <Card.Title className="title-card">pr & brand reputation</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="products-card">
                        <Card.Img className="img-cover" src={ImgBg9} alt="sport agency" />
                        <Card.ImgOverlay>
                            <Card.Title className="title-card">sport agency</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="products-card">
                        <Card.Img className="img-cover" src={ImgBg10} alt="merchandising" />
                        <Card.ImgOverlay>
                            <Card.Title className="title-card">merchandising</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </div>
            </div>
            <hr className="bottom-line-1" />
            <hr className="bottom-line-2" />
        </div >
    )
}

export default OurServices