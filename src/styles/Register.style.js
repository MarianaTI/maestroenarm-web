import styled from "@emotion/styled";
import {
  Box,
  Typography,
  TextField,
  Link,
  Button,
  DialogTitle,
  Grid,
} from "@mui/material";
 
export const RegisterGrid = styled(Grid)`
    height: 110vh;
    background-color: #f4f4f4;
    width: 100%;
    padding: 0px;
    & h1 {
    font-size: 35px;
    font-weight: 600;
    color: #052970;
  }
`;
export const FormStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  height: 60vh;
  font-size: 14px;
  & span {
    color: #000000;
  }
`;
export const ButtonStyled = styled(Button)`
  width: 340px;
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
export const CardStyle = styled(Box)`
  max-width: 500px;
  height: 500px;
  margin: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & span {
    color: #00000090;
    font-weight: 500;
    padding: 5px;
    letter-spacing: -0.01em;
    font-feature-settings: "calt" off;
  }
`;
export const Question = styled.div`
  padding: 5px;
  & span {
    display: inline;
  }
`;
export const LinkText = styled(Link)`
  padding-left: 16px;
  font-size: 14px;
  color: #052970;
  font-weight: 600;
  text-decoration: none;
  display: inline;
`;

export const ImageRegister = styled(Grid)`
  background-image: url(./registerphoto2.svg);
  
`;