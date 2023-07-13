import styled from "@emotion/styled";
import { Button } from "@mui/material";

const themes = {
  icon: "background:none; border:0; box-shadow: none; padding:8px; min-width:0px; border-radius:50%; svg {color: #052970}",
  primary:
    "background: rgb(9, 62, 143); :hover {background: rgba(9, 62, 143, .8);}",
  secondary:
    "background: rgb(72, 74, 132); :hover {background: rgba(72, 74, 132, .8)}",
  warning:
    "background:rgb(255, 170, 43); :hover {background:rgba(255, 170, 43, .9)}",
};

const sizes = {
  small: "padding:8px 16px; font-size: 12px;",
  medium: "padding:10px 24px",
  large: "padding:12px 38px; font-size: 18px;",
};

export const ButtonStyled = styled(Button)`
  ${({ theme, size }) => `
    text-transform: none;
    border-radius: 6px;
    color: #ffffff;
    font-family: "Poppins";
    font-weight: 400;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    ${themes[theme]}
    ${sizes[size]}
  `}
`;
