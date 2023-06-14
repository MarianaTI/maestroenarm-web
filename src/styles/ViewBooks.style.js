import styled from "@emotion/styled";

export const ViewContainer = styled.div`
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const InterestContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 48px;
  .InterestTitle {
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 24px;
  }
  @media (max-width: 800px) {
    padding: 0px 30px;
    align-items: start;
  }
  @media (max-width: 400px) {
    padding: 0px 0px;
    align-items: start;
  }
`;
