import styled from "@emotion/styled";

export const VideoContainer = styled.div`
    display: grid;
    place-content: center;
`;

export const VideoCardContainer = styled.div`
    padding: 32px 16px;
    display: grid;
    place-content: center;
    gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 250px), 1fr));
`;

export const AcademyVideoBanner = styled.div`
    display: grid;
    padding: 32px 16px;
    gap: 16px;
    grid-template-columns: 8fr 4fr;
    grid-template-rows: 300px;

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
