
import React from 'react';
import styled from 'styled-components';

const Input = ({ label, type, value = '', setter } = {}) => {
  const changeHandler = (e) => {
    setter && setter(e.target.value)
  }
  return (
    <div>
      {label && <LabelWrapper>{label}</LabelWrapper>}
      <InputWrapper value={value} onChange={changeHandler} type={type} />
    </div>
  )
};

export default Input;

const InputWrapper = styled.input`
  border: 1px solid ${props => props.theme.colors.borderline};
  color: ${props => props.theme.colors.black};
  box-sizing: border-box;
  border-radius: 5px;
  height: 36px;
  width: 100%;
  display: block;
  padding: 0 0.5rem;
`

const LabelWrapper = styled.label`
  font-size: 14px;
`
