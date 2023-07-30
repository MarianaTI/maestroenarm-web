import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { doc, getDoc, collection, getDocs } from "@firebase/firestore";
import { db } from "../../../../services/firebase/config";
import CustomIndividualAudiobook from "../../../../components/CustomIndividualAudiobook";
import {
  InterestContainer,
  ViewContainer,
} from "../../../../styles/ViewAudiobooks.style";
import CustomAudiobook from "../../../../components/CustomAudiobook";
import Link from "next/link";
import LoadingPage from "../../../loading-page";

export default function View() {
  const router = useRouter();
  const { id } = router.query;
  const [audiobook, setAudiobook] = useState(null);
  const [relatedAudiobooks, setRelatedAudiobooks] = useState([]);

  useEffect(() => {
    const getAudiobook = async () => {
      if (id) {
        const audiobookRef = doc(db, "audiobooks", id);
        const audiobookDoc = await getDoc(audiobookRef);
        if (audiobookDoc.exists()) {
          setAudiobook(audiobookDoc.data());
        }
      }
    };
    getAudiobook();
  }, [id]);

  useEffect(() => {
    const fetchRelatedAudiobooks = async () => {
      if (!audiobook) return;
      const allAudiobooks = await getDocs(collection(db, "audiobooks"));
      const related = allAudiobooks.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter(isAudiobookRelated)
        .slice(0, 4); // Limita resultados
      setRelatedAudiobooks(related);
    };
    const isAudiobookRelated = (relatedAudiobook) => {
      const hasCommonTopic = relatedAudiobook.topics.some((topic) =>
        audiobook.topics.includes(topic)
      );
      const hasSameAuthor = relatedAudiobook.author === audiobook.author;
      const hasSimilarPrice =
        Math.abs(relatedAudiobook.price - audiobook.price) < 10;
      return hasCommonTopic || hasSameAuthor || hasSimilarPrice;
    };
    fetchRelatedAudiobooks();
  }, [audiobook]);


  if (!audiobook) {
    return <LoadingPage />;
  }

  return (
    <ViewContainer>
      <CustomIndividualAudiobook
        id={audiobook.id}
        type="Productos"
        imgFront={audiobook.imgFront}
        imgBack={audiobook.imgBack}
        name={audiobook.name}
        author={audiobook.author}
        storyteller={audiobook.storyteller}
        duration={audiobook.duration}
        topics={audiobook.topics}
        price={audiobook.price}
        details={audiobook.detail}
        audio={audiobook.audio}
        resource_type='audiobook'
      />
      <InterestContainer>
        <span className="InterestTitle">Articulos relacionados:</span>
        {relatedAudiobooks.map((item, index) => (
          <Link
            href="/academy/audiobooks/view/[id]"
            as={`/academy/audiobooks/view/${item.id}`}
            key={item.id}
          >
            <CustomAudiobook
              key={index}
              img={item.img}
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
