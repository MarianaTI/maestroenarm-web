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
    gap: 16px;
    & > h2 {
        margin: auto;
    }
    .academy__content__resources {
        display: grid;
        gap: 16px; 
        place-content: center;
        grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr));
        & > * {
            object-fit: cover;
            padding: 16px;
            background-color: aliceblue;
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