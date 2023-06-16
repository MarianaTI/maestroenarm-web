import React from "react";
import {
  AudiobookContainer,
  AudiobookGridContainer,
  BackgroundImage,
  Container,
  EmptyStateContainer,
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
        {audiobooks.length > 0 ? (
          <AudiobookGridContainer>
            {audiobooks.map((item, index) => (
              <CustomAudiobook
                key={index}
                img={item.img}
                name={item.name}
                detail={item.topics}
                price={item.price}
                showIcon
              />
            ))}
          </AudiobookGridContainer>
        ) : (
          <EmptyStateContainer>
            <span>No result found</span>
          </EmptyStateContainer>
        )}
      </AudiobookContainer>
    </Container>
  );
};

export default PageAudiobooks;
