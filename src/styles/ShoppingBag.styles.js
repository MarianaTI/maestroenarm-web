import styled from "@emotion/styled";
import { Tabs } from "@mui/material";

export const MainContainer = styled.div`
  padding: 32px 16px    ;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .resource-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(270px, 100%), 1fr));
    gap: 16px;
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
  
`;

export const TabInformationBook = styled(TabInformation)`
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
