import styled from "@emotion/styled"

export const RankingContainer = styled.div`
    padding-top: 16px;
    .ranking-top-wrapper {
        padding: 16px;
        display: flex;
        justify-content: center;
        gap: 16px;
        @media screen and (max-width: 746px) {
            flex-direction: column;
        }
        & > :nth-of-type(2) {
            @media screen and (max-width: 746px) {
                order: -1
            }
            background-color: rgb(255, 217, 156);
        }

        & > :nth-of-type(1) {
            background-color: rgb(241, 242, 243);
        }

        & > :nth-of-type(3) {
            background-color: rgb(225, 208, 194);
        }
    }

    .ranking-wrapper {
        display: grid;
        padding: 0 16px;
        gap: 16px;
    }
`