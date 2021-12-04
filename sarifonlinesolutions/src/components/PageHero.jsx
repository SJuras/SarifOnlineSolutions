import React from 'react';
import styled from 'styled-components';

const PageHeroContainer = styled.div`
  width: 100%;
  height: 50vh;
  position: relative;
  background-color: #5a5fd9;
  border-radius: 0px 0px 0px 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 575.98px){
    height: 70vh;
  }
`

const PageHeroInner = styled.div`
  width: 70%;
  margin: 0 auto;
  @media (max-width: 575.98px){
    width: 90%;
  }
`

const PageHeroInnerH2 = styled.h2`
  color: #fff;
  font-size: 6em;
`

const PageHeroInnerH1 = styled.h1`
  color: #fff;
  font-size: 2.5em;
  font-weight: 300;
  margin-bottom: 24px;
`

const PageHeroInnerH1Span = styled.span`
  color: #0accbe;
`


function PageHero(props){
  return(
    <>
      <PageHeroContainer>
        <PageHeroInner>
          <PageHeroInnerH1>
            {props.title1}
            <PageHeroInnerH1Span>{props.span}</PageHeroInnerH1Span>
          </PageHeroInnerH1>
          <PageHeroInnerH2>{props.title2}</PageHeroInnerH2>
        </PageHeroInner>
      </PageHeroContainer>
    </>
  );
}

export default PageHero;
