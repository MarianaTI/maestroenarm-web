import { useState } from "react";
import { GameField } from "../../components/GameField";
import { GameSettingsModal } from "../../components/GameSettingsModal";
import { LinkModalBody, TitleGameContainer } from "../../styles/Game.style";
import { getRandomClinicalCases } from "../../utils";
import { addDoc, collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../services/firebase/config";
import { useAuth } from "../../context/AuthProvider";
import CustomModal from "../../components/CustomModal";
import ShareIcon from "@mui/icons-material/Share";
import { CustomButton } from "../../components/CustomButton";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Game() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const auth = useAuth();
  const [isMultiplayerLinkModalOpen, setIsMultiplayerLinkModalOpen] =
    useState(false);
  const [roomId, setRoomId] = useState("");

  useEffect(() => {
    if (roomId) {
      const unsub = onSnapshot(doc(db, "games", roomId), (doc) => {
        const { player_2: player2 } = doc.data();
        if (player2) {
          router.push("/home/match/" + roomId);
        }
      });

      return () => unsub();
    }
  }, [roomId]);
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
    setRoomId(roomId);
    setIsMultiplayerLinkModalOpen(true);
  };

  const handleCopyLinkToClipboard = () => {
    navigator.clipboard.writeText(`localhost:3000/home/match/${roomId}`);
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
      <GameField label="Por Categoría" onClick={() => setOpen(true)} />
      <GameSettingsModal isOpen={open} />

      <TitleGameContainer>
        <h1 style={{ fontWeight: "500" }}>MODO MULTIJUGADOR</h1>
        <p>Feedback al finalizar el exámen</p>
        <p>AMISTOSO</p>
      </TitleGameContainer>
      <GameField label="Aleatorio" onClick={handleRandomMultiplayerClick} />
      <GameField label="Por Categoría" disabled onClick={() => setOpen(true)} />
      <GameSettingsModal isOpen={open} closedModal={() => setOpen(!open)} />
      <CustomModal
        title="¡Estamos esperando a tu contrincante!"
        message="Comparte este link con algún amigo y averiguar quien sabe más. ¿Quién será...?"
        open={isMultiplayerLinkModalOpen}
        onClose={() => setIsMultiplayerLinkModalOpen(false)}
      >
        <LinkModalBody>
          <span>Copiar Link</span>
          <div className="link-container">
            <span>{`localhost:3000/home/match/${roomId}`}</span>
            <CustomButton theme="icon" onClick={handleCopyLinkToClipboard}>
              <ShareIcon />
            </CustomButton>
          </div>
          <span>Esperando...</span>
        </LinkModalBody>
      </CustomModal>
    </>
  );
}
