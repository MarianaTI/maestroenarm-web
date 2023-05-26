import styled from "@emotion/styled";

// const breakpoints = [576, 768, 992, 1200]
// const mediaQueries = breakpoints.map(breakPoint => `@media (min-width: ${breakPoint}px)`)

export const AvatarContainer = styled.div`
    margin-top: 64px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
`;

export const Button = styled.button`
    border: none;
    border-radius: 16px;
    width: 272px;
    height: 54px;   

    &:hover {
        opacity: .9
    };
    
    ${props => ({
        backgroundColor: props.bg,
        color: props.color,
    })}
`;

export const ButtonGroup = styled.div`
    margin: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px
`;

export const ProfileSettingsContainer = styled.div`
    margin: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px
`;
