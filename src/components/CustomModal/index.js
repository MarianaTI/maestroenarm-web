import React from "react";
import { Modal, Box } from "@mui/material";
import { ButtonStyled, ModalContent, ModalHead, ModalCloseIcon } from "./index.style";
import CustomButton from "../CustomButton";

const CustomModal = ({
  open,
  onClose,
  title,
  message,
  children,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <ModalContent>
        <ModalHead>
          <h1>{title}</h1>
          <ModalCloseIcon onClick={onClose}/>
        </ModalHead>
        <span>{message}</span>
        {children}
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
