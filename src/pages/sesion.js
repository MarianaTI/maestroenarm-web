import { Grid, Link } from "@mui/material";
import {
  StyledCard,
  BoxOptions,
  LoginGrid,
  FormStyled,
  LinkText,
  QuestionStyled,
  ButtonIconStyled,
  ButtonIconStyled2,
  ButtonIconStyled3,
  GridImage,
  BackLoginContainer,
  BackLoginIcon,
  BackLoginLink,
} from "../styles/Login.style";
import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomModal from "../components/CustomModal";
import CustomButton from "../components/CustomButton";
import CustomOptionsLogin from "../components/CustomOptionsLogin";

const Sesion = () => {
  const [openForgotPassword, setOpenForgotPassword] = useState(false);
  const [openChangePassword, setOpenChangePassword] = useState(false);

  const handleOpenForgotPassword = () => setOpenForgotPassword(true);
  const handleCloseForgotPassword = () => setOpenForgotPassword(false);
  const handleCloseChangePassword = () => setOpenChangePassword(false);
  const handleOpenChangePassword = () => {
    setOpenForgotPassword(false); // Cerrar el primer modal
    setOpenChangePassword(true); // Abrir el segundo modal
  };

  return (
    <LoginGrid container component="main">
      <Grid item xs={12} md={6} sm={6}>
        <StyledCard>
          <h1> Iniciar sesión </h1>
          <span> Gracias por regresar. Por favor ingresa tus datos </span>
          <FormStyled>
            <CustomInput label="Correo electronico" />
            <CustomInput label="Contraseña" />
            <QuestionStyled>
              <span>¿Olvidaste tu contraseña?</span>
              <LinkText href="#" onClick={handleOpenForgotPassword}>
                Recuperar
              </LinkText>
            </QuestionStyled>
          </FormStyled>
          <CustomButton buttonText="Iniciar" width="65%" />
          <BoxOptions>
            <CustomOptionsLogin icon="./google.svg" />
            <CustomOptionsLogin icon="./microsoft.svg" />
            <CustomOptionsLogin icon="./apple.svg" />
          </BoxOptions>
          <QuestionStyled>
            <span>
              ¿Aún no tienes cuenta?
              <LinkText href="#">Registrate</LinkText>
            </span>
          </QuestionStyled>
        </StyledCard>
      </Grid>
      <GridImage item xs={12} md={6} sm={6} />
      <CustomModal
        open={openForgotPassword}
        onClose={handleCloseForgotPassword}
        title="¿Olvidaste tu contraseña?"
        message="No te preocupes, te mandaremos las instrucciones"
      >
        <CustomInput placeholder="Ingresa tu correo electronico" />
        <CustomButton
          buttonText="Enviar"
          width="100%"
          onClick={handleOpenChangePassword}
        />
        <BackLoginContainer>
          <BackLoginIcon />
          <BackLoginLink href="/sesion">Regresar al login</BackLoginLink>
        </BackLoginContainer>
      </CustomModal>
      <CustomModal
        open={openChangePassword}
        onClose={handleCloseChangePassword}
        title="Ingresa tu nueva contraseña"
        message="Ingresa mínimo 8 caracteres"
      >
        <CustomInput label="Contraseña nueva" />
        <CustomInput label="Confirma la contraseña" />
        <CustomButton buttonText="Confirmar" width="100%" />
      </CustomModal>
    </LoginGrid>
  );
};
export default Sesion;
