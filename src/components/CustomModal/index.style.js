import styled from "@emotion/styled";
import { DialogTitle, Typography, Button } from "@mui/material";

export const DialogTitleStyled = styled(DialogTitle)`
  font-size: 16px;
  color: #000000;
  font-family: "Poppins";
  font-weight: 500;
`;

export const Text = styled(Typography)`
  font-size: 14px;
  color: #00000098;
  font-family: "Poppins";
  font-weight: 500;
  letter-spacing: -0.01em;
  font-feature-settings: "calt" off;
`;

export const ButtonStyled = styled(Button)`
  width: 350px;
  height: 40px;
  background-color: #052970;
  border-radius: 15px;
  font-size: 12px;
  color: #ffffff;
  font-family: "Poppins";
  font-weight: 500;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  padding: 15px;
  margin: 20px;
  &:hover {
    background: #05297099;
  }
`;