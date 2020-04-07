import React from "react";
import styled, { css } from "styled-components";

const Button = ({ text, onClick, valiant } = {}) => {
  return (
    <div>
      <ButtonWrapper valiant={valiant} onClick={onClick}>
        {text}
      </ButtonWrapper>
    </div>
  );
};

export default Button;

const ButtonWrapper = styled.button`
  min-width: 114px;
  border-radius: 5px;
  padding: 5px 10px;
  ${props => {
    let style;
    switch (props.valiant) {
      case "outline":
        style = css`
          color: ${props => props.theme.colors.gray};
          background-color: ${props => props.theme.colors.white};
          border: 2px solid ${props => props.theme.colors.gray};
        `;
        break;
      case "primary":
        style = css`
          color: ${props => props.theme.colors.white};
          background-color: ${props => props.theme.colors.primary};
        `;
        break;
      case "secondary":
        style = css`
          color: ${props => props.theme.colors.black};
          background-color: ${props => props.theme.colors.secondary};
        `;
        break;
    }
    return style;
  }}
`;
