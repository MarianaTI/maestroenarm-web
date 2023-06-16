import React from "react";
import CustomIndividualBook from "../components/CustomIndividualBook";
import { books, booksInterest } from "../constants";
import { InterestContainer, ViewContainer } from "../styles/ViewBooks.style";
import CustomAudiobook from "../components/CustomAudiobook";


const ViewBookFree = () => {
  return (
    <ViewContainer>
      {books.filter((item) => item.price === 0)
      .map((item, index) => (
        <CustomIndividualBook
        key={index}
        name={item.name}
        author={item.author}
        topics={item.topics}
        price={item.price}
        details={item.detail}
        />
      ))}
      <InterestContainer>
        <span className="InterestTitle">Tambien te puede interesar:</span>
        {booksInterest.map((item, index) => (
          <CustomAudiobook
            key={index}
            img={item.img}
            name={item.name}
            detail={item.topics}
            price={item.price}
          />
        ))}
      </InterestContainer>
    </ViewContainer>
  );
};

export default ViewBookFree;
