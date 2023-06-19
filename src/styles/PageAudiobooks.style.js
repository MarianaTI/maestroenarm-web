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
export const GridImage = styled(Image)`
  position: center;
  @media (max-width: 800px) {
    display: none;
  }
`;
export const EmptyStateContainer = styled(Image)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & span {
    position: relative;
    top: 150px;
    font-size: 16px;
    color: #2D3648;
  }
`;


export const AudiobookGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 300px);
  gap: 16px;
  grid-row-gap: 60px;
  grid-column-gap: 22px;
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
