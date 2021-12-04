import React from 'react';
import styled from 'styled-components';

import PageHero from '../components/PageHero.jsx';
import ProductListSingle from '../components/ProductListSingle.jsx';
import Footer from '../components/Footer.jsx';


const Work = () => {
  return(
    <>
      <PageHero
        title1="What We Did and "
        span="What We Do"
        title2="Our Work"
      />
      <ProductListSingle />
      <Footer />
    </>
  );
}

export default Work;
