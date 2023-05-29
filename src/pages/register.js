import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userAccount } from "../constants";
import * as yup from "yup";
import {
    RegisterContainer, 
    FormContainer, 
    CardStyled, 
    ImageStyle, 
    FormStyle,
    QuestionStyle,
    LinkText
} from "../styles/register.style";
import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { ErrorMessage } from "../components/CustomInput/index.style";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";



const registerSchema = yup.object({
    namee: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    confirmpassword: yup.string().required(),
});


const register = () => {
    const [isErrorRegister, setErrorRegister] = useState(false);
    const [isShowPassword, setShowPassword] = useState(false);

    const authenticateUser = (email, password, confirmpassword, namee, lastname) => {
        const user = userAccount.find(
          (account) => account.name === namee && account.lastname === lastname &&
          account.email === email && account.password === password && 
          account.confirmpassword === confirmpassword
        );
        if (!user) {
          throw new Error("Error de registro");
        }
      };

      const {
        handleSubmit,
        control,
        formState: { errors },
      } = useForm({
        defaultValues: {
          namee:"",
          lastname:"",
          email: "",
          password: "",
          confirmpassword:"",
        },
        resolver: yupResolver(registerSchema),
      });

      const onSubmit = (values) => {
        try {
          authenticateUser(values.namee, values.lastname, values.email, values.password, values.confirmpassword);
          console.log("Registro exitoso");
          setErrorLogin(false);
        } catch (error) {
          console.log(error.message);
          setErrorLogin(true);
        }
      };
      const toggleForgotPasswordModal = () => setOpenForgotPassword((isOpenForgotPassword) => !isOpenForgotPassword);
      const togglePasswordVisibility = () => {
        setShowPassword(!isShowPassword);
      };

    return(
        <RegisterContainer>
            <ImageStyle/>
            <FormContainer>
                <CardStyled>
                    <h1>Register</h1>
                    <span>¡Bienvenido! Ingresa tus datos</span>
                    {isErrorRegister && (
                        <ErrorMessage>
                            Los datos no son correctos
                        </ErrorMessage>
                    )}
                    <FormStyle onSubmit={handleSubmit(onSubmit)}>
                        <CustomInput
                        label="Nombre"
                        name="namee"
                        control={control}
                        error={errors.namee?.message}
                        />
                        <CustomInput
                        label="Apellido"
                        name="lastname"
                        control={control}
                        error={errors.lastname?.message}
                        />
                        <CustomInput
                        label="Correo electronico"
                        name="email"
                        control={control}
                        error={errors.email?.message}
                        />
                        <CustomInput
                        label="Contraseña"
                        name="password"
                        type={isShowPassword ? "text" : "password"}
                        control={control}
                        error={errors.password?.message}
                        icon={
                            isShowPassword ? (
                                <VisibilityIcon onClick={togglePasswordVisibility} />
                            ) : (
                                <VisibilityOffIcon onClick={togglePasswordVisibility} />
                            )
                        }
                        />
                        <CustomInput
                        label="Confirmar contraseña"
                        name="confirmpassword"
                        type={isShowPassword ? "text" : "password"}
                        control={control}
                        error={errors.confirmpassword?.message}
                        icon={
                            isShowPassword ? (
                                <VisibilityIcon onClick={togglePasswordVisibility} />
                            ) : (
                                <VisibilityOffIcon onClick={togglePasswordVisibility} />
                            )
                        }
                        />
                        <CustomButton buttonText="Iniciar" type="submit"/>
                        <QuestionStyle>
                            <span>¿Ya tienes cuenta?
                                <LinkText href="#">Iniciar sesión</LinkText>
                            </span>
                        </QuestionStyle>
                    </FormStyle>
                </CardStyled>
            </FormContainer>
        </RegisterContainer>
    )
}
export default register;