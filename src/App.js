import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import OurValue from './components/OurValue';
import Services from './components/OurServices';
import OurWorks from './components/OurWorks/index';
import OurClients from './components/OurClients';
import Footer from './components/Footer';
import { FaArrowCircleUp } from 'react-icons/fa';

function App() {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop)
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Hero />
        <AboutUs />
        <Products />
        <OurValue />
        <Services />
        <OurWorks />
        <OurClients />
        <Footer />
      </Router>
      <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{ height: 50, display: showScroll ? 'flex' : 'none' }} />
    </div>
  );
}

export default App;
