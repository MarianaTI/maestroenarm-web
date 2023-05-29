import React from "react";
import { Modal} from "@mui/material";
import {ModalContent, ModalHead, ModalCloseIcon } from "./index.style";

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
