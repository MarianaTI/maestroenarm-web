import styled from "@emotion/styled";
import { Tabs } from "@mui/material";

export const MainContainer = styled.div`
  width: 800px;
  padding: 32px;
  @media (max-width: 800px) {
    width: 600px;
  }
  @media (max-width: 400px) {
    width: 300px;
    margin: 40px;
  }
`;

export const TabContainer = styled.div`
  padding: 0 32px; 
  @media (max-width: 900px) {
    width: 400px;
  }
  @media (max-width: 800px) {
    width: 600px;
  }
  @media (max-width: 400px) {
    width: 300px;
    margin: 24px;
  }
`;

export const StyledTabs = styled(Tabs)`
  .MuiTab-root {
    font-weight: 600;
    font-size: 16px;
    font-family: "Poppins";
    color: black;
  }
  
  .MuiTab-root.Mui-selected {
    font-weight: 600;
    font-size: 16px;
    font-family: "Poppins";
    color: #484a84;
    background-color: #e8e8f0;
  }

  .MuiTabs-indicator {
    background-color: #484a84;
  }
`;

export const TabEmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  height: 100%;
  width: 100%;
`;

export const TabInformation = styled.div`
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(4, 300px);
  gap: 8px;
  grid-row-gap: 24px;
  height: 80%; 
  width: 100%;
  place-items: center;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 270px);
  }
  @media (max-width: 900px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 270px);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 300px);
  }
  @media (max-width: 400px)  {
    grid-template-columns: 1fr;
  }  
`;

export const TabInformationBook = styled(TabInformation)`
  grid-template-columns: repeat(6, 210px);
  grid-row-gap: 52px;
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

export const EmptyStateContainerBook = styled(EmptyStateContainer)`
  grid-column: span 6;
`;
