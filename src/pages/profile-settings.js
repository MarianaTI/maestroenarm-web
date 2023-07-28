import { Avatar } from "@mui/material";
import {
  AvatarContainer,
  ButtonGroup,
  ProfileSettingsContainer,
} from "../styles/ProfileSettings";
import { ProfileField } from "../components/ProfileField";
import { CustomButton } from "../components/CustomButton/index";
import { useAuth } from "../context/AuthProvider";
import Link from "next/link";

export default function ProfileSettings() {
  const { closeSesion, user } = useAuth()
  const profileFields = [
    { label: "Nombre de Usuario", text: user?.displayName },
    { label: "Nombre Y Apellido", text: user?.displayName },
    { label: "Correo", text: user?.email }
  ];
  return (
    <>
      <AvatarContainer>
        <Avatar sx={{ width: 132, height: 132, marginBottom: 1 }} alt={user?.displayName} src={user?.photoURL} />
        <p>Cuenta Básica</p>
      </AvatarContainer>
      <ProfileSettingsContainer>
        {profileFields.map(({ label, text }) => (
          <ProfileField key={label} label={label} text={text}></ProfileField>
        ))}
      </ProfileSettingsContainer>
      <ButtonGroup>
        <Link href="/payment-plans">
        <CustomButton theme="warning" fullWidth >
          Premium
        </CustomButton>
        </Link>
        <CustomButton fullWidth onClick={closeSesion}>
          Cerrar sesión
        </CustomButton>
        <CustomButton fullWidth>
          Eliminar cuenta
        </CustomButton>
      </ButtonGroup>
    </>
  );
}
