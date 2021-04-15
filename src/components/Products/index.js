import React from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import './Products.css';
import ImgBg1 from '../../images/Logo Bali United 2.png';
import ImgBg2 from '../../images/Logo Bali United 2.png';
import ImgBg3 from '../../images/Rectangle 118.png';
import ImgBg4 from '../../images/1 3.png';
import ImgBg5 from '../../images/rahasia-gadis 1 1.png';
import ImgBg6 from '../../images/21433318_1861493460544006_560472504615829504_a 1.png';
import ImgBg7 from '../../images/Mask Group.png';
import ImgBg8 from '../../images/image 8 1.png';
import ImgBg9 from '../../images/Mask Group (1).png';
import ImgBg10 from '../../images//bola nusantara@4x 1.png';


const Products = () => {
    return (
        <div className="products">
            <div className="products-title">
                <Row md={2.5}>
                    <Col className="products-header-grid-1">
                        <h2 className="products-header-text">products</h2>
                        <p className="products-header-tagline">what we can do for you</p>
                    </Col>
                    <Col className="products-header-grid-2">
                        <Button className="products-header-button" variant="outline-danger">view all</Button>
                    </Col>
                </Row>
                <div className="products-card-list">
                    <Card className="products-card">
                        <Card.Body className="body-card-1">
                            <Card.Img className="img-cover-1" src={ImgBg1} />
                            <Card.Title className="title-card-1">bali united fc</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="products-card">
                        <Card.Body className="body-card-2">
                            <Card.Img className="img-cover-2" src={ImgBg2} />
                            <Card.Title className="title-card-2">bali united basket</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="products-card">
                        <Card.Body className="body-card-3">
                            <Card.Img className="img-cover-3" src={ImgBg3} />
                            <Card.Title className="title-card-3">island of gods</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="products-card">
                        <Card.Body className="body-card-4">
                            <Card.Img className="img-cover-4" src={ImgBg4} />
                            <Card.Title className="title-card-4">kvibes</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="products-card">
                        <Card.Body className="body-card-5">
                            <Card.Img className="img-cover-5" src={ImgBg5} />
                            <Card.Title className="title-card-5">rahasia gading</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="products-card">
                        <Card.Body className="body-card-6">
                            <Card.Img className="img-cover-6" src={ImgBg6} />
                            <Card.Title className="title-card-6">laper story group</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="products-card">
                        <Card.Body className="body-card-7">
                            <Card.Img className="img-cover-7" src={ImgBg7} />
                            <Card.Title className="title-card-7">parenting group</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="products-card">
                        <Card.Body className="body-card-8">
                            <Card.Img className="img-cover-8" src={ImgBg8} />
                            <Card.Title className="title-card-8">millennials group</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="products-card">
                        <Card.Body className="body-card-9">
                            <Card.Img className="img-cover-9" src={ImgBg9} />
                            <Card.Title className="title-card-9">komik dimsum</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="products-card">
                        <Card.Body className="body-card-10">
                            <Card.Img className="img-cover-10" src={ImgBg10} />
                            <Card.Title className="title-card-10">bola nusantara</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <hr className="bottom-line-1" />
            <hr className="bottom-line-2" />
        </div >
    )
}

export default Products