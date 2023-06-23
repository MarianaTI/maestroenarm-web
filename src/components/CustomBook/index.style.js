import styled from "@emotion/styled";

export const Container = styled.div`
  height: 280px;
  display: flex;
  padding: 8px;
  flex-direction: column;
  cursor: pointer;
`;

export const ImgStyled = styled.img`
  border-radius: 15px;
  :hover {
    scale: 1.1;
  }
`;

export const DetailsContainer = styled.div`
  height: 300px;
  margin: 8px 0px;
  flex-direction: column;
  position: relative;
  & div {
    overflow: hidden;
  }
  .NameStyle {
    font-size: 14px;
    font-weight: 600;
    text-overflow: ellipsis;
  }

  .AuthorStyle {
    margin-top: 8px;
    font-size: 12px;
    font-weight: 500;
    color: #2d3648;
  }
`;

export const PriceIconContainer = styled.div`
  display: flex;
  align-items: end;
  font-size: 16px;
  font-weight: 500;
  color: #2d3648;
  cursor: pointer;
`;
