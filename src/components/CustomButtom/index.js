import React from "react";
import { ButtonStyled } from "./index.style";

export const CustomButton = ({
  text,
  onClick,
  type,
  fullWidth,
  theme,
  children,
}) => {
  return (
    <ButtonStyled
      fullWidth={fullWidth}
      onClick={onClick}
      type={type}
      theme={theme}
    >
      {children || text}
    </ButtonStyled>
  );
};
