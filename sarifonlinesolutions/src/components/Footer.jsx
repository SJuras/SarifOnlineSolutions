import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const FooterContainer = styled.footer`
  width: 100%;
  background-color: #5a5fd9;
  border-radius: 0px 120px 0px 0px;
`

const FooterContainerInner = styled.div`
  width: 70%;
  margin: 0 auto;
`

const FooterRow1 = styled.div`
  display: flex;
  padding: 42px 0px 36px;
  @media (max-width: 991.98px){
    flex-direction: column;
  }
`

const FooterRow2 = styled.div`
  border-top: 2px solid #5f67df;
  padding: 24px 0px 24px;
`

const FooterRowHalf = styled.div`
  display: flex;
  flex: 1;
  @media (max-width: 991.98px){
    width: 100%;
    margin-bottom: 24px;
  }
  @media (max-width: 575.98px){
    flex-direction: column;
  }
`

const FooterBox1 = styled.div`
  flex: 1;
  @media (max-width: 575.98px){
    margin-bottom: 18px;
  }
`

const FooterBox1H4 = styled.h4`
  font-size: 30px;
  color: #fff;
  font-weight: 500;
  margin-bottom: 24px;
`

const Description = styled.p`
  width: 70%;
  color: #fff;
`

const FooterBoxH5 = styled.h5`
  font-size: 24px;
  color: #fff;
  font-weight: 400;
  margin-bottom: 30px;
`

const FooterBoxUl = styled.ul`
  list-style-type: none;
`

const FooterBoxUlLi = styled.li`
  margin-bottom: 12px;
`

const NavLink = styled(Link)`
  font-size: 16px;
  color: #fff;
  margin-bottom: 12px;
  transition: 0.4s;
  text-decoration: none;
  &:hover {
    color: #0accbe;
  }
`

const OutLink = styled.a`
  font-size: 16px;
  color: #fff;
  margin-bottom: 12px;
  transition: 0.4s;
  text-decoration: none;
  &:hover {
    color: #0accbe;
  }
`

const FooterBoxP = styled.p`
  color: #fff;
  margin-bottom: 6px;
`

const PhoneNum = styled.p`
  margin-bottom: 18px;
  color: #fff;
`

const IconLink = styled.a`
  color: #fff;
  margin-right: 12px;
  font-size: 18px;
  transition: 0.4s;
  &:hover {
    color: #0accbe;
  }
`

const FooterRow2P = styled.p`
  text-align: center;
  color: #fff;
`


const Footer = () => {
  return(
    <FooterContainer>
      <FooterContainerInner>
        <FooterRow1>
          <FooterRowHalf>
            <FooterBox1>
              <FooterBox1H4>Sarif.</FooterBox1H4>
              <Description>Custom websites, apps and software for our clients.</Description>
            </FooterBox1>
            <FooterBox1>
              <FooterBoxH5>Navigation</FooterBoxH5>
              <FooterBoxUl>
                <FooterBoxUlLi><NavLink to="/">Home</NavLink></FooterBoxUlLi>
                <FooterBoxUlLi><NavLink to="/about">About Us</NavLink></FooterBoxUlLi>
                <FooterBoxUlLi><NavLink to="/work">Our Work</NavLink></FooterBoxUlLi>
                <FooterBoxUlLi><NavLink to="/contact">Contact</NavLink></FooterBoxUlLi>
              </FooterBoxUl>
            </FooterBox1>
          </FooterRowHalf>
          <FooterRowHalf>
            <FooterBox1>
              <FooterBoxH5>Useful Links</FooterBoxH5>
              <FooterBoxUl>
                <FooterBoxUlLi><OutLink href="https://ethereum.org/en/">Ethereum</OutLink></FooterBoxUlLi>
                <FooterBoxUlLi><OutLink href="https://www.blockchain.com/">Blockchain</OutLink></FooterBoxUlLi>
                <FooterBoxUlLi><OutLink href="https://www.dapp.com/">dApp</OutLink></FooterBoxUlLi>
              </FooterBoxUl>
            </FooterBox1>
            <FooterBox1>
              <FooterBoxH5>Contact</FooterBoxH5>
              <FooterBoxP>sarifwebdesign@gmail.com</FooterBoxP>
              <PhoneNum>+ 385 98 859 169</PhoneNum>
              <IconLink href="#"><FaFacebookF /></IconLink>
              <IconLink href="#"><FaInstagram /></IconLink>
              <IconLink href="#"><FaTwitter /></IconLink>
            </FooterBox1>
          </FooterRowHalf>
        </FooterRow1>
        <FooterRow2>
          <FooterRow2P>&copy; 2021 Sarif Design</FooterRow2P>
        </FooterRow2>
      </FooterContainerInner>
    </FooterContainer>
  );
}

export default Footer;
