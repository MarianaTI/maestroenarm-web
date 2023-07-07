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
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";

export default function Game() {
  const router = useRouter();
  const auth = useAuth();
  const [game, setGame] = useState({});

  const initGame = async () => {
    const game = await getGame();
    if (game.player_1.name !== auth.user.displayName) {
      await setPlayerTwo();
    }
  };

  const getGame = async () => {
    const gameDocRef = doc(db, "games", router.query.roomId);
    const gameDoc = await getDoc(gameDocRef);
    const game = gameDoc.data();
    setGame(game);
    return game;
  };

  useEffect(() => {
    if (router.query.roomId && auth.user.displayName) {
      initGame();
    }
  }, [router.query.roomId, auth.user.displayName]);

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
                imgUrl: game.player_1?.photo_url,
              }}
            />
          </FlexRightWrapper>
          <FlexLeftWrapper>
            <MatchCard
              profile={{
                name: "Alejandra Jiménez",
                specialty: "Pediatría",
                imgUrl: game.player_2?.photo_url ?? auth.user.photoURL,
              }}
            />
          </FlexLeftWrapper>
        </MatchCardContainer>
      </div>
    </Layout>
  );
}
