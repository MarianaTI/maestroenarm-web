import React from "react";
import {
  Container,
  DetailsContainer,
  ImgStyled,
  PriceIconContainer,
} from "./index.style";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


const CustomAudiobook = ({ img, name, detail, price, showIcon }) => {
  const getFontSizeBasedOnLength = (string) => {
    if (string.length > 30) return "10px";
    if (string.length > 20) return "12px";
    return "14px";
  };
  return (
    <Container>
      <ImgStyled src={img} />
      <DetailsContainer>
        <div >{name}</div>
        <div style={{fontSize: getFontSizeBasedOnLength(detail)}}>{detail}</div>
        <PriceIconContainer>
          <span>$ {price}</span>
          {showIcon && <ArrowForwardIcon />}
        </PriceIconContainer>
      </DetailsContainer>
    </Container>
  );
};

export default CustomAudiobook;
