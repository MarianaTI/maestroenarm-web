import { useState } from "react";
import { GameField } from "../../components/GameField";
import { GameSettingsModal } from "../../components/GameSettingsModal";
import Layout from "../layout/index";
import { TitleGameContainer } from "../../styles/Game";

export default function Game() {
    const [open, setOpen] = useState(false);
    return <>
        <Layout>
            <TitleGameContainer>
                <h1 style={{ fontWeight: '500' }}>MODO PRÁCTICA</h1>
                <p>Feedback déspues de cada pregunta</p>
            </TitleGameContainer>
            <GameField label='Aleatorio' />
            <GameField label='Por Categoría' />
            <TitleGameContainer>
                <h1 style={{ fontWeight: '500' }}>MODO MULTIJUGADOR</h1>
                <p>Feedback al finalizar el exámen</p>
                <p>AMISTOSO</p>
            </TitleGameContainer>
            <GameField label='Aleatorio' />
            <GameField label='Por Categoría' onClick={() => setOpen(true)} />
            <GameSettingsModal isOpen={open} />
        </Layout>
    </>
}
