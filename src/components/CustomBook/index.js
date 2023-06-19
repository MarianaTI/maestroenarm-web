import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Container,
  DetailsContainer,
  ImgStyled,
  PriceIconContainer,
} from "./index.style";

const CustomBook = ({img, name, topics, price, showIcon }) => {
  const getFontSizeForName = (string) => {
    if (string.length > 50) return "10px";
    if (string.length > 30) return "12px";
    if (string.length > 15) return "14px";
    return "16px";
  };
  
  const getFontSizeForTopics = (string) => {
    if (string.length > 40) return "7px";
    if (string.length > 30) return "10px";
    if (string.length > 20) return "12px";
    return "14px";
  };
  return (
    <Container>
      <ImgStyled src="./example.png" />
      <DetailsContainer>
        <div style={{fontSize: getFontSizeForName(name)}}>{name}</div>
        <div style={{fontSize: getFontSizeForTopics(topics)}}>
          {topics}
        </div>
        {price > 0.0 ? (
          <PriceIconContainer>
            <span>$ {price}</span>
            {showIcon && <ArrowForwardIcon />}
          </PriceIconContainer>
        ) : (
          <PriceIconContainer>
            <span>Free</span>
            {showIcon && <ArrowForwardIcon />}
          </PriceIconContainer>
        )}
      </DetailsContainer>
    </Container>
  );
};

export default CustomBook;
