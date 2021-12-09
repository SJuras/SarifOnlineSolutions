import React from 'react';
import styled from 'styled-components';

import PageHero from '../components/PageHero.jsx';
import ProductListSingle from '../components/ProductListSingle.jsx';
import Motivation from '../components/Motivation.jsx';
import Hovercard from '../components/Hovercard.jsx';
import EndSectionDouble from '../components/EndSectionDouble.jsx';
import Footer from '../components/Footer.jsx';


const About = () => {
  return(
    <>
      <PageHero
        title1="A Few Words "
        span="About Us"
        title2="Our Work"
      />
      <ProductListSingle />
      <Motivation />
      <Hovercard
        title2="WHAT WE MAKE"
        title1="Our Prices Are "
        span="Affordable"
       />
      <EndSectionDouble
        title1="CONTACT US"
        title2="We Will Develop It For You"
        para="It’s time to increase your profit and achieve better results for your business! Browse our apps or contact us directly to enhance your business experience."
        link1="/work"
        btnText1="Our Work"
        link2="/contact"
        btnText2="Contact Us"
      />
      <Footer />
    </>
  );
}

export default About;
