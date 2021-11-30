import React from 'react';
import styled from 'styled-components';

import { FaChevronDown } from "react-icons/fa";


const ScrollDownContainer = styled.div`
  width: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 16px 0px;
  color: #262f3c;
  @media (max-width: 991.98px){
    display: flex;
  }
`

const ScrollDownP = styled.p`

`


const ScrollDownIcon = () => {
  return(
    <ScrollDownContainer>
      <ScrollDownP>Scroll down</ScrollDownP>
      <FaChevronDown />
    </ScrollDownContainer>
  );
}

export default ScrollDownIcon;
