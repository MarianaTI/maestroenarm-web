import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { doc, getDoc } from "@firebase/firestore";
import { audiobooksInterest } from "../../../../constants";
import CustomIndividualAudiobook from "../../../../components/CustomIndividualAudiobook";
import {
  InterestContainer,
  ViewContainer,
} from "../../../../styles/ViewAudiobooks.style";
import CustomAudiobook from "../../../../components/CustomAudiobook";
import Link from "next/link";
import { db } from "../../../../services/firebase/config";

export default function View() {
  const router = useRouter();
  const { id } = router.query;
  const [audiobook, setAudiobook] = useState(null);

  useEffect(() => {
    const getAudiobook = async () => {
      if(id) {
        const audiobookRef = doc(db, 'audiobooks', id);
        const audiobookDoc = await getDoc(audiobookRef);
        if (audiobookDoc.exists()) {
          setAudiobook(audiobookDoc.data());
        }
      }
    };
    getAudiobook();
  }, [id]);

  if (!audiobook) {
    return <p>Cargando...</p>;
  }

  return (
    <ViewContainer>
      <CustomIndividualAudiobook
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
      />
      {/* <InterestContainer>
        {audiobooksInterest.map((item, index) => (
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
      </InterestContainer> */}
    </ViewContainer>
  );
}
