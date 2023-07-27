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
  GridForm,
  OpenModalButton,
  BackQuestionStyled,
  ErrorMessage,
} from "../styles/Login.style";
import React, { useEffect, useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomModal from "../components/CustomModal";
import CustomOptionsLogin from "../components/CustomOptionsLogin";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useRouter } from "next/router";
import { CustomButton } from "../components/CustomButton";
import { signInByGoogle } from "../services/firebase/providers/google";
import { signInByMicrosoft } from "../services/firebase/providers/microsoft";
import { signInByMaestroEnarm } from "../services/firebase/providers/email";
// import { signInByApple } from "../services/firebase/providers/apple";
import { useAuth } from "../context/AuthProvider";
import { signInByFacebook } from "../services/firebase/providers/facebook";

const loginSchema = yup.object({
  email: yup.string().email("Por favor, ingresa un correo electrónico válido").required("Por favor, ingresa tu correo electrónico"),
  password: yup.string().required("Por favor, confirma tu contraseña"),
});

export default function Login() {
  const router = useRouter();
  const [isErrorLogin, setErrorLogin] = useState(false);
  const [isOpenForgotPassword, setOpenForgotPassword] = useState(false);
  // const [openChangePassword, setOpenChangePassword] = useState(false);
  const [isShowPassword, setShowPassword] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (user) router.push("/home")
  })

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
      signInByMaestroEnarm(values.email, values.password)
      setErrorLogin(false);
    } catch (error) {
      setErrorLogin(true);
    }
  };

  const toggleForgotPasswordModal = () =>
    setOpenForgotPassword((isOpenForgotPassword) => !isOpenForgotPassword);
  const togglePasswordVisibility = () => {
    setShowPassword(!isShowPassword);
  };
  // const handleCloseChangePassword = () => setOpenChangePassword(false);
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
            <CustomButton text="Iniciar" type="submit" />
            <BoxOptions>
              <CustomOptionsLogin icon="./google.svg" onClick={signInByGoogle} />
              <CustomOptionsLogin icon="./microsoft.svg" onClick={signInByMicrosoft} />
              <CustomOptionsLogin icon="./facebook.svg" onClick={signInByFacebook} />
              {/* <CustomOptionsLogin icon="./apple.svg" onClick={signInByApple} /> */}
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
        <CustomButton text="Enviar" onClick={handleOpenChangePassword} type />
      </CustomModal>
    </LoginGrid>
  );
};
