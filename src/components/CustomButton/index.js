import React from "react";
import { ButtonStyled } from "./index.style";

const CustomButton = ({buttonText, width, height}) => {
  return (
      <ButtonStyled sx={{width: {width}}}>{buttonText}</ButtonStyled>
  );
};

export default CustomButton;
