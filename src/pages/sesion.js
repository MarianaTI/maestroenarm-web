import {
  Button,
  Link,
  IconButton,
  InputAdornment,
  Box,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import {
  StyledCard,
  LoginTextStyled,
  NormalText,
  InputText,
  Input,
  ButtonStyled,
  BoxOptions,
  ButtonGoogle,
  ButtonMicrosoft,
  ButtonApple,
  DialogTitleStyled,
  NormalTextDialog,
  ButtonDialog,
} from "../styles/Login.style";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Sesion = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid item xs={12} md={6} sm={6} sx={{ padding: 10 }}>
          <StyledCard>
            <LoginTextStyled>Iniciar sesión</LoginTextStyled>
            <NormalText>
              Gracias por regresar. Por favor ingresa tus datos
            </NormalText>
            <Box>
              <InputText>Correo electronico</InputText>
              <Input></Input>
              <InputText>Contraseña</InputText>
              <Input
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <VisibilityIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              ></Input>
              <InputText>
                ¿Olvidaste tu contraseña?
                <Link
                  href="#"
                  onClick={handleClickOpen}
                  style={{
                    fontSize: 14,
                    color: "#052970",
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  {"    Recuperar"}
                </Link>{" "}
              </InputText>

              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
              >
                <DialogTitleStyled id="alert-dialog-title">
                  {"¿Olvidaste tu contraseña?"}
                </DialogTitleStyled>
                <DialogContent>
                  <NormalTextDialog>
                    No te preocupes, te mandaremos las instrucciones
                  </NormalTextDialog>
                  <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}> 
                    <Input placeholder="Ingresa tu correo electronico"></Input>
                    <ButtonDialog>Enviar</ButtonDialog>
                    <NormalTextDialog>
                    Regresar el login
                  </NormalTextDialog>
                  </Box>
                </DialogContent>
              </Dialog>
            </Box>
            <ButtonStyled>Iniciar</ButtonStyled>
            <BoxOptions>
              <ButtonGoogle></ButtonGoogle>
              <ButtonMicrosoft></ButtonMicrosoft>
              <ButtonApple></ButtonApple>
            </BoxOptions>
            <InputText>
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
            </InputText>
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
      </Grid>
    </>
  );
};
export default Sesion;
