import styled from "@emotion/styled";
import { Box, Link, Button, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const LoginGrid = styled.div`
  height: 100vh;
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
export const GridForm = styled.div`
  padding: 8px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const StyledCard = styled(Box)`
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
export const FormStyled = styled.form`
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

export const QuestionStyled = styled.div`
  padding: 16px 0 16px 0;
  & span {
    display: inline;
  }
  & span:first-child {
    font-size: 14px;
    color: #000000;
  }
`;
export const BackQuestionStyled = styled.div`
  padding: 4px;
  & span {
    font-size: 14px;
    color: #000000;
    justify-content: center;
    align-items: center;
    display: flex;
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
export const OpenModalButton = styled.button`
  padding-left: 16px;
  font-size: 14px;
  font-family: "Poppins";
  color: #052970;
  font-weight: 600;
  display: inline;
  background: none;
  border: none;
  cursor: pointer;
`;

export const BoxOptions = styled.div`
  display: flex;
  gap: 2px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const BackLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px 0px 0px 0px;
  cursor: pointer;
`;

export const BackLoginIcon = styled(ArrowBackIcon)`
  height: 24px;
  width: 24px;
  color: rgba(0, 0, 0, 0.74);
`;

export const BackLoginLink = styled(Link)`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.74);
  font-weight: 500;
  padding-left: 8px;
  text-decoration: none;
`;
export const GridImage = styled.div`
  background-image: url(./doctors_login.svg);
  background-size: 500px;
  background-position: center;
  position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const ErrorMessage = styled.p`
  font-size: 12px;
  padding-left: 16px;
  color: red;
`;
