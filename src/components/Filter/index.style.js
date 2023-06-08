import styled from "@emotion/styled";

export const SearchInput = styled.input`
    ${props => {
        if (props.type === "search") return {
            width: "100%",
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
`;

export const FilterContainer = styled.div`  
    position: relative;
    display: flex;
    align-items: center;
    gap: 16px;
    width: 800px;

    & > svg {
        position: absolute;
        left: 28px;
    }

    @media screen and (max-width: 1020px) {
        width: 80%;
    }   
`;

export const ButtonContent = styled.div`
    font-size: 16px;
    display: flex;
    gap: 14px;
    padding: 24px;
    @media screen and (max-width: 640px) {
        padding: 0px;
        & > span {
            display: none;
        }
    }
`;