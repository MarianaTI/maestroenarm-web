import React from "react";
import { ButtonStyled } from "./index.style";

const CustomButton = ({buttonText, width, onClick}) => {
  return (
      <ButtonStyled sx={{width: {width}}} onClick={onClick}>{buttonText}</ButtonStyled>
  );
};

export default CustomButton;
