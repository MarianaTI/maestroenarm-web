import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { DialogTitleStyled, Text, ButtonStyled } from "./index.style";
import CustomInput from "../CustomInput";

const CustomModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="alert-dialog-title">
      <DialogTitleStyled id="alert-dialog-title">
        ¿Olvidaste tu contraseña?
      </DialogTitleStyled>
      <DialogContent>
        <Text>No te preocupes, te mandaremos las instrucciones</Text>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CustomInput />
          <ButtonStyled variant="contained" onClick={onClose}>
            Enviar
          </ButtonStyled>
          <Text>Regresar al login</Text>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;
