import CustomBook from "../../../components/CustomBook";
import Filter from "../../../components/Filter";
import FilterDrawer from "../../../components/FilterDrawer";
import { books } from "../../../constants";
import {
  BookContainer,
  BookGridContainer,
  Container,
  EmptyStateContainer,
  FilterContainer,
  GridImage,
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
        <GridImage src="../read.svg" width={350} height={300} />
      </MainContainer>
      <FilterContainer>
        <Filter />
        <FilterDrawer></FilterDrawer>
      </FilterContainer>
      <BookContainer>
        <BookGridContainer>
          {books.map((item, index) => (
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
                  topics={item.topics}
                  price={item.price}
                  showIcon
                />
              </div>
            </Link>
          ))}
        </BookGridContainer>
        {/* ) : (
          <EmptyStateContainer src="./search.svg" width={300} height={300}>
            <span>No result found</span>
          </EmptyStateContainer>
        )} */}
      </BookContainer>
    </Container>
  );
}
