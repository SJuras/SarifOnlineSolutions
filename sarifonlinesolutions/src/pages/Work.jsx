import React from 'react';
import styled from 'styled-components';

import PageHero from '../components/PageHero.jsx';
import ShowcaseIntro from '../components/ShowcaseIntro.jsx';
import Footer from '../components/Footer.jsx';

import SolidityImage from '../assets/solidity.png';


const Work = () => {
  return(
    <>
      <PageHero
        title1="What We Did and "
        span="What We Do"
        title2="Our Work"
      />
      <ShowcaseIntro
        subintro="WHAT WE DO"
        title="Our Services"
        innerTitle="Decentralized Apps"
        paraLine="Sarif Online Solutions takes every client's demand with professionalism"
        para="From humble beginnings, Sarif has learned through experience and growth."
        src={SolidityImage}
       />
       <ShowcaseIntro
         subintro="WHAT WE DO"
         title="Our Services"
         innerTitle="Web Apps"
         paraLine="Sarif Online Solutions takes every client's demand with professionalism"
         para="From humble beginnings, Sarif has learned through experience and growth."
         src={SolidityImage}
        />
        <ShowcaseIntro
          subintro="WHAT WE DO"
          title="Our Services"
          innerTitle="Websites and Web Design"
          paraLine="Sarif Online Solutions takes every client's demand with professionalism"
          para="From humble beginnings, Sarif has learned through experience and growth."
          src={SolidityImage}
         />
         <ShowcaseIntro
           subintro="WHAT WE DO"
           title="Our Services"
           innerTitle="Graphic Design"
           paraLine="Sarif Online Solutions takes every client's demand with professionalism"
           para="From humble beginnings, Sarif has learned through experience and growth."
           src={SolidityImage}
          />
          <ShowcaseIntro
            subintro="WHAT WE DO"
            title="Our Services"
            innerTitle="Logo Design"
            paraLine="Sarif Online Solutions takes every client's demand with professionalism"
            para="From humble beginnings, Sarif has learned through experience and growth."
            src={SolidityImage}
           />
      <Footer />
    </>
  );
}

export default Work;
