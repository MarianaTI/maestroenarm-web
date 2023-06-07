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
        
    ) 
}

export default Register;
