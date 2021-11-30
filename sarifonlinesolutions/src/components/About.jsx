import React from 'react';
import styled from 'styled-components';

import ServiceBox from './ServiceBox.jsx';

import { FaLaptopCode } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";


const AboutSection = styled.div`
  padding: 100px 20px 100px;
  @media (max-width: 575.98px){
    padding: 30px 10px 30px;
  }
`

const AboutInner = styled.div`
  width: 70%;
  margin: 0 auto;
  @media (max-width: 575.98px){
    width: 90%;
  }
`

const AboutTitleContainer = styled.div`
  margin-bottom: 60px;
  padding-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 575.98px){
    margin-bottom: 20px;
  }
`

const AboutTitleContainerH4 = styled.h4`
  text-align: center;
  text-transform: uppercase;
  color: #0accbe;
  font-size: 20px;
  margin-bottom: 18px;
`
const AboutTitleContainerH3 = styled.h3`
  text-align: center;
  text-transform: capitalize;
  color: #262f3c;
  font-size: 42px;
  font-weight: 400;
  margin-bottom: 36px;
`

const ServicesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

const About = () => {
  return(
    <AboutSection>
      <AboutInner>
        <AboutTitleContainer>
          <AboutTitleContainerH4>What we do</AboutTitleContainerH4>
          <AboutTitleContainerH3>Our Services</AboutTitleContainerH3>
        </AboutTitleContainer>
        <ServicesContainer>
          <ServiceBox
            icon=<FaLaptopCode size="60px" style={{color: "#0accbe", marginBottom: "12px"}} />
            title="Web Design"
            para1="Designing websites for your small businesses. Helping you build your brand."
          />
          <ServiceBox
            icon=<FaMobileAlt size="60px" style={{color: "#0accbe", marginBottom: "12px"}} />
            title="App Design"
            para1="We develop custom made apps tailored to your specific needs. Taking your business to the next level."
          />
          <ServiceBox
            icon=<FaCogs size="60px" style={{color: "#0accbe", marginBottom: "12px"}} />
            title="SEO"
            para1="Search Engine Optimisation Bringing more traffic to your website, let your customers find you."
          />
          <ServiceBox
            icon=<FaPencilAlt size="60px" style={{color: "#0accbe", marginBottom: "12px"}} />
            title="Copywriting"
            para1="Writing catchy text for your website and marketing material Telling the story of your brand."
          />
        </ServicesContainer>
      </AboutInner>
    </AboutSection>
  );
}

export default About;
