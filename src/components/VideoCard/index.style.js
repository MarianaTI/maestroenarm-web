import { css } from "@emotion/react";
import styled from "@emotion/styled"

const ContainerStyles = ({ isVertical }) => css`
    flex-direction: ${isVertical ? 'column' : ''};
    display: flex;
    gap: 16px;
    align-items: center;

    & > div > * {
        width: 245px; 
        margin: 0;
    }

    & > video {
        width: ${isVertical ? '245px' : '168px'};
        height: ${isVertical ? '145px' : '94px'};;
        background: #D9D9D9;
    }

    & > div > :nth-child(1) {
        font-weight: bold;
    }
`

export const Container = styled.div`
    ${ContainerStyles}
    @media screen and (max-width: 1020px) {
        & > div > * {
            width: 100%; 
            margin: 0;
        }
    }
`;