import { useRouter } from "next/router";
import { audiobooks, audiobooksInterest } from "../../../../constants";
import CustomIndividualAudiobook from "../../../../components/CustomIndividualAudiobook";
import {
  InterestContainer,
  ViewContainer,
} from "../../../../styles/ViewAudiobooks.style";
import CustomAudiobook from "../../../../components/CustomAudiobook";
import Link from "next/link";

export default function View() {
  const router = useRouter();
  const { id } = router.query;

  const audiobook = audiobooks.find((book) => book.id == id);
  if (!audiobook) {
    return <p>Este audiolibro no esta disponible</p>;
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
      />
      <InterestContainer>
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
      </InterestContainer>
    </ViewContainer>
  );
}
