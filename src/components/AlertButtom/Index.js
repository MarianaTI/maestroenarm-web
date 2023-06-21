import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import React, { useState } from "react";
import { Modal } from "@mui/material";
import { ModalContent, ModalHead, ModalCloseIcon, StyledIcon } from "../AlertButtom/Index.style";

const ButtomAlertModal = ({
    Title,
    message,
}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }


    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
           <StyledIcon>
                <ErrorOutlineIcon onClick={handleOpen} />
           </StyledIcon>
            <Modal open={open} onClose={handleClose}>
                <ModalContent>
                    <ModalHead>
                        <h1>{Title}</h1>
                        <ModalCloseIcon onClick={handleClose} />
                    </ModalHead>
                    <span>{message}</span>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ButtomAlertModal;