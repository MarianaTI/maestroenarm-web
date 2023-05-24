import React from 'react';
import { InputStyled } from './index.style';

const CustomInput = ({placeholder}) => {
  return (
      <InputStyled type="text" placeholder={placeholder} />
  );
};

export default CustomInput;
