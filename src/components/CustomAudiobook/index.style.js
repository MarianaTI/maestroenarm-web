import styled from "@emotion/styled";

export const Container = styled.div`
  width: 350px;
  height: 200px;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ImgStyled = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 15px;
  :hover{
    scale: 1.1;
  }
`;

export const DetailsContainer = styled.div`
  flex-direction: column;
  margin: 8px;
  position: relative;
  & div {
    overflow: hidden;
  }
  .NameStyle{
    font-size: 14px;
    font-weight: 600;
    padding: 8px 0px;
  }
  .AuthorStyle {
    font-size: 12px;
    font-weight: 500;
    color: #2d3648;
    padding: 4px 0px;
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
