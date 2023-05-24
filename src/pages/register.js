import {Grid} from "@mui/material";
import {RegisterGrid, FormStyled} from "../styles/Register.style";


const Register = () => {

    return (
        <>
        <RegisterGrid container component="main">
            <Grid item xs={12} md={6} sm={6}>
                <h1>Registro</h1>
                <span>¡Bienvenido! Ingrese sus datos</span>
                <FormStyled>

                </FormStyled>
            </Grid>   
        </RegisterGrid>
            
        </>
    ) 
}

export default Register;