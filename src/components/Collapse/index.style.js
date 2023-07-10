import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Container = styled.div`
  padding: 10px;
  overflow: hidden;
  height: auto;

  @media (max-width: 768px) {
    margin-left: 5%;
  }
`;

export const ContainerAnswert = styled.div`
  padding-left: 90px;
  padding-right: 90px;
  overflow: hidden;
  height: auto;

  @media (max-width: 768px) {
    margin-left: 5%;
  }
`;

export const Typography = styled.div`
     font-family: Poppins;
     overflow: auto;
`;

export const ClosedCollapse = styled.div`
  color: #000;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-family: Poppins;
  font-weight: 500;
`;

export const ClosedCollapseAnswert = styled.div`
  color: #fff;
  font-size: 20px;
  font-family: Poppins;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    margin-bottom: 10px; 
    border: 1px solid #ccc; 
    border-radius: 14px; 
    min-height: 70px;
    padding: 10px;
    box-shadow: rgb(0 0 0 / 15%) 0px -0.25rem 0px 0px inset;
    width: 100%; 
    display: flex; 
    justify-content: center;
    align-items: center;

    ${(props) =>
      props.isCorrectAnswer
        ? css`
            background: rgba(38, 163, 7, 0.75);
          `
        : css`
            background: rgba(225, 2, 2, 0.8);
          `}
  }
`;

export const Case = styled.p`
    font-family: 'Poppins';
    font-size:normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 140%;
    text-align: justify;
    padding: 22px;
    padding-left: 90px;
    padding-right: 90px;
`;

export const Pregunta = styled.p`
  font-family: 'Lato';
  font-weight: 700;
  font-size: 20px;
  margin-left: 120px;
  margin-right: 120px;
  color: #052970;
  padding: 22px;
  padding-top: 16px;
`;
export const Answer = styled.div`
 display: grid;
  gap: 8px;
  transition: background-color 0.3s ease;
`;