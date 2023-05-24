import styled from "@emotion/styled";
import {
  Box,
  Link,
  Button,
  Grid,
} from "@mui/material";

export const LoginContainer = styled.div`
  background-color: #f4f4f4;
  width: 100%;
  height: 100vh;
  padding: 64px 32px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  gap: 16px;
`;

export const ForgotPasswordContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;







//login nuevo
export const LoginGrid = styled(Grid)`
  height: 100vh;
  background-color: #f4f4f4;
  width: 100%;
  padding: 2px;
  & h1 {
    font-size: 32px;
    font-weight: 600;
    color: #052970;
  }
`;
export const StyledCard = styled(Box)`
  max-width: 800px;
  height: auto;
  margin: 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & span {
    color: #00000090;
    font-weight: 500;
    padding: 10px 0 10px 0;
    letter-spacing: -0.01em;
    font-feature-settings: "calt" off;
  }
`;
export const FormStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
`;
export const QuestionStyled = styled.div`
  padding: 16px 0 16px 0;
  & span {
    display: inline;
  }
  & span:first-child{
    font-size: 14px;
    color: #000000;
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

export const BoxOptions = styled.div`
  display: flex;
  gap: 2px;
  flex-wrap: wrap;
  margin: 7px;
  padding: 10px;
`;
export const ButtonIconStyled = styled(Button)`
  height: 45px;
  margin: 10px;
  background-color: #ebebeb;
  border-radius: 10px;
  background-image: url(./google.svg);
  background-size: 24px;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
`;
export const ButtonIconStyled2 = styled(ButtonIconStyled)`
  background-image: url(./microsoft.svg);
`;
export const ButtonIconStyled3 = styled(ButtonIconStyled)`
  background-image: url(./apple.svg);
`;
export const GridImage = styled(Grid)`
  background-image: url(./doctors_login.svg);
  background-size: 500px;
  background-position: center;
  position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;
