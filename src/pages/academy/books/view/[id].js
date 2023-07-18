import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { doc, getDoc, collection, getDocs } from "@firebase/firestore";
import { db } from "../../../../services/firebase/config";
import {
  InterestContainer,
  ViewContainer,
} from "../../../../styles/ViewBooks.style";
import CustomAudiobook from "../../../../components/CustomAudiobook";
import Link from "next/link";
import LoadingPage from "../../../loading-page";
import CustomIndividualBook from "../../../../components/CustomIndividualBook";

export default function View() {
  const router = useRouter();
  const { id } = router.query;
  const [book, setAudiobook] = useState(null);
  const [relatedBooks, setRelatedBooks] = useState([]);

  useEffect(() => {
    const getAudiobook = async () => {
      if (id) {
        const bookRef = doc(db, "books", id);
        const bookDoc = await getDoc(bookRef);
        if (bookDoc.exists()) {
          setAudiobook(bookDoc.data());
        }
      }
    };
    getAudiobook();
  }, [id]);

  useEffect(() => {
    const fetchRelatedBooks = async () => {
      if (!book) return;
      const allBooks = await getDocs(collection(db, "books"));
      const related = allBooks.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter(isAudiobookRelated)
        .slice(0, 4); // Limita resultados
      setRelatedBooks(related);
    };
    const isAudiobookRelated = (relatedAudiobook) => {
      const hasCommonTopic = relatedAudiobook.topics.some((topic) =>
        book.topics.includes(topic)
      );
      const hasSameAuthor = relatedAudiobook.author === book.author;
      const hasSimilarPrice =
        Math.abs(relatedAudiobook.price - book.price) < 10;
      return hasCommonTopic || hasSameAuthor || hasSimilarPrice;
    };
    fetchRelatedBooks();
  }, [book]);

  if (!book) {
    return <LoadingPage />;
  }

  return (
    <ViewContainer>
      <CustomIndividualBook
        imgFront={book.images.font}
        imgBack={book.images.back}
        name={book.name}
        author={book.author}
        topics={book.topics}
        price={book.price}
        details={book.detail}
      />
      <InterestContainer>
        <span className="InterestTitle">Articulos relacionados:</span>
        {relatedBooks.map((item, index) => (
          <Link
            href="/academy/books/view/[id]"
            as={`/academy/books/view/${item.id}`}
            key={item.id}
          >
            <CustomAudiobook
              key={index}
              img={item.images.font}
              name={item.name}
              author={item.author}
              price={item.price}
            />
          </Link>
        ))}
      </InterestContainer>
    </ViewContainer>
  );
}
