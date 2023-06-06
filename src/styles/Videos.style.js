import styled from "@emotion/styled";
import { mediaQueries } from "../mediaQueries";


export const VideoContainer = styled.div`
    display: flex; 
    align-items: center; 
    flex-direction: column;
    flex-wrap: wrap;
    gap: 32px;
`;

export const SectionStyled = styled.div`

    display: flex;

    @media (min-width: ${mediaQueries.md}) {
        width: 500px
    }

    @media (min-width: ${mediaQueries.lg}) {
        width: 1100px
    }

    @media (min-width: ${mediaQueries.xl}) {
        width: 900px
    }

    @media (min-width: ${mediaQueries.xxl}) {
        width: 500px
    }
`;

export const VideoCardContainer = styled.div`
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    display: flex; 
    gap: 32px
`;
