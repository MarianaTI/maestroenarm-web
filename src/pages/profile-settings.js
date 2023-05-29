import { Avatar } from '@mui/material';
import { AvatarContainer, ButtonGroup, ProfileSettingsContainer } from '../styles/ProfileSettings';
import { ProfileField } from '../components/ProfileField';
import MainLayout from '../layouts/MainLayout';
import { CustomButton } from '../components/CustomButtom';

const profileFields = [
    { label: 'Nombre de Usuario', text: 'ZeeN' },
    { label: 'Nombre Y Apellido', text: 'Adrian Mis' },
    { label: 'Correo', text: 'zeen.cr@gmail.com' },
    { label: 'Contraseña', text: '********' }
];

export default function ProfileSettings() {
    return (
        <MainLayout>
            <AvatarContainer>
                <Avatar sx={{ width: 132, height: 132 }} alt="Adrian Mis" src="" />
                <p>Cuenta Básica</p>
            </AvatarContainer>
            <ProfileSettingsContainer>
                {profileFields.map(({ label, text }) =>
                    <ProfileField key={label} label={label} text={text}></ProfileField>)}
            </ProfileSettingsContainer>
            <ButtonGroup>
                <CustomButton theme="secondary" fullWidth>
                    <h3>Premium</h3>
                </CustomButton>
                <CustomButton fullWidth>
                    <h3>Cerrar sesión</h3>
                </CustomButton>
                <CustomButton fullWidth>
                    <h3>Eliminar cuenta</h3>
                </CustomButton>
            </ButtonGroup>
        </MainLayout >
    );
}