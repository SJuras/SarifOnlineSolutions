import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const EndContainer = styled.div`

`

const Container = styled.div`
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

const TitleContainerH4 = styled.h4`
  text-align: center;
  text-transform: uppercase;
  color: #0accbe;
  font-size: 20px;
  margin-bottom: 18px;
`

const TitleContainerH3 = styled.h3`
  text-align: center;
  text-transform: capitalize;
  color: #262f3c;
  font-size: 42px;
  font-weight: 400;
  margin-bottom: 36px;
`

const TitleContainerP = styled.p`
  text-align: center;
  width: 60%;
  margin-bottom: 24px;
`

const Button = styled(Link)`
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

const BtnHolder = styled.div`
  display: flex;
  gap: 12px;
`


function EndSection(props){
  return(
    <EndContainer>
      <Container>
        <TitleContainer>
          <TitleContainerH4>{props.title1}</TitleContainerH4>
          <TitleContainerH3>{props.title2}</TitleContainerH3>
          <TitleContainerP>{props.para}</TitleContainerP>
          <BtnHolder>
            <Button to={props.link1}>{props.btnText1}</Button>
            <Button to={props.link2}>{props.btnText2}</Button>
          </BtnHolder>
        </TitleContainer>
      </Container>
    </EndContainer>
  );
}

export default EndSection;
