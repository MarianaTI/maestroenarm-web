import React from "react";
import {
  Container,
  DetailsContainer,
  ImgStyled,
  PriceIconContainer,
} from "./index.style";

const CustomBook = ({ img, name, author, price, showIcon }) => {
  return (
    <Container>
      <ImgStyled src={img} alt="img"/>
      <DetailsContainer>
        <div className="NameStyle">{name}</div>
        <div className="AuthorStyle">{author}</div>
        
      </DetailsContainer>
      {price > 0.0 ? (
          <PriceIconContainer>
            <span>$ {price}</span>
          </PriceIconContainer>
        ) : (
          <PriceIconContainer>
            <span>Free</span>
          </PriceIconContainer>
        )}
    </Container>
  );
};

export default CustomBook;
