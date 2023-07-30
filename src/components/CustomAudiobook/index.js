import React from "react";
import {
  Container,
  DetailsContainer,
  ImgStyled,
  PriceIconContainer,
} from "./index.style";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CustomAudiobook = ({ img, name, author, price, showIcon }) => {
  
  return (
    <Container>
      <ImgStyled src={img} alt={img} />
      <DetailsContainer>
        <div className="NameStyle">{name}</div>
        <div className="AuthorStyle">{author}</div>
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
