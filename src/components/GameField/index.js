import { FieldDecoration, Label, WrapperField } from "./index.style";

export const GameField = ({ label, isSelected }) => {
    return (
        <WrapperField isSelected={isSelected}>
            <FieldDecoration/>
            <Label>{label}</Label>
        </WrapperField>
    );
}