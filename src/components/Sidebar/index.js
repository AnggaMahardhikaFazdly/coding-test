import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
} from './SidebarStyled';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to='/about'>About Us</SidebarLink>
                <SidebarLink to='/products'>Products</SidebarLink>
                <SidebarLink to='/services'>Services</SidebarLink>
                <SidebarLink to='/clients'>Clients</SidebarLink>
            </SidebarMenu>
        </SidebarContainer >
    );
};

export default Sidebar;