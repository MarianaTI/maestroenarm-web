import {
  EmptyStateContainer,
  EmptyStateContainerBook,
  MainContainer,
  StyledTabs,
  TabContainer,
  TabInformation,
  TabInformationBook,
} from "../../../styles/ShoppingBag.style";
import { Tab } from "@mui/material";
import { audiobooksInterest, videosInterest, booksInterest } from "../../../constants";
import CustomAudiobook from "../../../components/CustomAudiobook";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ShoppingBag() {
  const [value, setValue] = useState(0);
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
                  topics={item.topics}
                  price={item.price}
                />
              ))
            ) : (
              <EmptyStateContainer>
                <Image src="/img/shop.svg" width={150} height={150} />
                <span>Aún no hay compras disponibles</span>
              </EmptyStateContainer>
            )}
          </TabInformation>
        )}
        {value === 1 && (
          <TabInformation>
            {audiobooksInterest.length > 0 ? (
              audiobooksInterest.map((item, index) => (
                <Link
                  href="/academy/audiobooks/view/[id]"
                  as={`/academy/audiobooks/view/${item.id}`}
                  key={item.id}
                >
                  <CustomAudiobook
                    key={index}
                    img={item.img}
                    name={item.name}
                    topics={item.topics}
                  />
                </Link>
              ))
            ) : (
              <EmptyStateContainer>
                <Image src="/img/shop.svg" width={150} height={150} />
                <span>Aún no hay compras disponibles</span>
              </EmptyStateContainer>
            )}
          </TabInformation>
        )}
        {value === 2 && (
          <TabInformation>
            {booksInterest.length > 0 ? (
              booksInterest.map((item, index) => (
                <Link
                  href="/academy/books/view/[id]"
                  as={`/academy/books/view/${item.id}`}
                  key={item.id}
                >
                  <CustomAudiobook
                    key={index}
                    img={item.img}
                    name={item.name}
                    topics={item.topics}
                  />
                </Link>
              ))
            ) : (
              <EmptyStateContainerBook>
                <Image src="/img/shop.svg" width={150} height={150} />
                <span>Aún no hay compras disponibles</span>
              </EmptyStateContainerBook>
            )}
          </TabInformation>
        )}
      </TabContainer>
    </div>
  );
}
