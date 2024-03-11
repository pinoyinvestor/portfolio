// Footer.js

import React from 'react';
import styled from 'styled-components';

// Skapa en styled component för fotteren
const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  
  text-align: center;
  padding: 26px 20px;
  font-size: 10px;
   font-weight: 700;
   box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
   border-radius: 10px;
   
   
  
`;

function Footer() {
  return (
    <StyledFooter>
      <p>Made by Daniel Hedenberg</p>
    </StyledFooter>
  );
}

export default Footer;
