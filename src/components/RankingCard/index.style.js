import styled from "@emotion/styled";
import { Card, Typography } from "@mui/material";

const cardVariants = {
  firstPlace: "max-width: 361px; height: 337px;",
  secondPlace: "max-width: 361px; height: 317px;",
  thirdPlace: "max-width: 361px; height: 317px;",
};

export const StyledCard = styled(Card)`
  width: 361px;
  height: 317px;
  padding: 16px;
  border: 0.5px solid #d5d5d5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  ${(props) => cardVariants[props.variant]}
  border-radius: 10px;
  background: #fcfcfc;

  &:nth-child(1) {
    margin-top: 20px;
  }

  &:nth-child(3) {
    margin-top: 20px;
  }
`;

export const PositionSpan = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  margin-right: auto;
  margin-bottom: 20%;
  display: flex;
  font-size: 34px;
  line-height: 56px;
  text-align: center;
  letter-spacing: 0.005em;
  font-feature-settings: "calt" off;
  color: #000000;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & span {
    font-family: "Poppins";
    line-height: 150%;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -0.01em;
    font-feature-settings: "calt" off;
  }
  & span:nth-of-type(1) {
    font-size: 20px;
    color: #000000;
  }
  & span:nth-of-type(2) {
    font-size: 16px;
    text-align: center;
    color: rgba(0, 0, 0, 0.65);
  }
  & span:nth-of-type(3) {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: -0.01em;
    color: rgba(0, 0, 0, 0.38);
  }
  & span:nth-of-type(4) {
    padding: 16px;
    font-style: normal;
    font-weight: 500;
    font-size: 33px;
    text-align: center;
    letter-spacing: -0.01em;
    color: #000000;
  }
`;
