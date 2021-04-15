import styled from 'styled-components';
import ImgBg from '../../images/v502_724.png';

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh - 220px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1270px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 6rem);
  margin-bottom: 2rem;
  letter-spacing: 5px;
  font-style: italic;
  font-weight: 900;
`;

export const HeroBtn = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  background: transparent;
  border: 1px solid #FFFFFF;
  border-radius: 8px;
  color: #FFFFFF;
  transition: 0.2s ease-out;

  &:hover {
    background: #CA171E;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #FFFFFF;
    border: 1px solid #101010;
  }
`;

export const Dots = styled.div`
  margin-left: 32px !important;
`;
