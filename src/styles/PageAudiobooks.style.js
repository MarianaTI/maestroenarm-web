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
  grid-gap: 200px;
  align-items: center;
  justify-content: center;
`;

export const MainInformation = styled.div`
  padding: 16px;
  & h1 {
    font-size: 40px;
    font-weight: 700;
  }
  & span {
    font-size: 22px;
    font-weight: 500;
    color: #2D3648;
  }
`;

export const BackgroundImage = styled.div`
  background-image: url(./podcast.png);
  background-position: center;
  position: center;
  background-repeat: no-repeat;
  width: 450px;
  height: 300px;
`;