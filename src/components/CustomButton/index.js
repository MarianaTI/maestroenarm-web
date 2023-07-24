import React from "react";
import { ButtonStyled } from "./index.style";

export const CustomButton = ({ text, onClick, type, fullWidth = false,
  theme = "primary",
  children,
  size = "medium",
}) => {
  return (
    <ButtonStyled fullWidth={fullWidth} onClick={onClick} type={type}
      theme={theme}
      size={size}
    >
      {children || text}
    </ButtonStyled>
  );
};
