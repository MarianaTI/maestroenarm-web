import React from "react";
import {
  AudiobookContainer,
  BackgroundImage,
  Container,
  MainContainer,
  MainInformation,
} from "../styles/PageAudiobooks.style";
import CustomAudiobook from "../components/CustomAudiobook";
import { audiobooks } from "../constants";

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
      <AudiobookContainer>
        {audiobooks.map((item, index) => (
          <CustomAudiobook
            key={index}
            img={item.img}
            name={item.name}
            detail={item.detail}
            price={item.price}
            showIcon
          />
        ))}
      </AudiobookContainer>
    </Container>
  );
};

export default PageAudiobooks;
