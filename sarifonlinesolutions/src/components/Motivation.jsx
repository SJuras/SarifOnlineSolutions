import React from 'react';
import styled from 'styled-components';

import MotivationCard from './MotivationCard.jsx';

import { FaAtom } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";

const MotivationContainer = styled.div`
  padding: 36px 0px;
`

const SectionContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  @media (max-width: 575.98px){
    width: 90%;
  }
`

const SectionTitle = styled.div`
  margin-bottom: 60px;
  padding-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const SectionTitileH4 = styled.div`
  text-align: center;
  text-transform: uppercase;
  color: #0accbe;
  font-size: 20px;
  margin-bottom: 18px;
`

const SectionTitileH3 = styled.div`
  text-align: center;
  text-transform: capitalize;
  color: #262f3c;
  font-size: 42px;
  font-weight: 400;
  margin-bottom: 36px;
`

const InnerCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`


const Motivation = () => {
  return(
    <MotivationContainer>
      <SectionContainer>
        <SectionTitle>
          <SectionTitileH4>OUR ADVANTAGES</SectionTitileH4>
          <SectionTitileH3>Why Choose Us</SectionTitileH3>
        </SectionTitle>
        <InnerCardContainer>
          <MotivationCard
            icon=<FaAtom />
            title="Motivated Developers"
            para="Ready to deliver the final product to your desires and specifications."
          />
          <MotivationCard
            icon=<FaNetworkWired />
            title="Latest Technologies"
            para="We follow and use the latest technological trends."
           />
          <MotivationCard
            icon=<FaHandshake />
            title="Client Communication"
            para="We conduct our business with open attitude and professionalism."
          />
        </InnerCardContainer>
      </SectionContainer>
    </MotivationContainer>
  );
}

export default Motivation;
