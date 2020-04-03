import React from 'react';
import styled from 'styled-components';

const HelloWorld = styled.p`
  color: blueviolet;
  animation: 1s fade-in;
  @keyframes fade-in {
    0% {
      opacity: 0%;
    }

    100% {
      opacity: 100%;
    }
  }
`
export default () => (
  <>
    <HelloWorld>HELLO WORLD!!</HelloWorld>
  </>
);