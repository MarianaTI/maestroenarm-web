import styled from "@emotion/styled";
import Image from "next/image";

export const Container = styled.div`
  height: auto;
  width: 100%;
`;

export const MainContainer = styled.div`
  padding: 16px 64px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 300px;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const MainInformation = styled.div`
  padding: 16px;
  & h1 {
    font-size: 30px;
    font-weight: 700;
  }
  & span {
    font-size: 18px;
    font-weight: 500;
    color: #2d3648;
  }
`;

export const AudiobookContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 48px;
  @media (max-width: 800px) {
    padding: 40px;
  }
`;
export const ImageStyled = styled(Image)`
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
  @media (max-width: 800px) {
    display: none;
  }
`;

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: span 4;
  & span {
    position: relative;
    font-size: 16px;
    color: #2D3648;
    width: 300px;
    justify-content: center;
    align-items: center;
    display: flex;
  }
`;


export const AudiobookGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 230px);

  grid-row-gap: 60px;
  grid-column-gap: 32px;
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 300px);
  }
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;
