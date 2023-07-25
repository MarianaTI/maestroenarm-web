import styled from "@emotion/styled";

export const Container = styled.div`
  height: auto;
  width: 100%;
`;

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & span {
    position: relative;
    font-size: 16px;
    color: #2D3648;
    justify-content: center;
    align-items: center;
    display: flex;
  }
`;

export const AudiobookContainer = styled.div`
  padding: 32px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 250px), 1fr));
  gap: 12px;
`;

