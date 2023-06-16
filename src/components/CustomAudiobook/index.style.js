import styled from "@emotion/styled";

export const Container = styled.div`
  width: 315px;
  height: 170px;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ImgStyled = styled.img`
  width: 115px;
  height: 150px;
  border-radius: 15px;
`;

export const DetailsContainer = styled.div`
  width: 180px;
  height: 150px;
  display: flex;
  flex-direction: column;
  margin: 8px;
  position: relative;
  & div {
    height: 50px;
    width: 100%;
    overflow: hidden;
  }

  & div:nth-child(1) {
    font-size: 16px;
    font-weight: 600;
    text-overflow: ellipsis;
    height: 70px;
  }

  & div:nth-child(2) {
    margin-top: 8px;
    font-size: 13px;
    font-weight: 500;
    color: #2d3648;
    height: 100px;
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
