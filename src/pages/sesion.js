import { Grid } from "@mui/material";
import {
  StyledCard,
  ButtonStyled,
  BoxOptions,
  LoginGrid,
  FormStyled,
  LinkText,
  QuestionStyled,
  ButtonIconStyled,
  ButtonIconStyled2,
  ButtonIconStyled3,
  GridImage,
} from "../styles/Login.style";
import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomModal from "../components/CustomModal";

const Sesion = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <LoginGrid container component="main">
      <Grid item xs={12} md={6} sm={6}>
        <StyledCard>
          <h1> Iniciar sesión </h1>
          <span> Gracias por regresar. Por favor ingresa tus datos </span>
          <FormStyled>
            <span>Correo electronico</span>
            <CustomInput />
            <span>Contraseña</span>
            <CustomInput/>
            <QuestionStyled>
              <span>¿Olvidaste tu contraseña?</span>
              <LinkText href="#" onClick={handleClickOpen}>
                Recuperar
              </LinkText>
            </QuestionStyled>
            <CustomModal open={open} onClose={handleClose} />
          </FormStyled>
          <ButtonStyled>Iniciar</ButtonStyled>
          <BoxOptions>
            <ButtonIconStyled></ButtonIconStyled>
            <ButtonIconStyled2></ButtonIconStyled2>
            <ButtonIconStyled3></ButtonIconStyled3>
          </BoxOptions>
          <QuestionStyled>
            <span>
              ¿Aún no tienes cuenta?
              <LinkText href="#">Registrate</LinkText>{" "}
            </span>
          </QuestionStyled>
        </StyledCard>
      </Grid>
      <GridImage item xs={12} md={6} sm={6} />
    </LoginGrid>
  );
};
export default Sesion;
