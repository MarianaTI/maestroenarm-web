import { useEffect } from "react";
import { MatchCard } from "../../../components/MatchCard";
import Layout from "../../../layouts/index";
import {
  FlexLeftWrapper,
  FlexRightWrapper,
  MatchCardContainer,
} from "../../../styles/Game.style";
import { db } from "../../../services/firebase/config";
import { useRouter } from "next/router";
import { useAuth } from "../../../context/AuthProvider";
import { doc, updateDoc } from "firebase/firestore";

export default function Game() {
  const router = useRouter();
  const auth = useAuth();

  const setPlayerTwo = async () => {
    const gameRef = doc(db, "games", router.query.roomId);

    // Set the "capital" field of the city 'DC'
    await updateDoc(gameRef, {
      player_2: {
        name: auth.user.displayName,
        photo_url: auth.user.photoURL,
      },
    });
  };
  useEffect(() => {
    console.log("hola");
    if (router.query.roomId && auth.user.displayName) setPlayerTwo();
  }, [router.query.roomId, auth.user.displayName]);
  return (
    <Layout>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ margin: "64px 0px 16px 82px" }}>
          Modo Multijugador amistoso
        </span>
        <span style={{ margin: "0px auto 64px auto" }}>
          TE HAS UNIDO A LA PARTIDA
        </span>
        <MatchCardContainer>
          <FlexRightWrapper>
            <MatchCard
              profile={{
                name: "Adriana Mis",
                specialty: "Ginecología",
                imgUrl: "https://thispersondoesnotexist.xyz/img/4183.jpg",
              }}
            />
          </FlexRightWrapper>
          <FlexLeftWrapper>
            <MatchCard
              profile={{
                name: "Alejandra Jiménez",
                specialty: "Pediatría",
                imgUrl: "https://thispersondoesnotexist.xyz/img/4127.jpg",
              }}
            />
          </FlexLeftWrapper>
        </MatchCardContainer>
      </div>
    </Layout>
  );
}
