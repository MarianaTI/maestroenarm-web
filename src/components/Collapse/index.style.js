import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 10px;
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