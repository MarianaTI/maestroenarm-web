import React from "react";
import { ButtonStyled } from "./index.style";

const CustomButton = ({ buttonText, onClick, fullWidth }) => {
  return (
    <ButtonStyled fullWidth={fullWidth} onClick={onClick}>
      {buttonText}
    </ButtonStyled>
  );
};

export default CustomButton;
