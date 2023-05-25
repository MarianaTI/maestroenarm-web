import {RegisterContainer, CardStyle,LoginContainer, LinkLog, Button, ImageStyle, FormStyle} from "../styles/Register.style";
import CustomInput from "../components/CustomInput";


const Register = () => {

    return ( <RegisterContainer>
        <ImageStyle/>
        <CardStyle>
            <h1>Registro</h1>
            <span>¡Bienvenido! Ingresa tus datos</span>
            <FormStyle>
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
            </FormStyle>
            <Button type="submit" variant="contained">Crear</Button>
            <LoginContainer>
                <span>
                    ¿Ya tienes cuenta?
                    <LinkLog href="#">Iniciar sesión</LinkLog>
                </span>
            </LoginContainer>
        </CardStyle>
    </RegisterContainer>
        
       /*  <>
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
            
        </> */
    ) 
}

export default Register;