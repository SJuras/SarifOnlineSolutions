import React from 'react'
import styled from 'styled-components';


const ShowcaseIntroContainer = styled.div`

`

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  @media (max-width: 575.98px){
    width: 90%;
  }
`

const SectionTitle = styled.div`
  margin-bottom: 60px;
  padding-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ShowcaseIntroH4 = styled.h4`
  text-align: center;
  text-transform: uppercase;
  color: #0accbe;
  font-size: 20px;
  margin-bottom: 18px;
`

const ShowcaseIntroH3 = styled.h3`
  text-align: center;
  text-transform: capitalize;
  color: #262f3c;
  font-size: 42px;
  font-weight: 400;
  margin-bottom: 36px;
`

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  @media (max-width: 991.98px){
    flex-direction: column;
  }
`

const InnerContainerHalf = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 991.98px){
    margin-bottom: 36px;
  }
`

const InnerContainerHalfMiddle = styled.div`
  padding: 16px;
`

const InnerContainerHalfMiddleH3 = styled.h3`
  font-size: 2.8em;
  font-weight: 300;
  margin-bottom: 18px;
`

const InnerContainerHalfParaLine = styled.p`
  line-height: 22px;
  font-size: 18px;
  margin-bottom: 54px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    bottom: -27px;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    height: 2px;
    background-color: #d3d3d3;
  }
`

const InnerContainerHalfPara = styled.p`
  line-height: 22px;
  font-size: 18px;
`

const ImageContainer = styled.div`

`

const InnerImage = styled.img`
  width: 100%;
  height: 100%;
`


function ShowcaseIntro(props){
  return(
    <ShowcaseIntroContainer>
      <Container>
        <SectionTitle>
          <ShowcaseIntroH4>{props.subintro}</ShowcaseIntroH4>
          <ShowcaseIntroH3>{props.title}</ShowcaseIntroH3>
        </SectionTitle>
        <InnerContainer>
          <InnerContainerHalf>
            <InnerContainerHalfMiddle>
              <InnerContainerHalfMiddleH3>{props.innerTitle}</InnerContainerHalfMiddleH3>
              <InnerContainerHalfParaLine>{props.paraLine}</InnerContainerHalfParaLine>
              <InnerContainerHalfPara>{props.para}</InnerContainerHalfPara>
            </InnerContainerHalfMiddle>
          </InnerContainerHalf>
          <InnerContainerHalf>
            <ImageContainer>
              <InnerImage src={props.src}/>
            </ImageContainer>
          </InnerContainerHalf>
        </InnerContainer>
      </Container>
    </ShowcaseIntroContainer>
  );
}

export default ShowcaseIntro;
