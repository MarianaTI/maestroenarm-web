import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Container,
  DetailsContainer,
  ImgStyled,
  PriceIconContainer,
} from "./index.style";

const CustomBook = ({ name, topics, price, showIcon }) => {
  const getFontSizeBasedOnLength = (string) => {
    if (string.length > 30) return "10px";
    if (string.length > 20) return "12px";
    return "14px";
  };

  return (
    <Container>
      <ImgStyled src="./example.png" />
      <DetailsContainer>
        <div>{name}</div>
        <div style={{fontSize: getFontSizeBasedOnLength(topics)}}>
          {topics}
        </div>
        <PriceIconContainer>
          <spa>$ {price}</spa>
          {showIcon && <ArrowForwardIcon />}
        </PriceIconContainer>
      </DetailsContainer>
    </Container>
  );
};

export default CustomBook;
