import { Button } from "@mui/material";
import { GameField } from "../../components/GameField";
import { GameSettingsModal } from "../../components/GameSettingsModal";
import { openModal } from "../../store/slices/gameModalSlice";
import { TitleGameContainer } from "../../styles/Game";
import { useDispatch } from "react-redux";
import { GameLinkSharingModal } from "../../components/GameLinkSharingModal";

export default function Game() {
    const dispatch = useDispatch();
    return <>
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
        <GameField onClick={() => dispatch(openModal())} label='Por Categoría' />
        <GameSettingsModal />
        <GameLinkSharingModal />
    </>
}
