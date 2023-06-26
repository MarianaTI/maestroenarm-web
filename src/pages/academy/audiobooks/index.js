import Image from "next/image";
import Filter from "../../../components/Filter";
import FilterDrawer from "../../../components/FilterDrawer";
import { audiobooks } from "../../../constants";
import {
  AudiobookContainer,
  AudiobookGridContainer,
  Container,
  EmptyStateContainer,
  FilterContainer,
  ImageStyled,
  MainContainer,
  MainInformation,
} from "../../../styles/PageAudiobooks.style";
import Link from "next/link";
import CustomBook from "../../../components/CustomBook";

export default function AudioBooks() {
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
        <ImageStyled src="/img/podcast.svg" width={350} height={300} />
      </MainContainer>
      <FilterContainer>
        <Filter />
        <FilterDrawer></FilterDrawer>
      </FilterContainer>
      <AudiobookContainer>
        {audiobooks.length > 0 ? (
          <AudiobookGridContainer>
            {audiobooks.map((item, index) => (
              <Link
                href="/academy/audiobooks/view/[id]"
                as={`/academy/audiobooks/view/${item.id}`}
                key={item.id}
              >
                <div>
                  <CustomBook
                    key={index}
                    img={item.img}
                    name={item.name}
                    topics={item.author}
                    price={item.price}
                  />
                </div>
              </Link>
            ))}
          </AudiobookGridContainer>
        ) : (
          <EmptyStateContainer>
            <Image src="/img/search.svg" width={150} height={150} />
            <span>Aún no hay compras disponibles</span>
          </EmptyStateContainer>
        )}
      </AudiobookContainer>
    </Container>
  );
}
