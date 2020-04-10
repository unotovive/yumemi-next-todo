import React from 'react';
import styled from 'styled-components';

const Select = ({ label, items = [{ id: '0', name: '選択肢がありません' }], value = '0', setter } = {}) => {
  const changeHandler = (e) => {
    setter && setter(e.target.value);
  };

  return (
    <div>
      {label && <LabelWrapper>{label}</LabelWrapper>}
      <SelectIconWrapper>
        <SelectWrapper value={value} onChange={changeHandler}>
          {
            items.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              );
            })
          }
        </SelectWrapper>
        <IconWrapper>
          <img src="icons/expand.svg" alt="" />
        </IconWrapper>
      </SelectIconWrapper>
    </div>
  );
};

export default Select

const SelectWrapper = styled.select`
  display: block;
  border: 1px solid #DADADA;
  box-sizing: border-box;
  border-radius: 5px;
  height: 36px;
  width: 100%;
  padding: 0 0.5rem;
`

const LabelWrapper = styled.label`
  font-size: 14px;
`
const SelectIconWrapper = styled.div`
  position: relative;
`

const IconWrapper = styled.div`
  position: absolute;
  right: 5px;
  top: 2px;
`