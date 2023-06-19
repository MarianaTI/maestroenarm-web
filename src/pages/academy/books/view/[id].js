import { useRouter } from "next/router";
import { books } from "../../../../constants";
import { ViewContainer } from "../../../../styles/ViewBooks.style";
import CustomIndividualBook from "../../../../components/CustomIndividualBook";

export default function View() {
    const router = useRouter();
    const {id} = router.query;

    const book = books.find((book) => book.id == id);
    if (!book) {
        return <p>Este libro no esta disponible</p>;
    }
  return (
    <ViewContainer>
      <CustomIndividualBook
      img={book.img}
      name={book.name}
      author={book.author}
      topics={book.topics}
      details={book.detail}
      price={book.price}
      />
    </ViewContainer>
  );
}
