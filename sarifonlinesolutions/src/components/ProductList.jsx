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

const ProductList = () => {
  return(
    <ProductsContainer>
      <Container>
        <ProductCard
          title1="dApp Development"
          title2="Decentralized Applications"
          para1='dApp - stands for "Decentralized App", '
          para2="A new technology bringing benefits of speed, security and trust in domain of online commerce."
          paraMargin="Learn more about Blockchain technology and how it can benefit your business."
          link="/work"
          linkText="Learn More"
          imageSrc={SolidityPic}
          imageAlt="solidity dapp language"
         />
         <ProductCardInverted
          title1="Web and Mobile Apps"
          title2="Customized for Clients"
          para1="Let us design a unique application that will help you improve your business and manage it better."
          para2=""
          paraMargin="Find out how we can help you build and grow your business."
          link="/work"
          linkText="Learn More"
          imageSrc={SolidityPic}
          imageAlt="solidity dapp language"
         />
         <ProductCard
           title1="Web Sites"
           title2="Web design, graphics and copywriting"
           para1="Everything you need to get your online business up and running, or to scale up your existing business."
           para2=""
           paraMargin="Find out more about our services."
           link="/work"
           linkText="Learn More"
           imageSrc={SolidityPic}
           imageAlt="solidity dapp language"
          />
          <ProductCardInverted
           title1="Graphics design"
           title2="Marketing material and content"
           para1="Logo design, graphic material for marketing, social media and ready to print"
           para2=""
           paraMargin="Find out how we can help you build and grow your business."
           link="/work"
           linkText="Learn More"
           imageSrc={SolidityPic}
           imageAlt="solidity dapp language"
          />
      </Container>
    </ProductsContainer>
  );
}

export default ProductList;
