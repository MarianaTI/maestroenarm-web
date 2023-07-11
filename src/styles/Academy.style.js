import styled from "@emotion/styled";

export const AcademyBanner = styled.div`
    display: grid;
    padding: 32px 16px;
    gap: 16px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 400px;

    & > * {
        width: 100%;
        height: 100%;
    }

    .academy__title {
        font-size: 2.2rem;
    }

    .academy__info {
        font-size: 1.2rem;
    }

    .academy__info__group {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 16px
    }

    .academy__main__image {
        animation: float 3s backwards infinite;
        @keyframes float {
            0%,
            100% {
                transform: translateY(.4rem);
            }
            50% {
                transform: translateY(-.4rem);
            }
        }
    }

    @media screen and (max-width: 1019px) {
        & > img {
            display: none;
        }

        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
    }
`;

export const ContentContainer = styled.div`
    display: grid;
    padding: 16px;
    gap: 32px;
    & > h2 {
        margin: auto;
    }
    .academy__content__resources {
        display: grid;
        gap: 16px; 
        place-content: center;
        grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr));
        & > * {
            :hover { border-color: rgb(72, 74, 132) }
            object-fit: cover;
            padding: 16px;
            border: 2px solid #ccc;
            box-shadow: 4px 8px 6px 3px rgba(0,0,0,0.08);
            -webkit-box-shadow: 4px 8px 6px 3px rgba(0,0,0,0.08);
            -moz-box-shadow: 4px 8px 6px 3px rgba(0,0,0,0.08);
        }
    }

    .academy__content__resources > * {
        display: grid;
        gap: 16px; 
        border-radius: 16px;
        align-items: center;
        grid-template-columns: 1fr 1fr;
    }
`