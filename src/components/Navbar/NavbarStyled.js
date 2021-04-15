import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaAlignJustify } from 'react-icons/fa';

export const Nav = styled.nav`
  background: transparent;
  height: 100px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: flex-start;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(FaAlignJustify)`
  font-size: 2rem;
  transform: translate(-100%, 100%);

  &:hover {
    color: #CA171E;
    transition: 0.2s ease-in-out;
  }
`;
