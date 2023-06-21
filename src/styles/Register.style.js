import styled from "@emotion/styled";
import { Box, Link} from "@mui/material";


export const RegisterContainer = styled.div`
    height: 110vh;
    width: ${(props) => (props.fullwidth ? "100%" : "auto")};
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 32px;
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
    flex-direction: column;
`;
export const CardStyled = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    & span {
    color: #00000090;
    font-weight: 500;
    padding: 8px 0 16px 0;
    letter-spacing: -0.01em;
    font-feature-settings: "calt" off;
    @media (max-width: 400px) {
      display: inline;
      justify-content: center;
      align-items: center;
      padding: 16px;
    }
    }
`;
export const FormStyle = styled.form`
    width: 380px;
    display: flex;
    flex-direction: column;
    @media (max-width: 400px) {
        width: ${(props) => (props.fullwidth ? "100%" : "auto")};
        display: flex;
        justify-content: center;
        align-items: center;
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
