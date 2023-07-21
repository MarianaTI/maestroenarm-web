import styled from "@emotion/styled";
import NextImage from "next/image";

export const ImagenInicioDemo = styled(NextImage)`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  padding: 50px;
`;

export const ReturnButtonContainer = styled.div`
   display: flex;
   justify-content: center;
   padding: 10px;
`;

export const InformationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  padding: 50px;
  max-width: 650px;
`;

export const ContainerBienvenido = styled.div`
  display: flex;
  height: 100vh;
`;

export const WelcomeTitle = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 120%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.01em;
  color: #052970;
`;