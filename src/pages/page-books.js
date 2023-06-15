import React from "react";
import {
  BackgroundImage,
  BookContainer,
  BookGridContainer,
  Container,
  EmptyStateContainer,
  MainContainer,
  MainInformation,
} from "../styles/PageBooks.style";
import CustomBook from "../components/CustomBook/index";
import { books } from "../constants";

const PageBooks = () => {
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
      <BookContainer>
        {books.length > 0 ? (
          <BookGridContainer>
            {books.map((item, index) => (
              <CustomBook
                key={index}
                img={item.img}
                name={item.name}
                topics={item.topics}
                price={item.price}
                showIcon
              />
            ))}
          </BookGridContainer>
        ) : (
          <EmptyStateContainer>
            <span>No result found</span>
          </EmptyStateContainer>
        )}
      </BookContainer>
    </Container>
  );
};

export default PageBooks;
