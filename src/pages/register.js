import {Grid} from "@mui/material";
import {RegisterGrid, FormStyled, ImageRegister, ButtonStyled, CardStyle, Question, LinkText} from "../styles/Register.style";
import CustomInput from "../components/CustomInput";

const Register = () => {

    return (
        <>
        <RegisterGrid container component="main">
            <Grid item xs={12} md={6} sm={6}>
                <ImageRegister/>
                <CardStyle>
                    <h1>Registro</h1>
                    <span>¡Bienvenido! Ingrese sus datos</span>
                    <FormStyled>
                        <span>Nombre</span>
                        <CustomInput/>
                        <span>Apellido</span>
                        <CustomInput/>
                        <span>Correo electronico</span>
                        <CustomInput/>
                        <span>Contraseña</span>
                        <CustomInput/>
                        <span>Confirmar contraseña</span>
                        <CustomInput/>
                    </FormStyled>
                    <ButtonStyled>Iniciar</ButtonStyled>
                    <Question>
                        <span>
                            ¿Ya tienes cuenta?
                            <LinkText href="#">Iniciar sesión</LinkText>
                        </span>
                    </Question>
                </CardStyle>
            </Grid> 
        </RegisterGrid>
            
        </>
    ) 
}

export default Register;