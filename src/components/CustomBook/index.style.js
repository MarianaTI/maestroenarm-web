import styled from "@emotion/styled";

export const Container = styled.div`
  width: 130px;
  height: 300px;
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;

export const ImgStyled = styled.img`
  width: 120px;
  height: 170px;
  border-radius: 15px;
  :hover {
    scale: 1.1;
  }
`;

export const DetailsContainer = styled.div`
  width: 110px;
  height: 200px;
  display: flex;
  flex-direction: column;
  position: relative;
  & div {
    height: 45px;
    width: 100%;
    overflow: hidden;
  }

  & div:nth-child(1) {
    font-size: 16px;
    font-weight: 600;
    text-overflow: ellipsis;
    height: 40px;
  }

  & div:nth-child(2) {
    margin-top: 8px;
    font-size: 13px;
    font-weight: 500;
    color: #2d3648;
  }
`;

export const PriceIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  font-size: 16px;
  font-weight: 500;
  color: #2d3648;
  cursor: pointer;
`;
