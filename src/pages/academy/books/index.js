import Image from "next/image";
import CustomBook from "../../../components/CustomBook";
import Filter from "../../../components/Filter";
import FilterDrawer from "../../../components/FilterDrawer";
import { audiobooks } from "../../../constants";
import {
  BookContainer,
  BookGridContainer,
  Container,
  EmptyStateContainer,
  FilterContainer,
  ImageStyled,
  MainContainer,
  MainInformation,
} from "../../../styles/PageBooks.style";
import Link from "next/link";

export default function Books() {
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
        <ImageStyled src="/img/read.svg" width={350} height={300} />
      </MainContainer>
      <FilterContainer>
        <Filter />
        <FilterDrawer></FilterDrawer>
      </FilterContainer>
      <BookContainer>
        {audiobooks.length > 0 ? (
          <BookGridContainer>
            {audiobooks.map((item, index) => (
              <Link
                href="/academy/books/view/[id]"
                as={`/academy/books/view/${item.id}`}
                key={item.id}
              >
                <div>
                  <CustomBook
                    key={index}
                    img={item.img}
                    name={item.name}
                    author={item.author}
                    price={item.price}
                  />
                </div>
              </Link>
            ))}
          </BookGridContainer>
        ) : (
          <EmptyStateContainer>
            <Image src="/img/search.svg" width={150} height={150} />
            <span>Aún no hay compras disponibles</span>
          </EmptyStateContainer>
        )}
      </BookContainer>
    </Container>
  );
}
