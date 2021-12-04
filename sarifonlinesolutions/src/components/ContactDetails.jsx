import React from 'react';
import styled from 'styled-components';

import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const ContactDetailsContainer = styled.div`

`

const ContactDetailsInner = styled.div`
  width: 70%;
  margin: 0 auto;
  @media (max-width: 575.98px){
    width: 90%;
  }
`

const ContactTitle = styled.div`
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

const ContactTitleH3 = styled.h3`
  text-align: center;
  text-transform: capitalize;
  color: #262f3c;
  font-size: 42px;
  font-weight: 400;
  margin-bottom: 36px;
`

const ContactDetailsTwoPart = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 60px;
  @media (max-width: 991.98px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const DetailsHalf = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 991.98px){
    width: 100%;
    margin-bottom: 24px;
  }
`

const DetailsHalfBorder = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #d3d3d3;
  @media (max-width: 991.98px){
    width: 100%;
    margin-bottom: 24px;
    border: none;
  }
`

const UnorederedList = styled.ul`
  list-style-type: none;
`

const ListItem = styled.li`
  font-size: 18px;
  margin-bottom: 6px;
  @media (max-width: 991.98px){
    text-align: center;
  }
  @media (max-width: 575.98px){
    font-size: 16px;
    margin-bottom: 6px;
  }
`

const HalfInner = styled.div`
  position: relative;
  @media (max-width: 991.98px){
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

const HalfInnerH5 = styled.h5`
  font-size: 24px;
  font-weight: 400;
  color: #0accbe;
  margin-bottom: 12px;
`

const HalfInnerUl = styled.ul`
  list-style-type: none;
  margin-bottom: 18px;
`

const HalfInnerUlLi = styled.li`
  font-size: 18px;
  margin-bottom: 6px;
  @media (max-width: 991.98px){
    text-align: center;
  }
  @media (max-width: 575.98px){
    font-size: 16px;
    margin-bottom: 6px;
  }
`


const ContactDetails = () => {
  return(
    <ContactDetailsContainer>
      <ContactDetailsInner>
        <ContactTitle>
          <ContactTitleH3>Contact Info</ContactTitleH3>
        </ContactTitle>
        <ContactDetailsTwoPart>
          <DetailsHalf>
            <UnorederedList>
              <ListItem><FaMapMarkerAlt style={{marginBottom: "-3px", marginRight: "6px"}} /> Zagreb, Croatia</ListItem>
              <ListItem><FaRegEnvelope style={{marginBottom: "-3px", marginRight: "6px"}} /> sarifwebdesign@gmail.com</ListItem>
              <ListItem><FaPhoneAlt style={{marginBottom: "-3px", marginRight: "6px"}} /> + 385 98 859 - 169</ListItem>
            </UnorederedList>
          </DetailsHalf>
          <DetailsHalfBorder>
            <HalfInner>
              <HalfInnerH5>Office Hours</HalfInnerH5>
              <HalfInnerUl>
                <HalfInnerUlLi>Mon - Fri : 08am - 5pm (CET; UTC+01:00)</HalfInnerUlLi>
                <HalfInnerUlLi>Sat : 09am - 2pm (CET; UTC+01:00)</HalfInnerUlLi>
                <HalfInnerUlLi>Sun : Closed</HalfInnerUlLi>
              </HalfInnerUl>
              <HalfInnerUl>
                <HalfInnerUlLi><FaCheckSquare style={{marginBottom: "-3px", marginRight: "6px"}} />Online appointments</HalfInnerUlLi>
                <HalfInnerUlLi><FaTimes style={{marginBottom: "-3px", marginRight: "6px"}} />On-site services</HalfInnerUlLi>
              </HalfInnerUl>
            </HalfInner>
          </DetailsHalfBorder>
        </ContactDetailsTwoPart>
      </ContactDetailsInner>
    </ContactDetailsContainer>
  );
}


export default ContactDetails;
