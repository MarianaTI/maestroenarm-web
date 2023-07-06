import { useState } from "react";
import { GameField } from "../../components/GameField";
import { GameSettingsModal } from "../../components/GameSettingsModal";
import { TitleGameContainer } from "../../styles/Game.style";
import { getRandomClinicalCases } from "../../utils";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebase/config";
import { useAuth } from "../../context/AuthProvider";

export default function Game() {
  const [open, setOpen] = useState(false);
  const auth = useAuth();

  console.log(auth.user);
  const handleRandomMultiplayerClick = async () => {
    const randomClinicalCases = getRandomClinicalCases(2);
    const docRef = await addDoc(collection(db, "games"), {
      clinical_case_ids: randomClinicalCases,
      current_clinical_case: 0,
      current_question: 0,
      player_1_current_answer: "",
      player_2_current_answer: "",
      player_1: {
        name: auth.user.displayName,
        photo_url: auth.user.photoURL,
      },
      player_2: null,
    });
    const roomId = docRef.id;
    const matchLink = `localhost:3000/game/match/${roomId}`;
    console.log(matchLink);
  };
  return (
    <>
      <TitleGameContainer>
        <h1 style={{ fontWeight: "500" }}>MODO PRÁCTICA</h1>
        <p>Feedback déspues de cada pregunta</p>
      </TitleGameContainer>
      <a href="/game">
        <GameField label="Aleatorio" />
      </a>
      <GameField label="Por Categoría"  onClick={() => setOpen(true)}/>
      <GameSettingsModal isOpen={open} />

      <TitleGameContainer>
        <h1 style={{ fontWeight: "500" }}>MODO MULTIJUGADOR</h1>
        <p>Feedback al finalizar el exámen</p>
        <p>AMISTOSO</p>
      </TitleGameContainer>
      <GameField label="Aleatorio" onClick={handleRandomMultiplayerClick} />
      <GameField label="Por Categoría" disabled  onClick={() => setOpen(true)} />
      <GameSettingsModal isOpen={open} closedModal={()=> setOpen(!open)}/>
    </>
  );
}
