import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled"

const ContainerStyles = ({ isVertical }) => css`
    flex-direction: ${isVertical ? 'column' : ''};
    display: flex;
    gap: 16px;

    & > div > * {
        width: 245px; 
        margin: 0;
    }

    & > :first-child {
        width: ${isVertical ? '256px' : '168px'};
        height: ${isVertical ? '144px' : '94.5px'};
        background: #D9D9D9;
    }

    & > div > h4 {
        font-weight: bold;
    }

    @media screen and (max-width: 1280px) {
        & > div > * {
            width: ${isVertical ? '' : '100%'};
            margin: 0;
        }
    }
    
`;

const placeholderFrame = keyframes`
    0% {
        opacity: 0.5;
    }
    50%  {
        opacity: 1;
    }
    100% {
        opacity: 0.5;
    }
`

const PlaceholderContainerStyles = ({ isVertical }) => css`
    flex-direction: ${isVertical ? 'column' : ''};
    display: flex;
    gap: 16px;

    animation: ${placeholderFrame} 2s ease-in-out 0s infinite reverse;

    & > :first-child {
        width: ${isVertical ? '256px' : '168px'};
        height: ${isVertical ? '144px' : '94.5px'};
        background-color: #babbbc;
    }

    & :nth-child(2) {
        display: flex;
        flex-direction: column;
        gap: 12px
    }

    & > div > * {
        background-color: #babbbc;
        width: 100%;
        height: 16px
    }

    @media screen and (max-width: 1280px) {
        & > div > * {
            width: ${isVertical ? '' : '100%'};
            margin: 0;
        }
    }
    
`;

export const Container = styled.div`
    ${ContainerStyles}
`;

export const PlaceholderContainer = styled.div`
    ${PlaceholderContainerStyles}
`;

