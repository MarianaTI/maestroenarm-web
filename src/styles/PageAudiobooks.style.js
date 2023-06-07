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
  display: grid;
  grid-template-columns: auto auto auto auto;
  padding: 40px;
  gap: 16px;
  grid-row-gap: 60px;
  grid-column-gap: 22px;
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