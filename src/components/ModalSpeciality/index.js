import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CustomButton } from '../CustomButton';
import { ModalBody, RangeContainer } from './index.style';

export const GameSettingsModal = ({ isOpen, closeModal }) => {
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
                    <label>Casos: <input type='range' /></label>
                    <label>Tiempo: 5 min <input type='range' /></label>
                    <CustomButton text='continuar' theme="primary" onClick={closeModal} />
                </RangeContainer>
            </ModalBody>
        </Modal>
    );
}
