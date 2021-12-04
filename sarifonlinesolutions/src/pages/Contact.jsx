import React from 'react';
import styled from 'styled-components';

import Globe from '../assets/globe.png';

import PageHero from '../components/PageHero.jsx';
import ProductListSingle from '../components/ProductListSingle.jsx';
import Footer from '../components/Footer.jsx';


const Contact = () => {
  return(
    <>
      <PageHero
        title1="Contact Us "
        span=""
        title2="Our Work"
        src={Globe}
      />
      <ProductListSingle />
      <Footer />
    </>
  );
}

export default Contact;
