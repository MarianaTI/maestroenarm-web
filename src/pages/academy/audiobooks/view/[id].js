import { useRouter } from "next/router";
import { audiobooks } from "../../../constants";

export default function View({ audiobook }) {
  return (
    <div>
      <h1>{audiobook.name}</h1>
      <p>{audiobook.detail}</p>
      <p>{audiobook.price}</p>
    </div>
  );
}

export async function getServerSideProps({ params }) {
    const { id } = params;
  
    // Obtén el audiolibro según el ID
    const audiobook = audiobooks.find((item) => item.id === id);
  
    return {
      props: {
        audiobook,
      },
    };
  }