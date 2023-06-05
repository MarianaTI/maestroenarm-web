import React from "react";
import { Container, DetailsContainer, ImgStyled } from "./index.style";

const CustomAudiobook = ({ img, name, detail, price }) => {
  return (
    <Container>
      <ImgStyled src="./audiobook-example.png" />
      <DetailsContainer>
        <samp>{name}</samp>
        <samp>{detail}</samp>
        <span>$ {price}</span>
      </DetailsContainer>
    </Container>
  );
};

export default CustomAudiobook;
