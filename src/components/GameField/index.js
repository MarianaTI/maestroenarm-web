import { FieldDecoration, Label, FieldWrapper } from "./index.style";

export const GameField = ({ label, isSelected }) => {
    return (
        <FieldWrapper isSelected={isSelected}>
            <FieldDecoration/>
            <Label>{label}</Label>
        </FieldWrapper>
    );
}