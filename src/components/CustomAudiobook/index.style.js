import styled from "@emotion/styled";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 8px;
  & span {
    font-size: 20px;
    font-weight: 600;
  }
  & span:nth-child(2) {
    margin-top: 8px;
    font-size: 13px;
    font-weight: 500;
    color: #2D3648;
  }
  & span:nth-child(3) {
    margin-top: 8px;
    font-size: 16px;
    font-weight: 500;
    color: #2D3648;
  }
`;

export const IconStyled = styled(ArrowForwardIcon)`
  margin-left: 155px;
  cursor: pointer;
`;