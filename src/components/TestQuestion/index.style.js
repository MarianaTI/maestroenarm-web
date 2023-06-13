import styled from "@emotion/styled";

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