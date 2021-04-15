import React from 'react';
import CarouselItem from './Carousel';
import './OurWorks.css';
import ImgCover1 from '../../images/v691_2372.png';
import ImgCover2 from '../../images/v691_2366.png';
import ImgCover3 from '../../images/v733_1558.png';

function Carousel() {
    return (
        <div className="carousel-works">
            <h2 className="our-works-title">our works</h2>
            <CarouselItem
                show={3}
                infiniteLoop
                withIndicator
            >
                <img className="works-img" src={ImgCover1} alt="bali-festival" />
                <img className="works-img" src={ImgCover2} alt="rexona-men" />
                <img className="works-img" src={ImgCover3} alt="indomie-geprek" />
                <img className="works-img" src={ImgCover1} alt="bali-festival" />
                <img className="works-img" src={ImgCover2} alt="rexona-men" />
                <img className="works-img" src={ImgCover3} alt="indomie-geprek" />
                <img className="works-img" src={ImgCover1} alt="bali-festival" />
                <img className="works-img" src={ImgCover2} alt="rexona-men" />
                <img className="works-img" src={ImgCover3} alt="indomie-geprek" />
            </CarouselItem>
            <div className="dots">
                <input className="dot-1" id="image1" name="image"></input>
                <input className="dot-2" id="image2" name="image"></input>
                <input className="dot-3" id="image3" name="image"></input>
            </div>
            <hr className="bottom-line" />
        </div>
    );
}

export default Carousel;