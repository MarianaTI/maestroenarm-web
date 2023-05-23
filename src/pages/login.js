import { useForm } from "react-hook-form";
import { Button } from "@mui/material"
import CustomTextField from "../components/CustomTextField";
import { ForgotPasswordContainer, Form, LoginContainer, SignupContainer, StyledCard } from "../styles/Login.style";

const Login = () => {


    const { handleSubmit, control } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });
    const onSubmit = (values) => {
        console.log(values)
    }

    return (
        <LoginContainer>
            { <StyledCard>
                <h1>Bienvenido a Maestro ENARM</h1>
                <span>Por favor agrega los datos para iniciar sesión o registrarse</span>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <CustomTextField name="email" control={control} label="Email" />
                    <CustomTextField name="password" control={control} label="Password" type="password" />
                    <ForgotPasswordContainer><Button type="button" variant="text">Recordar contraseña</Button></ForgotPasswordContainer>
                    <Button type="submit" variant="contained">Iniciar sesión</Button>
                    <Button type="button" variant="contained">Iniciar sesión con Google</Button>
                    <SignupContainer>No tienes una cuenta? <Button>Registrate gratis</Button></SignupContainer>
                </Form>
            </StyledCard> }
        </LoginContainer>
    )

}

export default Login;