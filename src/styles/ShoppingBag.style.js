import styled from "@emotion/styled";
import { Tabs } from "@mui/material";

export const MainContainer = styled.div`
  width: 800px;
  margin: 64px;
`;

export const TabContainer = styled.div`
  margin: 56px;
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

export const TabInformation = styled.div`
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(4, 300px);
  gap: 16px;
  grid-row-gap: 60px;
  grid-column-gap: 22px;
`;

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(./search_not_found.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 200px;
  width: 200px;
  & span {
    position: relative;
    top: 150px;
    font-size: 16px;
    color: #2D3648;
  }
`;
