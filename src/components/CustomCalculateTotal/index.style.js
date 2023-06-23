import styled from "@emotion/styled";

export const AcceptPaymentContainer = styled.div`
  margin: 8px;
  width: 300px;
  color: #2d3648;
  & span {
    font-size: 22px;
    font-weight: 700;
    padding: 0px 32px;
    @media (max-width: 800px) {
      padding: 0px 0px;
    }
  }
  .ImportantText {
    font-size: 16px;
    font-weight: 600;
    padding: 8px 4px;
    color: #3a3b69;
  }
  .DetailText {
    font-size: 14px;
    font-weight: 500;
    padding: 0px;
    margin: 24px 8px;
  }
  .LinkText {
    font-size: 14px;
    font-weight: 500;
    padding: 0px;
    color: #3a3b69;
    text-decoration: underline;
  }
`;

export const CalculateTotalContainer = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  padding: 0px 32px;
  margin-top: 8px;
  @media (max-width: 800px) {
    padding: 0px 0px;
  }
`;

export const RowSummary = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px;
`;

export const Line = styled.div`
  border-bottom: 2px solid rgba(0, 0, 0, 0.7);
  padding: 8px;
`;
