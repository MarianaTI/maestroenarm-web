import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const cardBodyStyle = ({ isResponsive }) => css`
    display: grid;
    row-gap: 8px;
    width: 100%;
    height: 100%;

    .card__video {
        width: 100%;
        height: 100%;
    }

    .card__title {
        font-weight: 700;
    }

    @media screen and (min-width: 465px) {
        grid-template-columns: ${isResponsive && "180px 1fr"};
        column-gap: 16px;
    }
`

export const CardBody = styled.div`
    ${cardBodyStyle}
`

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

const cardBodyStylePlaceholder = ({ isResponsive }) => css`
    display: grid;
    gap: 8px;
    width: 100%;
    height: 100%;

    .card__player__placeholder {
        aspect-ratio: 16/9;
        background: #eee;
    }

    .card__content__placeholder  {
        display: grid;
        gap: 8px
    }

    .card__content__placeholder > * {
        background: #eee;
        height: 20px;
    }

    @media screen and (min-width: 475px) {
        grid-template-columns: ${isResponsive && "180px 1fr"};
        column-gap: 16px;
    }

    animation: ${placeholderFrame} 2s ease-in-out 0s infinite reverse;
`;

export const CardBodyPlaceholder = styled.div`
    ${cardBodyStylePlaceholder}
`;