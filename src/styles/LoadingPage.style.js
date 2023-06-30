import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const bouncing = keyframes`
  0%, 20%, 60%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
`;

export const BoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & h1 {
    font-weight: 700;
    font-size: 16px;
    width: 200px;
    text-align: center;
    color: #2F2E41;
    margin-bottom: 30px;
  }

  & span {
    margin-top: 30px;
    font-weight: 700;
    font-size: 50px;
    color: #484a84;
    animation: ${bouncing} 2s ease-in-out infinite; /* Ajuste de la duración y la función de tiempo aquí */
    display: inline-block;
  }

  & span:nth-child(2) {
    animation-delay: 0.2s;
  }

  & span:nth-child(3) {
    animation-delay: 0.4s;
  }

  & span:nth-child(4) {
    animation-delay: 0.6s;
  }

  & span:nth-child(5) {
    animation-delay: 0.8s;
  }

  & span:nth-child(6) {
    animation-delay: 1s;
  }

  & span:nth-child(7) {
    animation-delay: 1.2s;
  }

  & span:nth-child(8) {
    animation-delay: 1.4s;
  }
  & span:nth-child(9) {
    animation-delay: 1.6s;
  }
  & span:nth-child(10) {
    animation-delay: 1.8s;
  }
`;
