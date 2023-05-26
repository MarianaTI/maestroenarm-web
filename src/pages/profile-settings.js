import { Avatar } from '@mui/material';
import { AvatarContainer, Button, ButtonGroup, ProfileSettingsContainer } from '../styles/ProfileSettings';
import { ProfileField } from '../components/ProfileField';
import MainLayout from '../layouts/MainLayout';

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
    return (
        <MainLayout>
            <AvatarContainer>
                <Avatar sx={{ width: 132, height: 132 }} alt="Adrian Mis" src="" />
                <p>Cuenta Básica</p>
            </AvatarContainer>
            <ProfileSettingsContainer>
                {profileFields.map(({ label, text }) => <ProfileField key={label} label={label} text={text}></ProfileField>)}
            </ProfileSettingsContainer>
            <ButtonGroup>
                {buttons.map(button => <Button
                    key={button.text}
                    bg={button.bgColor}
                    color="#F4F4F4">{button.text}</Button>)}
            </ButtonGroup>
        </MainLayout>
    );
}