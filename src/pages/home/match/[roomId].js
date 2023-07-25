import { useEffect } from "react";
import { MatchCard } from "../../../components/MatchCard";
import Layout from "../../../layouts/index";
import {
  FlexLeftWrapper,
  FlexRightWrapper,
  MatchCardContainer,
  MatchLobbyFooter,
} from "../../../styles/Game.style";
import { db } from "../../../services/firebase/config";
import { useRouter } from "next/router";
import { useAuth } from "../../../context/AuthProvider";
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { CustomButton } from "../../../components/CustomButton";

export default function Game() {
  const router = useRouter();
  const auth = useAuth();
  const [game, setGame] = useState({});
  const [isPlayer1, setIsPlayer1] = useState(false);
  const [isPlayer2, setIsPlayer2] = useState(false);

  useEffect(() => {
    if (router.query.roomId && auth.user.displayName) {
      const gameDocRef = doc(db, "games", router.query.roomId);
      const unsubscribe = onSnapshot(gameDocRef, async (gameDoc) => {
        const game = gameDoc.data();
        const isPlayer1 = game.player_1.name === auth.user.displayName;
        const isPlayer2 = game.player_2?.name === auth.user.displayName;
        setIsPlayer1(isPlayer1);
        setIsPlayer2(isPlayer2);
        if (!isPlayer1 && !isPlayer2) {
          await setPlayerTwo();
        }
        setGame(game);
      });
      return () => unsubscribe();
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

  const handleSetReadyForPlayer = async () => {
    const gameRef = doc(db, "games", router.query.roomId);
    await updateDoc(
      gameRef,
      isPlayer1
        ? {
            player_1_ready: !game.player_1_ready,
          }
        : {
            player_2_ready: !game.player_2_ready,
          }
    );
  };

  const getButtonLabel = () => {
    if (isPlayer1) {
      return game.player_1_ready ? "Listo" : "No Listo";
    }
    return game.player_2_ready ? "Listo" : "No Listo";
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
              imgUrl={game.player_1?.photo_url ?? auth.user.photoURL}
              name={game.player_1?.name}
              specialty={game.player_1_ready ? "Listo" : "En espera..."}
            />
          </FlexRightWrapper>
          <FlexLeftWrapper>
            <MatchCard
              imgUrl={game.player_2?.photo_url ?? auth.user.photoURL}
              name={game.player_2?.name ?? auth.user.displayName}
              specialty={game.player_2_ready ? "Listo" : "En espera..."}
            />
          </FlexLeftWrapper>
        </MatchCardContainer>
        <MatchLobbyFooter>
          <CustomButton size="large" onClick={handleSetReadyForPlayer}>
            {getButtonLabel()}
          </CustomButton>
        </MatchLobbyFooter>
      </div>
    </Layout>
  );
}
