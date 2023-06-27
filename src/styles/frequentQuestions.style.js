import styled from "@emotion/styled";
import NextImage from "next/image";

export const Container = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra horizontalmente los elementos */

  & h1 {
    text-align: center;
    font-family: "Poppins";
    font-weight: 600;
    padding: 15px;
  }
`;

export const AboutQuestion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra horizontalmente los elementos */

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center; /* Centra horizontalmente los elementos en pantallas más grandes */
  }
`;

export const QuestionsFrequent = styled.div`
  padding: 50px;
  margin-top: 20px;
  max-width: 800px; /* Ajusta el ancho máximo de los selects */
  overflow: auto; /* Agrega scroll si el contenido se desborda */
  
  @media (max-width: 767px) {
    margin: 10px;
  }

  @media (min-width: 768px) {
    margin-left: 20px;
    margin-top: 0;
  }
`;

export const Image = styled(NextImage)`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
`;
