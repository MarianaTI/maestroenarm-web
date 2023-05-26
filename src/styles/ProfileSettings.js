import { css } from "@emotion/react";
import styled from "@emotion/styled";

// const breakpoints = [576, 768, 992, 1200]
// const mediaQueries = breakpoints.map(breakPoint => `@media (min-width: ${breakPoint}px)`)

export const AvatarContainer = styled.div({
    margin: '24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
});

export const Button = styled.button(
    {
        border: 'none',
        borderRadius: '16px',
        width: 272,
        height: 54,

        ":hover": {
            opacity: '.9'
        }

    },
    props => ({
        backgroundColor: props.bg,
        color: props.color,
    })
);

export const ButtonGroup = styled.div({
    margin: '24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '24px'
});

export const ProfileSettingsContainer = styled.div({
    margin: '24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '24px'
});

export const ProfileField = styled.div`
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    border: 0.5px solid #888;
    border-radius: 10px;
    padding: 24px;
    boxShadow: 2px 3px 2px 2px rgba(0, 0, 0, 0.25);
    ${css`
        @media screen and (min-width: 768px) {
            width: 65%
        },
    `}
`
