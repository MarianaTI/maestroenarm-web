import { FieldDecoration, Label, FieldWrapper } from "./index.style";

export const GameField = ({ label, onClick, disabled }) => {
    return (
        <FieldWrapper onClick={onClick}>
            <FieldDecoration disabled={!!disabled}/>
            <Label>{label}</Label>
        </FieldWrapper>
    );
}