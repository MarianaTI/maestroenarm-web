import {
  Link,
  Box,
  Grid,
  Dialog,
  DialogContent,
  Typography,
} from "@mui/material";
import {
  StyledCard,
  Input,
  ButtonStyled,
  BoxOptions,
  ButtonGoogle,
  ButtonMicrosoft,
  ButtonApple,
  DialogTitleStyled,
  NormalTextDialog,
  ButtonDialog,
  LoginGrid,
  FormStyled,
  LinkText,
  QuestionStyled,
} from "../styles/Login.style";
import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomModal from "../components/CustomModal";

const Sesion = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <LoginGrid container component="main">
        <Grid item xs={12} md={6} sm={6}>
          <StyledCard>
            <h1> Iniciar sesión </h1>
            <span> Gracias por regresar. Por favor ingresa tus datos </span>
            <FormStyled>
              <span>Correo electronico</span>
              <CustomInput />
              <span>Contraseña</span>
              <CustomInput />
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
              <ButtonGoogle></ButtonGoogle>
              <ButtonMicrosoft></ButtonMicrosoft>
              <ButtonApple></ButtonApple>
            </BoxOptions>
            <Typography>
              ¿Aún no tienes cuenta?
              <Link
                href="#"
                style={{
                  fontSize: 14,
                  color: "#052970",
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                {"    Registrate"}
              </Link>{" "}
            </Typography>
          </StyledCard>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sm={6}
          sx={{
            backgroundImage: "url(./doctors_login.svg)",
            backgroundSize: "500px",
            backgroundPosition: "center",
            position: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </LoginGrid>
    </>
  );
};
export default Sesion;
