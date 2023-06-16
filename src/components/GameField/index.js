import { FieldDecoration, Label, FieldWrapper } from "./index.style";

export const GameField = ({ label, onClick, disabled }) => {
  return (
    <FieldWrapper onClick={onClick} disabled={disabled}>
      <FieldDecoration />
      <Label>{label}</Label>
    </FieldWrapper>
  );
};
