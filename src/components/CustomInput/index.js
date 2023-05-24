import React from 'react';
import { InputStyled, LabelStyled } from './index.style';

const CustomInput = ({placeholder, label, type}) => {
  return (
    <>
      <LabelStyled>{label}</LabelStyled>
      <InputStyled type={type} placeholder={placeholder}/>
    </>
  );
};

export default CustomInput;
