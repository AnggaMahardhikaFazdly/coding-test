import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import './Hero.css';
import {
    HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroBtn,
    Dots
} from './HeroStyled';

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <HeroContainer>
                <Navbar toggle={toggle} />
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <HeroContent>
                    <HeroItems className="hero-item">
                        <HeroH1>28 Million Community</HeroH1>
                        <HeroBtn>Lets Work With Us</HeroBtn>
                    </HeroItems>
                    <Dots>
                        <input className="dot-1" id="image1" name="image"></input>
                        <input className="dot-2" id="image2" name="image"></input>
                        <input className="dot-3" id="image3" name="image"></input>
                    </Dots>
                </HeroContent>
            </HeroContainer>
        </div>
    );
};

export default Hero;