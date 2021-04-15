import React from 'react';
import { Carousel } from 'react-bootstrap';
import './OurValue.css';
import imgCover from '../../images/v502_1483.png';

const OurValue = () => {
    return (
        <div className="our-value">
            <h2 className="our-value-title">what make us different</h2>
            <Carousel className="our-value-carousel">
                <Carousel.Item interval={1000}>
                    <img
                        className="carousel-img"
                        src={imgCover}
                        alt="First slide"

                    />
                    <Carousel.Caption className="carousel-caption-header">
                        <h1 className="header-1">10.000</h1>
                        <h3 className="header-2">community leader</h3>
                    </Carousel.Caption>
                    <Carousel.Caption className="carousel-caption-item">
                        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitorutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="carousel-img"
                        src={imgCover}
                        alt="Second slide"
                    />
                    <Carousel.Caption className="carousel-caption-header">
                        <h1 className="header-1">10.000</h1>
                        <h3 className="header-2">community leader</h3>
                    </Carousel.Caption>
                    <Carousel.Caption className="carousel-caption-item">
                        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitorutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel-img"
                        src={imgCover}
                        alt="Third slide"
                    />
                    <Carousel.Caption className="carousel-caption-header">
                        <h1 className="header-1">10.000</h1>
                        <h3 className="header-2">community leader</h3>
                    </Carousel.Caption>
                    <Carousel.Caption className="carousel-caption-item">
                        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitorutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <hr className="bottom-line-1" />
        </div>
    )
}

export default OurValue