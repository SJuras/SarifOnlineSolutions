import React from 'react'
import styled from 'styled-components';

import { Link } from 'react-router-dom';


const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  @media (max-width: 991.98px){
    flex-direction: column;
  }
`

const ProductCardHalf = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 991.98px){
    margin-bottom: 36px;
  }
`

const ProductCardHalfInner = styled.div`
  padding: 16px;
`

const ProductCardHalfInnerH3 = styled.h3`
  font-size: 2.8em;
  font-weight: 300;
  margin-bottom: 18px;
`

const ProductCardHalfInnerH4 = styled.h4`
  color: rgba(38, 47, 60, 0.7);
  font-size: 1.6em;
  margin-bottom: 12px;
  font-weight: 400;
`

const ProductCardHalfInnerP = styled.p`
  line-height: 22px;
  font-size: 18px;
`

const ProductCardHalfInnerPMarginBottom = styled.p`
  line-height: 22px;
  font-size: 18px;
  margin-bottom: 48px;
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

const ProductCardImageContainer = styled.div`

`

const ProductCardImage = styled.img`
  width: 100%;
  height: 100%;
`


function ProductCardInverted(props){
  return(
    <ProductCardContainer>
      <ProductCardHalf>
        <ProductCardHalfInner>
          <ProductCardHalfInnerH3>{props.title1}</ProductCardHalfInnerH3>
          <ProductCardHalfInnerH4>{props.title2}</ProductCardHalfInnerH4>
          <ProductCardHalfInnerP>{props.para1}</ProductCardHalfInnerP>
          <ProductCardHalfInnerP>{props.para2}</ProductCardHalfInnerP>
          <ProductCardHalfInnerPMarginBottom>{props.paraMargin}</ProductCardHalfInnerPMarginBottom>
          <Button to={props.link}>{props.linkText}</Button>
        </ProductCardHalfInner>
      </ProductCardHalf>
      <ProductCardHalf>
        <ProductCardImageContainer>
          <ProductCardImage src={props.imageSrc} alt={props.imageAlt} />
        </ProductCardImageContainer>
      </ProductCardHalf>
    </ProductCardContainer>
  );
}

export default ProductCardInverted;
