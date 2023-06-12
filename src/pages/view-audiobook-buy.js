import React from "react";
import CustomIndividualAudiobook from "../components/CustomIndividualAudiobook";
import CustomAudiobook from "../components/CustomAudiobook";
import { audiobooksInterest } from "../constants";
import {
  InterestContainer,
  ViewContainer,
} from "../styles/ViewAudiobookBuy.style";
import { audiobooks } from "../constants";

const ViewAudiobookBuy = () => {
  return (
    <ViewContainer>
      {audiobooks
        .filter((item) => item.price > 0)
        .map((item, index) => (
          <CustomIndividualAudiobook
            key={index}
            name={item.name}
            author={item.author}
            storyteller={item.storyteller}
            duration={item.duration}
            topics={item.topics}
            price={item.price}
            details={item.detail}
          />
        ))}
      <InterestContainer>
        <span className="InterestTitle">Tambien te puede interesar:</span>
        {audiobooksInterest.map((item, index) => (
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

export default ViewAudiobookBuy;
