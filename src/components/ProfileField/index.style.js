import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const CustomProfileField = styled.div`
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    border: 0.5px solid #888;
    border-radius: 10px;
    padding: 24px;
    box-shadow: 2px 3px 2px 2px rgba(0, 0, 0, 0.25);
    ${css`
        @media screen and (min-width: 768px) {
            width: 65%
        },
    `}
`
