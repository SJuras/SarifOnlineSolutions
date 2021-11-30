import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FaChevronRight } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";

import Dots from '../assets/dots.png';
import Smartphone from '../assets/smartphone.png';


const HeroSection = styled.div`
  width: 100%;
  height: 70vh;
  position: relative;
  background-color: #5a5fd9;
  border-radius: 0px 0px 0px 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 575.98px){
    height: 90vh;
  }
`

const HeroContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  @media (max-width: 575.98px){
    width: 70%;
  }
`
const HeroInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeroInnerHalf = styled.div`
  width: 50%;
  @media (max-width: 575.98px){
    width: 100%;
  }
`

const HeroInnerHalfRight = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media (max-width: 575.98px){
    display: none;
  }
`

const HeroInnerHalfH2 = styled.h2`
  color: #fff;
  font-size: 6em;
`

const HeroInnerHalfH1 = styled.h1`
  color: #fff;
  font-size: 2.5em;
  font-weight: 300;
  margin-bottom: 24px;
`

const HeroInnerHalfP = styled.p`
  color: #f9f8f8;
  margin-bottom: 54px;
`

const Btn = styled(Link)`
  padding: 20px 40px;
  background-color: #0accbe;
  color: #fff;
  border-radius: 40px;
  font-weight: 500;
  border: 2px solid #0accbe;
  transition: 0.4s;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: #fff;
    border: 2px solid #262f3c;
    color: #262f3c;
  }
`

const BtnWhite = styled(Link)`
  padding: 20px 40px;
  background-color: #fff;
  color: #262f3c;
  font-weight: 500;
  border-radius: 40px;
  border: 2px solid #fff;
  transition: 0.4s;
  cursor: pointer;
  text-decoration: none;
  margin-left: 12px;
  &:hover {
    background-color: #5f67df;
    border: 2px solid #8f9bad;
    color: #fff;
  }
`

const DotsImg = styled.div`
  width: 70%;
  height: auto;
`

const DotsImage = styled.img`
  width: 100%;
  height: 100%;
`

const SmartphoneContainer = styled.div`
  position: absolute;
  bottom: -231px;
  left: 251px;
  z-index: 900;
`

const SmartphoneImage = styled.img`
  width: 100%;
  height: 100%;
`



const HeroIntro = () => {
  return(
    <HeroSection>
      <HeroContainer>
        <HeroInner>
          <HeroInnerHalf>
            <HeroInnerHalfH2>Sarif.</HeroInnerHalfH2>
            <HeroInnerHalfH1>Online Solutions</HeroInnerHalfH1>
            <HeroInnerHalfP>We develop websites, apps and dApps for you</HeroInnerHalfP>
            <Btn to='/'>Our Work <FaChevronRight style={{marginBottom: "-3px", marginLeft: "6px"}} /></Btn>
            <BtnWhite to='/'>Contact Us <FaCommentDots style={{marginBottom: "-3px", marginLeft: "6px"}} /></BtnWhite>
          </HeroInnerHalf>
          <HeroInnerHalfRight>
            <DotsImg>
              <DotsImage src={Dots} alt="dots" />
            </DotsImg>
            <SmartphoneContainer>
              <SmartphoneImage src={Smartphone} alt="smartphone" />
            </SmartphoneContainer>
          </HeroInnerHalfRight>
        </HeroInner>
      </HeroContainer>
    </HeroSection>
  );
}

export default HeroIntro;
