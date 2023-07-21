import styled from "@emotion/styled";
import NextImage from "next/image";

export const ImagenInicioDemo = styled(NextImage)`
    margin-left: 100px;
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
`;


export const WelcomeTitle = styled.div`
  font-weight: 700;
  font-size: 50px;
  line-height: 120%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.01em;
  color: #052970;
`;

export const SaltarDemo = styled.div`
  padding: 30px;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  display: flex;

  & a{
    padding-left: 5px;
    color: #052970;
    font-weight: 700;
  }
`;

export const BOOMPharase = styled.div`
  padding: 30px;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 120%; 
`;

export const Button = styled.div`
  
 width: 70%;
  
  & a{
    font-weight: 600;
    font-size: 18px;
    color: #FFFFFF;
  }
`;