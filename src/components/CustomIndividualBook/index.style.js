import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 48px 80px;
  width: 900px;
`;

export const BasicInformationContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const BuyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px;
  & span {
    font-size: 22px;
    font-weight: 700;
  }
`;

export const BasicInformation = styled.div`
  width: 490px;
  height: 300px;
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  white-space: normal;
  margin-bottom: 60px;
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
`;

export const  MoreDetail = styled.div`
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
`;