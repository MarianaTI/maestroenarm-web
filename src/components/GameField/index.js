import { FieldDecoration, Label, FieldWrapper } from "./index.style";

export const GameField = ({ label, onClick }) => {
    return (
        <FieldWrapper onClick={onClick} >
            <FieldDecoration />
            <Label>{label}</Label>
        </FieldWrapper>
    );
}