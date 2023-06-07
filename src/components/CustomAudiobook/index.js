import React from "react";
import {
  Container,
  DetailsContainer,
  IconStyled,
  ImgStyled,
} from "./index.style";

const CustomAudiobook = ({ img, name, detail, price, showIcon }) => {
  return (
    <Container>
      <ImgStyled src={img} />
      <DetailsContainer>
        <span>{name}</span>
        <span>{detail}</span>
        <span>$ {price}</span>
        {showIcon && <IconStyled />}
      </DetailsContainer>
    </Container>
  );
};

export default CustomAudiobook;
