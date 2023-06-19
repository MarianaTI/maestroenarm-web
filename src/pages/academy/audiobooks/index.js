import CustomAudiobook from "../../../components/CustomAudiobook";
import Filter from "../../../components/Filter";
import FilterDrawer from "../../../components/FilterDrawer";
import { audiobooks } from "../../../constants";
import {
  AudiobookContainer,
  AudiobookGridContainer,
  BackgroundImage,
  Container,
  EmptyStateContainer,
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
        <BackgroundImage />
      </MainContainer>
      <AudiobookContainer>
        <AudiobookGridContainer>
          {audiobooks.map((item, index) => (
            <Link key={index} href={"/view/${item.id}"}>
              <a>
                <CustomAudiobook
                  key={index}
                  img={item.img}
                  name={item.name}
                  detail={item.topics}
                  price={item.price}
                  showIcon
                />
              </a>
            </Link>
          ))}
        </AudiobookGridContainer>
        {/* {audiobooks.length > 0 ? (
         
        ) : (
          <EmptyStateContainer>
            <span>No result found</span>
          </EmptyStateContainer>
        )} */}
      </AudiobookContainer>
    </Container>
  );
}
