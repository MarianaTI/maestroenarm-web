import styled from "@emotion/styled";

export const DetailContainer = styled.div`
  margin: 8px;
  color: #2d3648;
  width: 500px;
  & span {
    font-size: 22px;
    font-weight: 700;
  }
  .ImportantText {
    font-size: 16px;
    font-weight: 600;
    padding: 16px 4px;
    @media (max-width: 400px) {
      padding: 8px 0px;
    }
  }
  .DetailText {
    font-size: 14px;
    padding: 0px 4px;
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