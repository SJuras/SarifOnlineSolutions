import React from 'react';
import styled from 'styled-components';


import HeroIntro from '../components/HeroIntro.jsx';
import ScrollDownIcon from '../components/ScrollDownIcon.jsx';
import About from '../components/About.jsx';
import Hovercard from '../components/Hovercard.jsx';
import ProductList from '../components/ProductList.jsx';
import EndSection from '../components/EndSection.jsx';
import Footer from '../components/Footer.jsx';




const Home = () => {
  return(
    <>
      <HeroIntro />
      <ScrollDownIcon />
      <About />
      <Hovercard
        title2="What we make"
        title1="Our "
        span="Products"
      />
      <ProductList />
      <EndSection
        title1="CONTACT US"
        title2="We Will Develop It For You"
        para="It’s time to increase your profit and achieve better results for your business! Browse our apps or contact us directly to enhance your business experience."
        link="/contact"
        btnText="Contact Us"
      />
      <Footer />
    </>
  );
}

export default Home;
