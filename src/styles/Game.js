

import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const TitleGameContainer = styled.div`
    margin: 48px 100px 0px 124px;
    ${css`
        @media screen and (max-width: 1080px) {
            width: 90%;
            margin: 48px auto 0px;
        }
    `} 
`;

export const MatchCardContainer = styled.div`
    display: flex;
    justify-content: space-around;
    ${css`
        @media screen and (max-width: 920px) {
            flex-direction: column;
            gap: 12px;
        }
    `} 
`;

export const FlexLeftWrapper = styled.div`
    ${css`
        @media screen and (max-width: 920px) {
            margin: 0px 32px 0px auto
        }
    `} 
`;

export const FlexRightWrapper = styled.div`
    ${css`
        @media screen and (max-width: 920px) {
            margin: 0px 0px auto 32px
        }
    `} 
`;
