import React from 'react';
import styled from 'styled-components';

import PageHero from '../components/PageHero.jsx';
import ProductListSingle from '../components/ProductListSingle.jsx';
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
      <Footer />
    </>
  );
}

export default About;
