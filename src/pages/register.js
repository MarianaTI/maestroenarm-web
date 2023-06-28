import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userRegister } from "../constants";
import * as yup from "yup";
import {
    RegisterContainer,
    FormContainer,
    CardStyled,
    ImageStyle,
    FormStyle,
    QuestionStyle,
    LinkText,
    ErrorMessage,
    Space
} from "../styles/Register.style";
import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import { CustomButton } from "../components/CustomButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { signUpByMaestroEnarm } from "../server/firebase/providers/email";

const registerSchema = yup.object({
    namee: yup.string().required("Por favor, ingresa tu nombre"),
    lastname: yup.string().required("Por favor, ingresa tu apellido"),
    email: yup.string().email("Por favor, ingresa un correo electrónico válido").required("Por favor, ingresa tu correo electrónico"),
    password: yup.string().required("Por favor, ingresa tu contraseña"),
    confirmpassword: yup.string().required("Por favor, confirma tu contraseña"),
});

const register = () => {
    const [isErrorRegister, setErrorRegister] = useState(false);
    const [isShowPassword, setShowPassword] = useState(false);

    const authenticateUser = (email, password, confirmpassword, namee, lastname) => {
        const user = userRegister.find(
            (account) => account.namee === namee && account.lastname === lastname &&
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
            namee: "",
            lastname: "",
            email: "",
            password: "",
            confirmpassword: "",
        },
        resolver: yupResolver(registerSchema),
    });

    const onSubmit = (values) => {
        //TODO: check
        try {
            //   authenticateUser(values.namee, values.lastname, values.email, values.password, values.confirmpassword);
            signUpByMaestroEnarm(values.email, values.password)
            console.log("Registro exitoso");
            setErrorRegister(false);
        } catch (error) {
            console.log(error.message);
            setErrorRegister(true);
        }
    };
    const toggleForgotPasswordModal = () => setOpenForgotPassword((isOpenForgotPassword) => !isOpenForgotPassword);
    const togglePasswordVisibility = () => {
        setShowPassword(!isShowPassword);
    };

    return (
        <RegisterContainer>
            <ImageStyle />
            <FormContainer>
                <CardStyled>
                    <h1>Registro</h1>
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
                            label="Correo electrónico"
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
                        <Space />
                        <CustomButton text="Registrar" type="submit" />
                        <QuestionStyle>
                            <span>¿Ya tienes cuenta?
                                <LinkText href="/sesion">Iniciar sesión</LinkText>
                            </span>
                        </QuestionStyle>
                    </FormStyle>
                </CardStyled>
            </FormContainer>
        </RegisterContainer>
    )
}
export default register;
