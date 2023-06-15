import styled from "@emotion/styled";

export const Container = styled.div`
  height: auto;
  width: 100%;
  padding: 2px;
  @media (max-width: 768px) {
    padding: 48px;
  }
`;
export const PrincipalContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 32px;
  padding: 16px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const GridForm = styled.div`
  padding: 8px;
  justify-content: center;
  flex-direction: column;
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  & h1 {
    font-size: 26px;
    font-weight: 400;
  }
  & span {
    font-size: 36px;
    font-weight: 700;
  }
  & p {
    font-size: 20px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
`;

export const CategoriesContainer = styled.div`
   margin: 32px;
   & span {
    display: flex;
    justify-content: center;
    font-weight: 600;
    font-size: 22px;
   }  
`;

export const GridImage = styled.div`
  background-image: url(./principal-page-medicine.png);
  background-position: center;
  position: center;
  background-repeat: no-repeat;
  width: 632px;
  height: 463px;
  @media (max-width: 768px) {
    display: none;
  }
`;