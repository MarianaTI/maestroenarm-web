import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const ButtonStyled = styled(Button)`
  height: 40px;
  border-radius: 15px;
  font-size: 12px;
  color: #ffffff;
  font-family: "Poppins";
  font-weight: 500;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  margin-top: 16px;
  ${props => (
    {
      background: props.theme === 'secondary' ? 'rgba(255, 170, 43, 1)' : '#052970',
      ":hover": {
        background: props.theme === 'secondary' ? 'rgba(255, 170, 43, .6)' : '#05297099'
      }
  })}
`;
