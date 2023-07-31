import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 0px 20px;
  @media (max-width: 800px) {
    padding: 18px 0px;
    width: 650px;
  }
  @media (max-width: 620px) {
    padding: 10px;
    width: 500px;
  }
  @media (max-width: 400px) {
    margin: 28px 20px;
    width: 300px;
  }
`;

export const BasicInformationContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 620px) {
    flex-direction: column;
  }
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 300px;
  margin-bottom: 4px;
  border-radius: 15px;
`;

export const ImageStyled = styled.img`
  position: absolute;
  height: 100%;
  transition: opacity 0.3s ease-in-out;
`;

export const HoverImage = styled.img`
  position: absolute;
  height: 100%;
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;

export const BuyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  & span {
    font-size: 22px;
    font-weight: 700;
  }
  @media (max-width: 400px) {
    align-items: center;
    justify-content: center;
    margin: 8px;
  }
`;

export const containerImageAndSpan = styled.div`
  flex-direction: column;
`;

export const IncludeContainer = styled.div`
  margin: 16px 0px;
  border: 2px solid #484A84;
  border-radius: 15px;
  padding: 8px;
  .DetailOptionStyled {
    color: #2d3648;
    font-weight: 500;
    font-size: 12px;
  }
`;

export const BasicInformation = styled.div`
  width: 490px;
  flex-direction: column;
  margin-left: 24px;
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
  @media (max-width: 400px) {
    width: 300px;
  }
  
  @media (max-width: 400px) {
    align-items: start;
    justify-content: center;
    padding: 0px;
    height: 200px;
    margin-left: 32px;
    margin-bottom: 0px;
    margin-top: 32px;
  }
`;

export const  MoreDetail = styled.div`
    padding: 15px;
    .DetailOptionStyled {
    color: #2d3648;
    font-weight: 700;
    font-size: 16px;
  }
  .DetailStyled {
    color: #2d3648;
    font-weight: 500;
    font-size: 16px;
  }
  @media (max-width: 400px) {
    align-items: center;
    justify-content: center;
    margin-top: 8px;
    padding: 16px;
  }
`;