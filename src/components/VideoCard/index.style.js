import styled from "@emotion/styled"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    height: 318px;

    & > div {
        height: 139px;
        width: 245px; 
        background: #D9D9D9;
    }

    & > * {
        width: 245px; 
        margin: 0;
    }

    & > :nth-child(2) {
        font-weight: bold;
        font-size: 24px;
    }

    @media screen and (max-width: 640px) {
        height: 360px;
        width: 360px;
        margin-bottom: 0;
        flex-direction: column;
        align-items: start;

        & > div {
            height: 200px;
            width: 100%; 
            background: #D9D9D9
        }
    } 
`;