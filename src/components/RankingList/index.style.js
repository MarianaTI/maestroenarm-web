import styled from "@emotion/styled";

export const StyledList = styled.ul`
  width: 1163px;
  height: 74px;
  background: #fcfcfc;
  border: 0.5px solid #d5d5d5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  box-sizing: border-box;
`;

export const StyledTextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 28px;
  padding: 8px;
  & span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-feature-settings: "calt" off;
    line-height: 150%;
    letter-spacing: -0.01em;
    color: #000000;
    flex-basis: 200px;
  }
  & span:nth-of-type(1){
    font-size: 33px;
    margin-left: -20px;
    margin-right: -160px;
  }
  & span:nth-of-type(2) {
    font-size: 20px;
    margin-right: 120px;
  }
  & span:nth-of-type(3) {
    font-size: 16px;
    text-align: center;
    margin-right: 120px;
    color: rgba(0, 0, 0, 0.38);
  }
  & span:nth-of-type(4) {
    font-size: 33px;
    text-align: center;
  }
`;

const StyledSpan = styled.span`
  color: black;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 0.5rem; // Espacio entre elementos
`;
