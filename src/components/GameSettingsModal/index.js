import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CustomButton } from '../CustomButtom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '778px',
    height: '317px',
    bgcolor: 'background.paper',
    border: '2px solid #b9b9b9',
    boxShadow: 24,
    p: 4,
    borderRadius: 5,
};

export const GameSettingsModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Modo Multijugador Amistoso - Por categoría
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Selecciona el número de casos que desea responder y tiempo deseado
                    </Typography>
                    <div style={{ marginTop: 16, display: 'flex', gap: 6, flexDirection: 'column' }}>
                        <lebel>Casos: </lebel>
                        <input type='range'/>
                        <lebel>Tiempo: 5 min</lebel>
                        <input type='range'/>
                        <CustomButton text='continuar' />
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
