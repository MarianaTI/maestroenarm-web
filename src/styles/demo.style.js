import styled from "@emotion/styled";
import NextImage from "next/image";

export const LandingContainer = styled.div`
    display: grid;
    height: 100vh;
    padding: 16px;
    place-content: center;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
    .content {
        display: grid;
        place-content: center;
        gap: 16px;
    }

    .content h1 {
        font-size: 48px;
    }

    .content p {
        font-size: 24px;
    }

    .button__container {
        display: flex;
        gap: 8px
    }

    @media screen and (max-width: 576px) {
        .content {
            text-align: center;
        }

        .button__container {
            justify-content: center;
        }
    }

    @media screen and (max-width: 1080px) {
        display: inline;
        .content {
            text-align: center;
        }

        .button__container {
            justify-content: center;
        }
    }

    & img {
        width: 100%;
        height: 100%;
        object-fit: scale-down;
    }
`

export const ReturnButtonContainer = styled.div`
   display: flex;
   justify-content: center;
   padding: 10px;
`;
