import styled from "@emotion/styled";

export const Options = styled.div`
  width: 260px;
  height: 50px;
  background: #d9d9d9;
  border-radius: 15px;
`;

export const Container = styled.div`
  margin: 48px 80px;
  width: 800px;
  @media (max-width: 800px) {
    margin: 48px 40px;
    width: 700px;
  }
  @media (max-width: 400px) {
    margin: 28px 20px;
    width: 300px;
  }
`;

export const BuyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  .DetailOptionStyled {
    color: #2d3648;
    font-weight: 700;
    font-size: 16px;
    padding: 24px;
  }
  @media (max-width: 400px) {
    align-items: center;
    justify-content: center;
  }
`;

export const IncludeContainer = styled.div`
  margin: 16px;
  border: 2px solid #484A84;
  border-radius: 15px;
  padding: 8px;
  .DetailOptionStyled {
    color: #2d3648;
    font-weight: 500;
    font-size: 12px;
  }
`;

export const BasicInformationContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const BasicInformation = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  white-space: normal;
  .NameStyled {
    color: #2d3648;
    font-weight: 700;
    font-size: 26px;
    margin-bottom: 16px;
  }
  .DetailOptionStyled {
    display: block;
    color: #2d3648;
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 12px;
  }
  .DetailStyled {
    color: #2d3648;
    font-weight: 500;
    font-size: 16px;
    margin-left: 8px;
  }
  @media (max-width: 800px) {
    width: 300px;
  }
  @media (max-width: 400px) {
    align-items: start;
    justify-content: center;
    padding: 16px;
  }
`;

export const MoreDetail = styled.div`
  margin-top: 56px;
  .DetailOptionStyled {
    color: #2d3648;
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 12px;
  }
  .DetailStyled {
    color: #2d3648;
    font-weight: 500;
    font-size: 16px;
    margin-left: 8px;
  }
  @media (max-width: 400px) {
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    padding: 24px;
  }
`;