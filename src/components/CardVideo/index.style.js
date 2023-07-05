import { css } from "@emotion/react";
import styled from "@emotion/styled";

const cardBodyStyle = ({ isResponsive }) => css`
    display: grid;
    row-gap: 2px;
    width: 100%;
    height: 100%;

    .card__video {
        width: 100%;
        height: 100%;
    }

    .card__title {
        font-weight: 700;
    }

    @media screen and (min-width: 400px) {
        grid-template-columns: ${isResponsive && "180px 1fr"};
        column-gap: 16px;
    }
`

export const CardBody = styled.div`
    ${cardBodyStyle}
`