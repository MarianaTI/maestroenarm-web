import React from "react";
import { Modal, Box, Typography } from "@mui/material";
import { Text, ButtonStyled, ModalContent } from "./index.style";
import CustomInput from "../CustomInput";

const CustomModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <ModalContent>
        <h1>¿Olvidaste tu contraseña?</h1>
        <span>No te preocupes, te mandaremos las instrucciones</span>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 2,
          }}
        >
          <CustomInput placeholder="Ingresa tu correo electronico"/>
          <ButtonStyled variant="contained" onClick={onClose}>
            Enviar
          </ButtonStyled>
          <Typography>Regresar al login</Typography>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
