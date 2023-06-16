import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import { StyledContainer, StyledDescription, StyledName, StyledUserInfo } from './index.style';

export default function AvatarComponent() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpload = (event) => {
    
    console.log('Imagen cargada:', event.target.files[0]);
    setOpen(false);
  };

  return (
    <StyledContainer>
      <Avatar sx={{ width: 80, height: 80 }} onClick={handleClickOpen} />
      <StyledUserInfo>
        <StyledName>Usuario</StyledName>
        <StyledDescription>Ver estado de la cuenta</StyledDescription>
      </StyledUserInfo>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <input type="file" accept="image/*" onChange={handleUpload} />
          <Button onClick={handleClose}>Cancelar</Button>
        </DialogContent>
      </Dialog>
    </StyledContainer>
  );
}
