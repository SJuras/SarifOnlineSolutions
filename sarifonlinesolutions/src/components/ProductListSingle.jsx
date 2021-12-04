import React from 'react';
import styled from 'styled-components';

import ProductCard from './ProductCard';
import ProductCardInverted from './ProductCardInverted';

import SolidityPic from '../assets/solidity.png';



const ProductsContainer = styled.div`
  padding: 100px 20px 100px;
  background-color: #f9f8f8;
  @media (max-width: 575.98px){
    width: 90%;
  }
`

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
`

const ProductListSingle = () => {
  return(
    <ProductsContainer>
      <Container>
        <ProductCard
          title1="Motivated to Work with You"
          title2=""
          para1="Sarif Online Solutions takes every client's demand with professionalism"
          para2="From humble beginnings, Sarif has learned through experience and growth."
          imageSrc={SolidityPic}
          imageAlt="solidity dapp language"
         />
      </Container>
    </ProductsContainer>
  );
}

export default ProductListSingle;
