import { GameSettingsModal } from "../GameSettingsModal";
import { FieldDecoration, Label, FieldWrapper } from "./index.style";

export const GameField = ({ label }) => {
    return (
        <FieldWrapper>
            <FieldDecoration />
            <Label>{label}</Label>
            <GameSettingsModal/>
        </FieldWrapper>
    );
}