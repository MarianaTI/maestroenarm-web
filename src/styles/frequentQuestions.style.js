import styled from "@emotion/styled";
import NextImage from "next/image";

export const Container = styled.div`
  & h1 {
    text-align: center;
    font-family: "Poppins";
    font-weight: 600;
    padding: 15px;
    color: #052970;

    @media (max-width: 768px){
      font-size: 25px;
      padding: 25px;
    }
  }
`;
export const AboutQuestion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const QuestionsFrequent = styled.div`
  padding: 50px;
  margin-top: 20px;
/*   @media (max-width: 768px) {
    width: 300px;
    right: 0px;
  } */
`;

export const Image = styled(NextImage)`
  max-width: 100%;
  height: auto;
  top: 50px;
  margin: 0 auto;
  @media (max-width: 768px) {
    max-width: 300px;
  }
`;
