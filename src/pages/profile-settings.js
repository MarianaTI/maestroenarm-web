import { Avatar } from '@mui/material';
import { AvatarContainer, Button, ButtonGroup, ProfileSettingsForm, ProfileField } from '../styles/ProfileSettings';

const profileFields = [
    { label: 'Nombre de Usuario', text: 'ZeeN' },
    { label: 'Nombre Y Apellido', text: 'Adrian Mis' },
    { label: 'Correo', text: 'zeen.cr@gmail.com' },
    { label: 'Contraseña', text: '********' }
];

const buttons = [
    { text: 'Premium', bgColor: '#FFAA2B' },
    { text: 'Cerrar sesión', bgColor: '#052970' },
    { text: 'Eliminar cuenta', bgColor: '#052970' }
];

export default function ProfileSettings() {
    return <>
        <AvatarContainer>
            <Avatar sx={{ width: 132, height: 132 }} alt="Adrian Mis" src="" />
            <p>Cuenta Básica</p>
        </AvatarContainer>
        <ProfileSettingsForm>
            {profileFields.map(({ label, text }, index) => <ProfileField key={index}>
                <strong>{label}: </strong> {text}
            </ProfileField>)}
        </ProfileSettingsForm>
        <ButtonGroup>
            {buttons.map((button, index) => <Button
                key={index}
                bg={button.bgColor}
                color="#F4F4F4">{button.text}</Button>)}
        </ButtonGroup>
    </>
}