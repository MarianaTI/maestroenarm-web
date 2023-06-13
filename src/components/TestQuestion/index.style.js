import styled from "@emotion/styled";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

export const FieldWrapper = styled.div`
    width: 100%;
    border: 2px solid rgba(72, 74, 132, 1);
    border-radius: 16px;
    min-height: 64px;
    display: flex;
    align-items: center;
    gap: 16px;
    padding-left: 10px;
    font-family: 'Poppins';
    font-weight: bold;
    ${props => ({
        background: props.isSelected ? "rgba(149, 150, 185, 0.25)" : "",
        "& > span": {
            color: props.isSelected ? "#fff" : "",
            width: 42,
            height: 42,
            textAlign: "center",
            border: "2px solid rgba(72, 74, 132, 1)",
            background: props.isSelected ? "rgba(149, 150, 185, 1)" : "",
            borderRadius: 12,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }
    })}
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const CorrectIcon = styled(CheckIcon)`
    margin: 0 24px 0 auto; 
    background: #EBFFF1;
    border-radius: 100px;
    padding: 2px;
    color: #95BDA0
`;

export const IncorrectIcon = styled(ClearIcon)`
    margin: 0 24px 0 auto; 
    background: #FFE3E3;
    border-radius: 100px;
    padding: 2px;
    color: #FA9E9E
`;