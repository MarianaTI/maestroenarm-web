import { css } from "@emotion/react";
import styled from "@emotion/styled"

const ContainerStyles = ({ isVertical }) => css`
    flex-direction: ${isVertical ? 'column' : ''};
    display: flex;
    gap: 16px;

    & > div > * {
        width: 245px; 
        margin: 0;
    }

    & > video {
        width: ${isVertical ? '256px' : '168px'};
        height: ${isVertical ? '144px' : '94.5px'};
        background: #D9D9D9;
    }

    & > div > :nth-child(1) {
        font-weight: bold;
    }

    @media screen and (max-width: 1280px) {
        & > div > * {
            width: ${isVertical ? '' : '100%'};
            margin: 0;
        }
    }

    @media screen and (max-width: 575px) {
        flex-direction: column;
        margin: auto;
        width: 320px;
        & > video {
            margin: auto;
            width: 320px;
            height: 180px
        }
    }

`;

export const Container = styled.div`
    ${ContainerStyles}
`;