import styled from "@emotion/styled"
import { Card } from "@mui/material";

export const LoginContainer = styled.div`
    background-color: #f4f4f4;
    width:100%;
    height: 100vh;
    padding:64px 32px;
   
`;

export const StyledCard = styled(Card)`
    max-width: 600px;
    margin: auto;
    padding:32px;
   
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    gap:16px
`;

export const ForgotPasswordContainer = styled.div`
    display:flex;
    justify-content: flex-end;
`;

export const SignupContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
    
`

