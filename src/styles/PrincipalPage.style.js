import styled from "@emotion/styled";
import Image from "next/image";

export const Container = styled.div`
  height: auto;
  width: 100%;
`;
export const PrincipalContainer = styled.div`
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
  margin-top: 16px;
`;

export const CategoriesContainer = styled.div`
   margin: 20px;
   & span {
    display: flex;
    justify-content: center;
    font-weight: 600;
    font-size: 22px;
   }  
`;

export const GridImage = styled(Image)`
  position: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
