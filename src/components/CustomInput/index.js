import React from "react";
import {
  InputStyled,
  LabelStyled,
  InputWrapper,
  IconWrapper,
} from "./index.style";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

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
