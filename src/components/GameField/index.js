import { FielDecoration, Label, WrapperField } from "./index.style";

export const GameField = ({ label, isSelected }) => {
    return (
        <WrapperField isSelected={isSelected}>
            <FielDecoration></FielDecoration>
            <Label>{label}</Label>
        </WrapperField>
    );
}