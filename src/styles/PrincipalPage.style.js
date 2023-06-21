import styled from "@emotion/styled";
import Image from "next/image";

export const Container = styled.div`
  height: auto;
  padding: 16px;
  width: 100%;
`;
export const PrincipalContainer = styled.div`
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 8px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const GridForm = styled.div`
  justify-content: center;
  flex-direction: column;
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  & h1 {
    font-size: 26px;
    font-weight: 400;
  }
  & span {
    font-size: 32px;
    font-weight: 700;
  }
  & p {
    font-size: 18px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 52px;
`;

export const CategoriesContainer = styled.div`
  padding: 32px;
  & span {
    display: flex;
    justify-content: center;
    font-weight: 600;
    font-size: 22px;
  }
`;

export const ImageStyled = styled(Image)`
  padding: 16px;
  :hover {
    animation: float 2s linear infinite;
    @keyframes float {
      0%,
      100% {
        transform: translateY(0rem);
      }
      50% {
        transform: translateY(-1.5rem);
      }
    }
  }
  :not(:hover) {
    animation: fall 0.5s linear forwards;
    @keyframes fall {
    from {
      transform: translateY(-1.5rem);
    }
    to {
      transform: translateY(0rem);
    }
  }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
