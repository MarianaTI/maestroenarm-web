import {
  EmptyStateContainer,
  EmptyStateContainerBook,
  MainContainer,
  StyledTabs,
} from "../../../styles/ShoppingBag.styles";
import { Tab } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../services/firebase/config";
import { useAuth } from "../../../context/AuthProvider";
import { CardVideo } from "../../../components/CardVideo";
import { cloudinaryReact } from "../../../services/cloudinary/config";
import CustomBook from "../../../components/CustomBook";

export default function ShoppingBag() {
  const { user, loading } = useAuth()
  const [purchases, setPurchases] = useState([])
  const [videos, setVideos] = useState([])
  const [audiobooks, setAudiobooks] = useState([])
  const [books, SetBooks] = useState([])
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
    <MainContainer>
      <div>
        <h1>Mis compras</h1>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </div>
      <StyledTabs value={value} onChange={handleChange}>
        <Tab label="Videos" />
        <Tab label="Audiolibros" />
        <Tab label="Libros" />
      </StyledTabs>
      <div className="resource-container">
        {value === 0 && (
          <>
            {videos?.length > 0 ? (
              videos.map((video) => (
                <CardVideo
                  key={video.item.id}
                  title={video.item.name}
                  description={video.item.topics.join('')}
                  price={video.item.price}
                  url={`/academy/videos/watch/${video.item.id.replace('/', '%2F')}`}
                  player={cloudinaryReact.video(video.item.id)}
                >
                </CardVideo>
              ))
            ) : (
              <EmptyStateContainer>
                <Image src="/img/shop.svg" width={150} height={150} alt="shopping-bag-image" />
                <span>Aún no hay compras disponibles</span>
              </EmptyStateContainer>
            )}
          </>
        )}
        {value === 1 && (
          <>
            {audiobooks?.length > 0 ? (
              audiobooks.map((audiobook) => (
                <Link key={audiobook.item.id} href={`/academy/audiobooks/view/${audiobook.item.id}`} >
                  <CustomBook
                    img={audiobook.item.imgFront}
                    name={audiobook.item.name}
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
          </>
        )}
        {value === 2 && (
          <>
            {books?.length > 0 ? (
              books.map((book) => (
                <Link key={book.item.id} href={`/academy/books/view/${book.item.id}`}>
                  <CustomBook
                    img={book.item.imgFront}
                    name={book.item.name}
                    price={book.item.price}
                  />
                </Link>
              ))
            ) : (
              <EmptyStateContainerBook>
                <Image src="/img/shop.svg" width={150} height={150} alt="book-shop" />
                <span>Aún no hay compras disponibles</span>
              </EmptyStateContainerBook>
            )}
          </>
        )}
      </div>
    </MainContainer>
  );
}
