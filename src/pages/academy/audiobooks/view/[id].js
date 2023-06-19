import { useRouter } from "next/router";
import { audiobooks, audiobooksInterest } from "../../../../constants";
import CustomIndividualAudiobook from "../../../../components/CustomIndividualAudiobook";
import { InterestContainer, ViewContainer } from "../../../../styles/ViewAudiobooks.style";
import CustomAudiobook from "../../../../components/CustomAudiobook";

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
      name={audiobook.name}
      author={audiobook.author}
      storyteller={audiobook.storyteller}
      duration={audiobook.duration}
      topics={audiobook.topics}
      price={audiobook.price}
      details={audiobook.detail}
    />
    <InterestContainer>
        <span className="InterestTitle">Tambien te puede interesar:</span>
        {audiobooksInterest.map((item, index) => (
          <CustomAudiobook
            key={index}
            img={item.img}
            name={item.name}
            detail={item.topics}
            price={item.price}
          />
        ))}
      </InterestContainer>
   </ViewContainer>
 );
}
