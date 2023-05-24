import styled from "@emotion/styled";
import { Card, Typography } from "@mui/material";

const cardVariants = {
  firstPlace: "max-width: 361px;height: 337px;",
  secondPlace: "max-width: 361px;height: 317px;",
  thirdPlace: "max-width: 361px;height: 301px;",
};

export const StyledCard = styled(Card)`
  padding: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  ${(props) => cardVariants[props.variant]}
  border-radius: 10px;
  background: #FCFCFC;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  font-family: "Poppins";
  line-height: 150%;
  & span {
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
export const TitleText = styled(Typography)`
  font-size: 16px;
  font-family: "Poppins";
  font-weight: 500;
  padding: 10px;
`;
