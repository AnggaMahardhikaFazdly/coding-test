import React from 'react';
import './Navbar.css';
import { Nav, NavIcon, Bars } from './NavbarStyled';
import ImgLogo from '../../images/v502_768.png';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <img src={ImgLogo} alt="logo" className="img-logo" />
                <NavIcon onClick={toggle}>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    );
};

export default Navbar;