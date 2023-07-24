import styled from "@emotion/styled";
import { Card } from "@mui/material";

export const StyledCard = styled(Card)`
  width: 100%;
  padding: 16px;
  border: 0.5px solid #d5d5d5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background: #fcfcfc;

  @media screen and (min-width: 746px) {
    &:nth-of-type(1) {
      margin-top: 20px;
    }
  
    &:nth-of-type(3) {
      margin-top: 20px;
    }
  }
`;

export const PositionSpan = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  display: flex;
  font-size: 34px;
  text-align: center;
  color: #000000;
`;

export const TextContainer = styled.div`
  display: flex;
    flex-direction: column;
    align-items: center;
  & span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    letter-spacing: -0.01em;
    font-feature-settings: "calt" off;
  }
  .name {
    font-size: 20px;
    color: #000000;
  }
  .specialty {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: -0.01em;
    color: rgba(0, 0, 0, 0.38);
  }
  .point {
    padding: 16px;
    font-style: normal;
    font-weight: 500;
    font-size: 33px;
    text-align: center;
    letter-spacing: -0.01em;
    color: #000000;
  }
`;
