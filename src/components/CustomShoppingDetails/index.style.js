import styled from "@emotion/styled";

export const DetailContainer = styled.div`
  margin: 8px;
  color: #2d3648;
  width: 500px;
  & span {
    font-size: 22px;
    font-weight: 700;
  }
  .ImportantTextName {
    width: 350px;
    font-size: 16px;
    font-weight: 600;
    padding: 16px 0px;
    @media (max-width: 400px) {
      padding: 8px 0px;
    }
  }
  .ImportantTextPrice {
    width: 100px;
    font-size: 16px;
    font-weight: 600;
    padding: 16px 0px;
    @media (max-width: 400px) {
      padding: 8px 0px;
    }
  }
  .DetailText {
    font-size: 14px;
    padding: 0px 0px;
    width: 280px;
    @media (max-width: 400px) {
      padding: 8px 0px;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px;
  @media (max-width: 400px) {
    padding: 0px;
    flex-direction: column;
  }
`;