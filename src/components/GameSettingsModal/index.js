import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CustomButton } from '../CustomButton';
import { ModalBody, RangeContainer } from './index.style';
import { useState } from 'react';

export const GameSettingsModal = ({ isOpen, closedModal }) => {
    //todo:  usar estado global para cerrar el modal
    return (
        <Modal
            open={isOpen}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <ModalBody>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Por categoría
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Selecciona el número de casos que desea responder y tiempo deseado
                </Typography>
                <RangeContainer>
                    <label>Casos: </label>
                    <input type='range' />
                    <label>Tiempo: 5 min</label>
                    <input type='range' />
                    <CustomButton text='continuar' onClick={closedModal}/>
                </RangeContainer>
            </ModalBody>
        </Modal>
    );
}
