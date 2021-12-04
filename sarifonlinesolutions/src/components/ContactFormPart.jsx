import React from 'react';
import styled from 'styled-components';


const FormPartContainer = styled.div`
  background-color: #f9f8f8;
`

const FormPartInner = styled.div`
  width: 70%;
  margin: 0 auto;
  @media (max-width: 575.98px){
    width: 90%;
  }
`

const TitleContainer = styled.div`
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

const TitleContainerH3 = styled.h3`
  text-align: center;
  text-transform: capitalize;
  color: #262f3c;
  font-size: 42px;
  font-weight: 400;
  margin-bottom: 36px;
`


const ContactFormPart = () => {
  return(
    <FormPartContainer>
      <FormPartInner>
        <TitleContainer>
          <TitleContainerH3>Get In Touch</TitleContainerH3>
        </TitleContainer>
      </FormPartInner>
    </FormPartContainer>
  );
}

export default ContactFormPart;
