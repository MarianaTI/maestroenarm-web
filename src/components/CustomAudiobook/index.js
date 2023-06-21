import React from "react";
import {
  Container,
  DetailsContainer,
  ImgStyled,
  PriceIconContainer,
} from "./index.style";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CustomAudiobook = ({ img, name, topics, price, showIcon }) => {
  const getFontSizeForName = (string) => {
    if (string.length > 50) return "9px";
    if (string.length > 40) return "10px";
    if (string.length > 30) return "14px";
    return "12px";
  };
  
  const getFontSizeForTopics = (string) => {
    if (string.length > 80) return "8px";
    if (string.length > 70) return "9px";
    if (string.length > 60) return "10px";
    return "8px";
  };
  return (
    <Container>
      <ImgStyled src={img} />
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

export default CustomAudiobook;
