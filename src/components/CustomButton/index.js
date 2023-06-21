import React from "react";
import { ButtonStyled } from "./index.style";

export const CustomButton = ({ text, onClick, type, fullWidth, theme, children, size }) => {
    return (
        <ButtonStyled fullWidth={fullWidth} onClick={onClick} type={type} theme={theme} size={size} >
            {children || text}
        </ButtonStyled>
    );
};
