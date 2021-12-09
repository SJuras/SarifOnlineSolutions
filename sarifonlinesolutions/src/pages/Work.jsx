import React from 'react';
import styled from 'styled-components';

import PageHero from '../components/PageHero.jsx';
import ShowcaseIntro from '../components/ShowcaseIntro.jsx';
import Portfolio from '../components/Portfolio.jsx';
import Portfolio2 from '../components/Portfolio2.jsx';
import EndSection from '../components/EndSection';
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
       <Portfolio />
       <ShowcaseIntro
         subintro="WHAT WE DO"
         title="Our Services"
         innerTitle="Web Apps"
         paraLine="Sarif Online Solutions takes every client's demand with professionalism"
         para="From humble beginnings, Sarif has learned through experience and growth."
         src={SolidityImage}
        />
        <Portfolio2 />
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
           <EndSection
             title1="CONTACT US"
             title2="You Can Be Our Next Client"
             para="It’s time to increase your profit and achieve better results for your business! Browse our apps or contact us directly to enhance your business experience."
             link="/contact"
             btnText="Contact Us"
           />
      <Footer />
    </>
  );
}

export default Work;
