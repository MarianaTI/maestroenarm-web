import { useRouter } from "next/router";
import { audiobooks, audiobooksInterest } from "../../../../constants";
import { InterestContainer, ViewContainer } from "../../../../styles/ViewBooks.style";
import CustomIndividualBook from "../../../../components/CustomIndividualBook";
import Link from "next/link";
import CustomAudiobook from "../../../../components/CustomAudiobook";

export default function View() {
  const router = useRouter();
  const { id } = router.query;

  const book = audiobooks.find((book) => book.id == id);
  if (!book) {
    return <p>Este libro no esta disponible</p>;
  }
  return (
    <ViewContainer>
      <CustomIndividualBook
        imgFront={book.imgFront}
        imgBack={book.imgBack}
        name={book.name}
        author={book.author}
        topics={book.topics}
        details={book.detail}
        price={book.price}
      />
      <InterestContainer>
        {audiobooksInterest.map((item, index) => (
          <Link
            href="/academy/books/view/[id]"
            as={`/academy/books/view/${item.id}`}
            key={item.id}
          >
            <CustomAudiobook
              key={index}
              img={item.img}
              name={item.name}
              topics={item.topics}
              price={item.price}
            />
          </Link>
        ))}
      </InterestContainer>
    </ViewContainer>
  );
}
