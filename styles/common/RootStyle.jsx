import React from 'react';
import styled from 'styled-components';

const RootStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  flex-direction: column;
  align-items: center;
`;

export default props => (
  <>
    <RootStyle {...props} />
  </>
);