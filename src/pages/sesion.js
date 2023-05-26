import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  StyledCard,
  BoxOptions,
  LoginGrid,
  FormStyled,
  LinkText,
  QuestionStyled,
  GridImage,
  BackLoginContainer,
  BackLoginIcon,
  BackLoginLink,
  GridForm,
  OpenModalButton,
  BackQuestionStyled,
  ErrorMessage
} from "../styles/Login.style";
import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomModal from "../components/CustomModal";
import CustomButton from "../components/CustomButton";
import CustomOptionsLogin from "../components/CustomOptionsLogin";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const loginSchema = yup
  .object({
    email: yup.string().email(),
    password: yup.string(),
  })
  .required();

const userAccount= {
  email: "mariana@hotmail.com",
  password: "password123",
};

const Sesion = () => {
  const [isErrorLogin, setErrorLogin] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = (values) => {
    if (values.email === userAccount.email && values.password === userAccount.password) {
      console.log("Autenticación exitosa");
      setErrorLogin(false);
    } else {
      console.log("Error de autenticación");
      setErrorLogin(true);
    }
  }

  const [isOpenForgotPassword, setOpenForgotPassword] = useState(false);
  const [openChangePassword, setOpenChangePassword] = useState(false);

  const toggleForgotPasswordModal = () =>
    setOpenForgotPassword((isOpenForgotPassword) => !isOpenForgotPassword);

  const handleCloseChangePassword = () => setOpenChangePassword(false);
  const handleOpenChangePassword = () => {
    setOpenForgotPassword(false); // Cerrar el primer modal
    setOpenChangePassword(true); // Abrir el segundo modal
  };

  return (
    <LoginGrid>
      <GridForm>
        <StyledCard>
          <h1> Iniciar sesión </h1>
          <span> Gracias por regresar. Por favor ingresa tus datos </span>
          {isErrorLogin && <ErrorMessage>El correo electrónico o la contraseña son incorrectos</ErrorMessage>}
          <FormStyled onSubmit={handleSubmit(onSubmit)}>
            <CustomInput
              label="Correo electronico"
              name="email"
              control={control}
              error={errors.email?.message}
            />
            <CustomInput
              name="password"
              control={control}
              type="password"
              label="Contraseña"
              icon={<VisibilityOffIcon />}
              error={errors.password?.message}
            ></CustomInput>
            <QuestionStyled>
              <span>¿Olvidaste tu contraseña?</span>
              <OpenModalButton onClick={toggleForgotPasswordModal}>
                Recuperar
              </OpenModalButton>
            </QuestionStyled>
            <CustomButton buttonText="Iniciar" type="submit" />
            <BoxOptions>
              <CustomOptionsLogin icon="./google.svg" />
              <CustomOptionsLogin icon="./microsoft.svg" />
              <CustomOptionsLogin icon="./apple.svg" />
            </BoxOptions>
            <BackQuestionStyled>
              <span>
                ¿Aún no tienes cuenta?
                <LinkText href="#">Registrate</LinkText>
              </span>
            </BackQuestionStyled>
          </FormStyled>
        </StyledCard>
      </GridForm>
      <GridImage />

      <CustomModal
        open={isOpenForgotPassword}
        onClose={toggleForgotPasswordModal}
        title="¿Olvidaste tu contraseña?"
        message="No te preocupes, te mandaremos las instrucciones"
      >
        <CustomInput placeholder="Ingresa tu correo electronico" name="confirmemail" control={control}/>
        <CustomButton buttonText="Enviar" onClick={handleOpenChangePassword} />
        <BackLoginContainer>
          <BackLoginIcon />
          <BackLoginLink href="/sesion">Regresar al login</BackLoginLink>
        </BackLoginContainer>
      </CustomModal>
    </LoginGrid>
  );
};
export default Sesion;

{
  /* <CustomModal
  open={openChangePassword}
  onClose={handleCloseChangePassword}
  title="Ingresa tu nueva contraseña"
  message="Ingresa mínimo 8 caracteres"
>
  <CustomInput label="Contraseña nueva" icon={<VisibilityOffIcon />} />
  <CustomInput label="Confirma la contraseña" icon={<VisibilityOffIcon />} />
  <CustomButton buttonText="Confirmar" fullWidth />
</CustomModal>; */
}
