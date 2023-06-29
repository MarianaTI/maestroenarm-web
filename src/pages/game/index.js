import { useState } from "react";
import { GameField } from "../../components/GameField";
import { GameSettingsModal } from "../../components/GameSettingsModal";
import { TitleGameContainer } from "../../styles/Game.style";


export default function Game() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TitleGameContainer>
        <h1 style={{ fontWeight: "500" }}>MODO PRÁCTICA</h1>
        <p>Feedback déspues de cada pregunta</p>
      </TitleGameContainer>
      <a href="/demo">
        <GameField label="Aleatorio" /> 
      </a>
      <GameField label="Por Categoría" disabled />
      <TitleGameContainer>
        <h1 style={{ fontWeight: "500" }}>MODO MULTIJUGADOR</h1>
        <p>Feedback al finalizar el exámen</p>
        <p>AMISTOSO</p>
      </TitleGameContainer>
      <a href="#">
        <GameField label="Aleatorio"/>
      </a>
      <GameField  label="Por Categoría"
        disabled
        onClick={() => setOpen(true)}
      />
      <GameSettingsModal isOpen={open} />
    </>
  );
}
