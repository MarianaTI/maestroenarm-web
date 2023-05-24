import React from "react";
import {
  InputStyled,
  LabelStyled,
  InputWrapper,
  IconWrapper,
} from "./index.style";

const CustomInput = ({ placeholder, label, type, icon }) => {
  return (
    <>
      <LabelStyled>{label}</LabelStyled>
      <InputWrapper>
        <InputStyled type={type} placeholder={placeholder} />
        {icon && <IconWrapper>{icon}</IconWrapper>}
      </InputWrapper>
    </>
  );
};

export default CustomInput;
