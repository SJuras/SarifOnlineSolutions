import React from 'react'
import styled from 'styled-components';


const MotivationBox = styled.div`
  width: 300px;
  height: 300px;
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
    transform: scale(1.1);
    -webkit-box-shadow: 0px 9px 24px 4px rgba(0,0,0,0.32);
    box-shadow: 0px 9px 24px 4px rgba(0,0,0,0.32);
  }
`

const MotivationIcon = styled.i`
  color: #0accbe;
  font-size: 54px;
  margin-bottom: 12px;
`

const MotivationCardH4 = styled.h4`
  color: #262f3c;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 12px;
  text-align: center;
`

const MotivationCardPara = styled.p`
  text-align: center;
  color: rgba(38, 47, 60, 0.7);
`

function MotivationCard(props){
  return(
    <MotivationBox>
      <MotivationIcon>{props.icon}</MotivationIcon>
      <MotivationCardH4>{props.title}</MotivationCardH4>
      <MotivationCardPara>{props.para}</MotivationCardPara>
    </MotivationBox>
  );
}

export default MotivationCard;
