import styled from "@emotion/styled";
import { Avatar, Card, Typography } from "@mui/material";

const cardVariants = {
  firstPlace: "max-width: 300px;height: 300px;",
  secondPlace: "max-width: 250px;height: 280px;",
  thirdPlace: "max-width: 250px;height: 250px;",
};

export const StyledCard = styled(Card)`
  padding: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  ${(props) => cardVariants[props.variant]}
`;

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
`;

export const StyledAvatar = styled(Avatar)`
  width: 80px;
  height: 80px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  & span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    letter-spacing: -0.01em;
    font-feature-settings: "calt" off;
    line-height: 150%;
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
`;
export const TitleText = styled(Typography)`
  font-size: 16px;
  font-family: "Poppins";
  font-weight: 500;
  padding: 10px;
`;
