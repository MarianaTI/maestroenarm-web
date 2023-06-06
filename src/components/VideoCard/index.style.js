import styled from "@emotion/styled"

export const Container = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    height: 318px;
    width: 286px;

    & > * {
        margin: 0;
        align-self: flex-start;
    }

    & > :nth-child(2) {
        font-weight: bold;
        font-size: 24px;
    }
`;