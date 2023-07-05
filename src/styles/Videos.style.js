import styled from "@emotion/styled";
import Image from "next/image";

export const VideoContainer = styled.div`
    gap: 32px;
    display: grid;
    place-content: center;
`;

export const VideoCardContainer = styled.div`
    padding: 16px;
    display: grid;
    place-content: center;
    gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
`;

export const ImageStyled = styled(Image)`
  margin: auto;
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
  display: grid;
  grid-template-columns: 1fr 400px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;


export const MainInformation = styled.div`
  margin: auto;
  padding: 32px 0;
  & h1 {
    font-size: 30px;
    font-weight: 700;
  }
  & p {
    font-size: 18px;
    font-weight: 500;
    color: #2D3648;
  }
`;
