import {
  EmptyStateContainer,
  EmptyStateContainerBook,
  MainContainer,
  StyledTabs,
  TabContainer,
  TabInformation,
} from "../../../styles/ShoppingBag.style";
import { Tab } from "@mui/material";
import CustomAudiobook from "../../../components/CustomAudiobook";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../services/firebase/config";
import { useAuth } from "../../../context/AuthProvider";
import { CardVideo } from "../../../components/CardVideo";
import { cloudinaryReact } from "../../../services/cloudinary/config";
import { VideoCardContainer } from "../../../styles/Videos.style"; 

export default function ShoppingBag() {
  const { user, loading } = useAuth()
  const [purchases, setPurchases] = useState()
  const [videos, setVideos] = useState()
  const [audiobooks, setAudiobooks] = useState()
  const [books, SetBooks] = useState()
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getPurchases() {
    if (loading) return;
    const snapshot = await getDocs(query(collection(db, 'purchases'), where('email', '==', user.email)))
    setPurchases(snapshot.docs.map(doc => doc.data()))
  }

  useEffect(() => {
    setVideos(purchases?.filter(video => video.item.resource_type == 'video'))
    SetBooks(purchases?.filter(video => video.item.resource_type == 'book'))
    setAudiobooks(purchases?.filter(video => video.item.resource_type == 'audiobook'))
  }, [value])

  useEffect(() => {
    getPurchases()
  }, [loading]);

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
          <VideoCardContainer>
            {videos?.length > 0 ? (
              videos.map((video) => (
                <CardVideo
                  key={video.item.id}
                  title={video.item.name}
                  description={video.item.topics.join('')}
                  price={video.item.price}
                  url={`/academy/videos/watch/${video.item.id.replace('/', '%2F')}`}
                  player={cloudinaryReact.video(video.item.id)}
                  isReponsive={true}
                >
                </CardVideo>
              ))
            ) : (
              <EmptyStateContainer>
                <Image src="/img/shop.svg" width={150} height={150} alt="shopping-bag-image" />
                <span>Aún no hay compras disponibles</span>
              </EmptyStateContainer>
            )}
          </VideoCardContainer>
        )}
        {value === 1 && (
          <TabInformation>
            {audiobooks?.length > 0 ? (
              audiobooks.map((audiobook) => (
                <Link
                  href={"/academy/audiobooks/view/" + audiobook.item.id}
                  key={audiobook.item.id}
                >
                  <CustomAudiobook
                    key={audiobook.item.id}
                    img={audiobook.item.imgFront}
                    name={audiobook.item.name}
                    topics={audiobook.item.topics}
                    price={audiobook.item.price}
                  />
                </Link>
              ))
            ) : (
              <EmptyStateContainer>
                <Image src="/img/shop.svg" width={150} height={150} alt="shopping-bag-empty" />
                <span>Aún no hay compras disponibles</span>
              </EmptyStateContainer>
            )}
          </TabInformation>
        )}
        {value === 2 && (
          <TabInformation>
            {books?.length > 0 ? (
              books.map((book) => (

                <CustomAudiobook
                  key={book.item.id}
                  img={book.item.imgFront}
                  name={book.item.name}
                  topics={book.item.topics}
                  price={book.item.price}
                />

              ))
            ) : (
              <EmptyStateContainerBook>
                <Image src="/img/shop.svg" width={150} height={150} alt="book-shop" />
                <span>Aún no hay compras disponibles</span>
              </EmptyStateContainerBook>
            )}
          </TabInformation>
        )}
      </TabContainer>
    </div>
  );
}
