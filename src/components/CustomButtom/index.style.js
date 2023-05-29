import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const ButtonStyled = styled(Button)`
  height: 40px;
  background-color: #052970;
  border-radius: 15px;
  font-size: 12px;
  color: #ffffff;
  font-family: "Poppins";
  font-weight: 500;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: #05297099;
  }
`;

