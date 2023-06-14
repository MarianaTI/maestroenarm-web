import React from "react";
import {
  EmptyStateContainer,
  MainContainer,
  StyledTabs,
  TabContainer,
  TabInformation,
} from "../styles/ShoppingBag.style";
import { Tab } from "@mui/material";
import {
  audiobooksInterest,
  booksInterest,
  videosInterest,
} from "../constants";
import CustomAudiobook from "../components/CustomAudiobook";
import CustomBook from "../components/CustomBook";

const ShoppingBag = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <MainContainer>
        <h1>Mis compras</h1>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </MainContainer>
      <TabContainer>
        <StyledTabs value={value} onChange={handleChange}>
          <Tab label="Videos" />
          <Tab label="Audiolibros" />
          <Tab label="Libros" />
        </StyledTabs>
        {value === 0 && (
          <TabInformation>
            {videosInterest.length > 0 ? (
              videosInterest.map((item, index) => (
                <CustomAudiobook
                  key={index}
                  img={item.img}
                  name={item.name}
                  detail={item.topics}
                  price={item.price}
                />
              ))
            ) : (
              <EmptyStateContainer>
                <span>Aún no hay compras disponibles</span>
              </EmptyStateContainer>
            )}
           
          </TabInformation>
        )}
        {value === 1 && (
          <TabInformation>
            {audiobooksInterest.length > 0 ? (
              audiobooksInterest.map((item, index) => (
                <CustomAudiobook
                  key={index}
                  img={item.img}
                  name={item.name}
                  detail={item.topics}
                  price={item.price}
                />
              ))
            ) : (
              <EmptyStateContainer>
                <span>Aún no hay compras disponibles</span>
              </EmptyStateContainer>
            )}
          </TabInformation>
        )}
        {value === 2 && (
          <TabInformation>
            {booksInterest.length > 0 ? (
              booksInterest.map((item, index) => (
                <CustomBook
                key={index}
                img={item.img}
                name={item.name}
                topics={item.topics}
                price={item.price}
              />
              ))
            ) : (
              <EmptyStateContainer>
                <span>Aún no hay compras disponibles</span>
              </EmptyStateContainer>
            )}
          </TabInformation>
        )}
      </TabContainer>
    </div>
  );
};

export default ShoppingBag;
