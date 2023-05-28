import { useState } from "react";
import { GameField } from "../../components/GameField";
import { GameSettingsModal } from "../../components/GameSettingsModal";
import MainLayout from "../../layouts/MainLayout";

export default function Game() {
    const [open, setOpen] = useState(false);
    return <>
        <MainLayout>
            <div style={{ margin: '48px 100px 0px 124px' }}>
                <h1 style={{ fontWeight: '500' }}>MODO PRÁCTICA</h1>
                <p>Feedback déspues de cada pregunta</p>
            </div>
            <GameField label='Aleatorio' />
            <GameField label='Por Categoría' />
            <div style={{ margin: '48px 100px 0px 124px' }}>
                <h1 style={{ fontWeight: '500' }}>MODO MULTIJUGADOR</h1>
                <p>Feedback al finalizar el exámen</p>
                <p>AMISTOSO</p>
            </div>
            <GameField label='Aleatorio' />
            <GameField label='Por Categoría' onClick={() => setOpen(true)} />
            <GameSettingsModal isOpen={open} />
        </MainLayout>
    </>
}
