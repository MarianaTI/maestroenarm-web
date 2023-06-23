import styled from "@emotion/styled";
import Image from "next/image";

export const VideoContainer = styled.div`
    display: flex; 
    align-items: center; 
    flex-direction: column;
    gap: 64px;
`;

export const VideoCardContainer = styled.div`
    flex-wrap: wrap;
    display: flex; 
    justify-content: center;
    gap: 32px
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
    color: #2D3648;
  }
`;
