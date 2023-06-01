import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { LinkSharing, LinkSharingContainer, ModalBody } from './index.style';
import { useDispatch, useSelector } from 'react-redux';
import LinkIcon from '@mui/icons-material/Link';

export const GameLinkSharingModal = () => {
    const dispatch = useDispatch();
    const { isOpen } = useSelector(store => store.gameLinkSharingModal);
    return (
        <Modal
            open={isOpen}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <ModalBody>
                <Typography id="modal-modal-title" variant="h6" component="h2" >
                    ¡Estamos esperando a tu contrincante!
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Comparte este link con algún amigo y averiguar quien sabe más. ¿Quién será...?
                </Typography>
                <LinkSharingContainer>
                    <Typography variant='h6' sx={{ mt: 1, mb: 2 }}>
                        Copiar Link
                    </Typography>
                    <LinkSharing>
                        <span>https://www.maestroenarm.com/multijugador</span>
                        <LinkIcon />
                    </LinkSharing>
                </LinkSharingContainer>
                <h3 style={{ textAlign: 'center', margin: '24px' }}>Esperando...</h3>
            </ModalBody>
        </Modal >
    );
}
