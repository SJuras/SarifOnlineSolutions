import React from 'react';
import styled from 'styled-components';

import PortfolioCard from './PortfolioCard.jsx';

const PortfolioContainer = styled.div`

`

const PortfolioInner = styled.div`
  width: 70%;
  margin: 0 auto;
  @media (max-width: 575.98px){
    width: 90%;
  }
`

const WrapContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`


const Portfolio2 = () => {
  return(
    <PortfolioContainer>
      <PortfolioInner>
        <WrapContainer>
          <PortfolioCard
            title="Naslov"
          />
          <PortfolioCard
            title="Naslov"
          />
          <PortfolioCard
            title="Naslov"
          />
          <PortfolioCard
            title="Naslov"
          />
        </WrapContainer>
      </PortfolioInner>
    </PortfolioContainer>
  );
}

export default Portfolio2;
