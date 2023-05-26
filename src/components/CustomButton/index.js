import React from "react";
import { ButtonStyled } from "./index.style";

const CustomButton = ({ buttonText, onClick, type }) => {
  return (
    <ButtonStyled fullwidth="true" onClick={onClick} type={type}>
      {buttonText}
    </ButtonStyled>
  );
};

export default CustomButton;
