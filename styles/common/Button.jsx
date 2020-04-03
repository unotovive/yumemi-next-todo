import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 3px;
  color: white;
  background: ${(props) => props.color};
  border-bottom: solid 2px #d27d00;
  border-radius: 4px;
  box-shadow: inset 0 2px 0 rgba(255, 255, 255, 0.2), 0 2px 2px rgba(0, 0, 0, 0.19);
  font-weight: bold;
  margin: 0.5rem;

  &:active {
    border-bottom: solid 2px #fd9535;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.30);
    color: #ff0000;
  }
`

export default props => (
  <>
    <Button {...props} />
  </>
);