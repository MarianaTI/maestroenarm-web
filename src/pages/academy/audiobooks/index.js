import CustomAudiobook from "../../../components/CustomAudiobook";
import Filter from "../../../components/Filter";
import FilterDrawer from "../../../components/FilterDrawer";
import { audiobooks } from "../../../constants";
import {
  AudiobookContainer,
  AudiobookGridContainer,
  Container,
  EmptyStateContainer,
  FilterContainer,
  GridImage,
  MainContainer,
  MainInformation,
} from "../../../styles/PageAudiobooks.style";
import Link from "next/link";

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
        <GridImage src="../podcast.svg" width={350} height={300} />
      </MainContainer>
      <FilterContainer>
        <Filter />
        <FilterDrawer></FilterDrawer>
      </FilterContainer>
      <AudiobookContainer>
        <AudiobookGridContainer>
          {audiobooks.map((item, index) => (
            <Link
              href="/academy/audiobooks/view/[id]"
              as={`/academy/audiobooks/view/${item.id}`}
              key={item.id}
            >
              <div>
                <CustomAudiobook
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
        </AudiobookGridContainer>
        {/* {audiobooks.length > 0 ? (
         
        ) : (
          <EmptyStateContainer src="./search.svg" width={300} height={300}>
            <span>No result found</span>
          </EmptyStateContainer>
        )} */}
      </AudiobookContainer>
    </Container>
  );
}
