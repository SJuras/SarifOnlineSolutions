import React from 'react';
import styled from 'styled-components';


const ProductsContainer = styled.div`
  padding: 50px 20px 200px;
  background-color: #5a5fd9;
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
  padding-top: 20px;
`

const TitleContainerH4 = styled.h4`
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  font-size: 20px;
  margin-bottom: 18px;
`

const TitleContainerH3 = styled.h3`
  text-align: center;
  text-transform: capitalize;
  color: #fff;
  font-size: 42px;
  font-weight: 400;
`

const TitleContainerSpan = styled.span`
  color: #0accbe;
`

const LongCardHolder = styled.div`
  width: 100%;
  position: relative;
`

const LongCard = styled.div`
  width: 100%;
  padding: 30px 12px;
  position: absolute;
  min-height: 300px;
  top: -20px;
  background-color: #fff;
  z-index: 900;
  -webkit-box-shadow: 0px 9px 24px 4px rgba(0,0,0,0.32);
  box-shadow: 0px 9px 24px 4px rgba(0,0,0,0.32);
  border-radius: 10px;
`



function Hovercard(props){
  return(
    <ProductsContainer>
      <Container>
        <TitleContainer>
          <TitleContainerH4>{props.title2}</TitleContainerH4>
          <TitleContainerH3>
            {props.title1}
            <TitleContainerSpan>{props.span}</TitleContainerSpan>
          </TitleContainerH3>
        </TitleContainer>
        <LongCardHolder>
          <LongCard>
            
          </LongCard>
        </LongCardHolder>
      </Container>
    </ProductsContainer>
  );
}

export default Hovercard;
