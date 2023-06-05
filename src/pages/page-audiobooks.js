import React from "react";
import {
  BackgroundImage,
  Container,
  MainContainer,
  MainInformation,
} from "../styles/PageAudiobooks.style";
import CustomAudiobook from "../components/CustomAudiobook";

const PageAudiobooks = () => {
  return (
    <Container>
      <MainContainer>
        <MainInformation>
          <h1>Body Bold Extra Large.</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </MainInformation>
        <BackgroundImage />
      </MainContainer>
      <CustomAudiobook
        name="Nombre"
        detail="Lorem ipsum dolor sit amet"
        price="0.00"
      />
    </Container>
  );
};

export default PageAudiobooks;
