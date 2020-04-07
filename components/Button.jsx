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
          outline: none;
          color: ${props => props.theme.colors.gray};
          background-color: ${props => props.theme.colors.white};
          border: 2px solid ${props => props.theme.colors.gray};
          :hover {
            opacity: 0.8;
          }
          :active {
            opacity: 0.6;
          }
        `;
        break;
      case "primary":
        style = css`
          outline: none;
          color: ${props => props.theme.colors.white};
          background-color: ${props => props.theme.colors.primary};
          :hover {
            opacity: 0.8;
          }
          :active {
            opacity: 0.6;
          }
        `;
        break;
      case "secondary":
        style = css`
          outline: none;
          color: ${props => props.theme.colors.black};
          background-color: ${props => props.theme.colors.secondary};
          :hover {
            opacity: 0.8;
          }
          :active {
            opacity: 0.6;
          }
        `;
        break;
    }
    return style;
  }}
`;
