import React from 'react';
import styled from 'styled-components';


const ServiceBoxContainer = styled.div`
  width: 240px;
  height: 330px;
  margin: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  -webkit-box-shadow: 0px 9px 21px 4px rgba(0,0,0,0.16);
  box-shadow: 0px 9px 21px 4px rgba(0,0,0,0.16);
  transition: 0.4s;
  padding: 24px;
  border-radius: 10px;
  margin-bottom: 30px;
  &:hover {
    transform: scale(1.1);
    -webkit-box-shadow: 0px 9px 24px 4px rgba(0,0,0,0.32);
    box-shadow: 0px 9px 24px 4px rgba(0,0,0,0.32);
  }
  @media (max-width: 991.98px){
    width: 100%;
    height: 250px;
  }
`

const ServiceBoxH4 = styled.h4`
  color: #262f3c;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 12px;
`

const ServiceBoxP = styled.p`
  text-align: center;
  color: rgba(38, 47, 60, 0.7);
`


function ServiceBox(props){
  return(
    <ServiceBoxContainer>
      {props.icon}
      <ServiceBoxH4>{props.title}</ServiceBoxH4>
      <ServiceBoxP>{props.para1}</ServiceBoxP>
      <ServiceBoxP>{props.para2}</ServiceBoxP>
    </ServiceBoxContainer>
  );
}

export default ServiceBox;
