import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Link from "next/link";

export const RegisterContainer = styled.div`
    height: 100vh;
    margin: auto;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
    & h1 {
        font-size: 32px;
        font-weight: 600;
        color: #052970;
    }

`;
export const FormContainer = styled.div`
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const CardStyled = styled(Box)`
    padding: 16px;
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    & h1 { text-align: center }
    & span {
        text-align: center;
        color: #00000090;
        font-weight: 500;
        padding: 8px 0 16px 0;
        letter-spacing: -0.01em;
        font-feature-settings: "calt" off;
    }
`;
export const FormStyle = styled.form`
    display: flex;
    flex-direction: column;

    .form-names {
        display:  grid; 
        grid-template-columns: 1fr 1fr;
        gap: 16px;

        @media screen and (max-width: 576px) {
            display: initial;
        }
    }
`;
export const ImageStyle = styled.div`
    background-image: url(registerphoto2.svg);
    background-size: 500px;
    background-position: center;
    position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width:768px) {
        display: none;
    }
`;
export const QuestionStyle = styled.div`
    padding: 16px 0 16px 0;
    text-align: center;
    & span {
        display: inline;
    }
    & span:first-child {
        font-size: 14px;
        color: #000000;
    }

`;
export const LinkText = styled(Link)`
  padding-left: 16px;
  font-size: 14px;
  color: #052970;
  font-weight: 600;
  text-decoration: none;
  display: inline;
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  padding-left: 16px;
  color: red;
`;
export const Space = styled.div`
    margin-bottom: 10px;

`;
