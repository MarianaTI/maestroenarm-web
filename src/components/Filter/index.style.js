import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const SearchInput = styled.input`
    ${props => {
        if (props.type === "search") return {
            position: "relative",
            width: 800,
            height: 54,
            borderRadius: 12,
            border: "none",
            background: "rgba(215, 213, 252, 0.3)",
            boxShadow: "0px 4px 4px rgba(72, 74, 132, 0.2)",
            outline: "none",
            padding: "0 36px",
            fontSize: 16,
            fontFamily: 'Poppins',
        }
    }} 

    ${css`
        @media screen {

        }
    `}
`;

export const FilterContainer = styled.div`
    margin: 10px 100px;
    display: flex;
    align-items: center;
    gap: 48px;

    & > svg {
        position: absolute;
        left: 130px;
    }
`;

export const ButtonContent = styled.div`
    display: flex;
    gap: 14px;
    padding: 0 6px;
    & > span {
        font-size: 16px;
    }
`;