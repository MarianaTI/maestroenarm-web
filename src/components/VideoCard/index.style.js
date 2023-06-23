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

export const Container = styled.div`
    ${ContainerStyles}
`;