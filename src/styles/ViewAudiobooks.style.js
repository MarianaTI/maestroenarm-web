import styled from "@emotion/styled";

export const ViewContainer = styled.div`
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const InterestContainer = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  margin: 48px;
  .InterestTitle {
    color: #2d3648;
    font-weight: 500;
    font-size: 20px;
    margin-left: 8px;
  }
  .CurouselStyled {
    background-color: aliceblue;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    padding: 0;
    @media (max-width: 400px) {
      width: 350px;
      height: 250px;
      padding: 0px;
    }
  }
  @media (max-width: 800px) {
    padding: 0px 30px;
    align-items: start;
    margin: 8px;
  }
  @media (max-width: 400px) {
    padding: 0px 0px;
    align-items: start;
    margin: 0px 16px;
  }
`;