import React from 'react';
import styled from 'styled-components';



const CardContainer = styled.div`
  width: 350px;
  height: 350px;
  -webkit-box-shadow: 0px 9px 21px 4px rgba(0,0,0,0.16);
  box-shadow: 0px 9px 21px 4px rgba(0,0,0,0.16);
  padding: 24px;
  border-radius: 10px;
  margin: 12px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 0.4s;
  &:hover {
    -webkit-box-shadow: 0px 9px 24px 4px rgba(0,0,0,0.32);
    box-shadow: 0px 9px 24px 4px rgba(0,0,0,0.32);
  }
  @media (max-width: 575.98px){
    width: 300px;
    height: 300px;
    padding: 12px;
  }
`

const ProductCardH4 = styled.h4`
  color: #262f3c;
  font-size: 24px;
  margin-bottom: 6px;
`



function PortfolioCard(props){
  return(
    <CardContainer>
      <ProductCardH4>{props.title}</ProductCardH4>
    </CardContainer>
  );
}

export default PortfolioCard;
