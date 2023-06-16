import styled from "@emotion/styled";

export const Container = styled.div`
  height: auto;
  width: 100%;
  padding: 16px;
`;

export const MainContainer = styled.div`
  padding: 16px 64px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 300px;
  align-items: center;
  justify-content: center;
`;

export const MainInformation = styled.div`
  padding: 18px;
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

export const AudiobookContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;
export const BackgroundImage = styled.div`
  background-image: url(./podcast.png);
  background-position: center;
  position: center;
  background-repeat: no-repeat;
  background-size: 300px;
  width: 350px;
  height: 300px;
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
  height: 300px;
  width: 300px;
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
`;
