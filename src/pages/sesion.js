import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userAccount } from "../constants";
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
  ErrorMessage,
} from "../styles/Login.style";
import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomModal from "../components/CustomModal";
import CustomButton from "../components/CustomButton";
import CustomOptionsLogin from "../components/CustomOptionsLogin";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useRouter } from "next/router";

const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Sesion = () => {
  const [isErrorLogin, setErrorLogin] = useState(false);
  const [isOpenForgotPassword, setOpenForgotPassword] = useState(false);
  const [openChangePassword, setOpenChangePassword] = useState(false);
  const [isShowPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const authenticateUser = (email, password) => {
    const user = userAccount.find(
      (account) => account.email === email && account.password === password
    );
    if (!user) {
      throw new Error("Error de autenticación");
    }
  };

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
    try {
      authenticateUser(values.email, values.password);
      router.push("/game");
      setErrorLogin(false);
    } catch (error) {
      console.log(error.message);
      setErrorLogin(true);
    }
  };

  const toggleForgotPasswordModal = () =>
    setOpenForgotPassword((isOpenForgotPassword) => !isOpenForgotPassword);
  const togglePasswordVisibility = () => {
    setShowPassword(!isShowPassword);
  };
  const handleCloseChangePassword = () => setOpenChangePassword(false);
  const handleOpenChangePassword = () => {
    setOpenForgotPassword(false);
    setOpenChangePassword(true);
  };

  return (
    <LoginGrid>
      <GridForm>
        <StyledCard>
          <h1> Iniciar sesión </h1>
          <span> Gracias por regresar. Por favor ingresa tus datos </span>
          {isErrorLogin && (
            <ErrorMessage>
              El correo electrónico o la contraseña son incorrectos
            </ErrorMessage>
          )}
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
              type={isShowPassword ? "text" : "password"}
              label="Contraseña"
              icon={
                isShowPassword ? (
                  <VisibilityIcon onClick={togglePasswordVisibility} />
                ) : (
                  <VisibilityOffIcon onClick={togglePasswordVisibility} />
                )
              }
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
                <LinkText href="/register">Registrate</LinkText>
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
        <CustomInput
          placeholder="Ingresa tu correo electronico"
          name="confirmemail"
          control={control}
        />
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
