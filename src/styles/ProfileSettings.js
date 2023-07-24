import styled from "@emotion/styled";

export const AvatarContainer = styled.div`
    margin-top: 64px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
`;

export const ButtonGroup = styled.div`
    margin: auto;
    padding: 0 16px;
    display: grid;
    max-width: 900px;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    justify-content: center;
    @media screen and (max-width: 576px) {
        grid-template-columns: 1fr;
    }
`;

export const ProfileSettingsContainer = styled.div`
    text-overflow: ellipsis;
    max-width: 900px;
    display: flex;
    margin: auto;
    padding: 24px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px
`;
