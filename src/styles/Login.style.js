import styled from "@emotion/styled";
import {
  Card,
  Box,
  Typography,
  TextField,
  Link,
  Button,
  DialogTitle,
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

export const StyledCard = styled(Box)`
  max-width: 700px;
  height: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LoginTextStyled = styled(Typography)`
  font-size: 32px;
  color: #052970;
  font-family: "Poppins";
  font-weight: 600;
  padding: 10px;
`;
export const NormalText = styled(Typography)`
  font-size: 14px;
  color: #00000090;
  font-family: "Poppins";
  font-weight: 500;
  padding: 10px;
`;
export const InputText = styled(Typography)`
  font-size: 14px;
  color: #000000;
  font-family: "Poppins";
  font-weight: 500;
  padding: 8px;
`;
export const LinkText = styled(Link)`
  font-size: 14px;
  color: #052970;
  font-family: "Poppins";
  font-weight: 500;
`;
export const Input = styled(TextField)`
  width: 350px;
  background-color: #ebebeb;
  border-radius: 10px;
  height: 45px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);

  & .MuiOutlinedInput-root {
    display: flex;
    align-items: center; /* Alinear verticalmente */
    justify-content: flex-start; /* Alinear horizontalmente a la izquierda */
    border: none;
  }

  & .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  & .MuiOutlinedInput-input {
    &:focus {
      border: none;
    }
  }
  input::placeholder {
    color: #000000;
    font-size: 14px;
    font-family: "Poppins";
    font-weight: 500;
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
  &:hover {
    background: #05297099;
  }
`;
export const BoxOptions = styled(Box)`
  display: flex;
  gap: 2px;
  flex-wrap: wrap;
  margin: 7px;
  padding: 10px;
`;
export const ButtonGoogle = styled(Button)`
  height: 45px;
  margin-right: 60px;
  background-color: #ebebeb;
  border-radius: 10px;
  background-image: url(./google.svg);
  background-size: 24px;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
`;
export const ButtonMicrosoft = styled(Button)`
  height: 45px;
  margin-right: 60px;
  background-color: #ebebeb;
  border-radius: 10px;
  background-image: url(./microsoft.svg);
  background-size: 24px;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
`;
export const ButtonApple = styled(Button)`
  height: 45px;
  background-color: #ebebeb;
  border-radius: 10px;
  background-image: url(./apple.svg);
  background-size: 24px;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
`;
export const DialogTitleStyled = styled(DialogTitle)`
  font-size: 16px;
  color: #000000;
  font-family: "Poppins";
  font-weight: 500;
  padding-right: 22px;
`;
export const NormalTextDialog = styled(Typography)`
  font-size: 14px;
  color: #00000090;
  font-family: "Poppins";
  font-weight: 500;
  margin-bottom: 25px;
`;
export const ButtonDialog = styled(Button)`
  background-color: #052970;
  border-radius: 15px;
  font-size: 12px;
  color: #ffffff;
  font-family: "Poppins";
  font-weight: 500;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  margin: 10px;
  &:hover {
    background: #05297099;
  }
`;
const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;