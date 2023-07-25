import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const ButtonStyled = styled(Button)`
  height: 40px;
  width: auto;
  padding: 8px 12px;
  background: #484a84;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #ffffff;
  font-size: 14px;
  font-family: "Poppins";
  font-weight: 700;
  text-transform: none;
  &:hover {
    background: #6E85B7;
  }
`;

