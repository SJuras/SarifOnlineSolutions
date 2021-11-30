import React from 'react';
import styled from 'styled-components';


import HeroIntro from '../components/HeroIntro.jsx';
import ScrollDownIcon from '../components/ScrollDownIcon.jsx';
import About from '../components/About.jsx';
import Footer from '../components/Footer.jsx';




const Home = () => {
  return(
    <>
      <HeroIntro />
      <ScrollDownIcon />
      <About />
      <Footer />
    </>
  );
}

export default Home;
