import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const SearchInput = styled.input`
    &::placeholder {
        color: rgba(72, 74, 132, .7);
    }
    ${props => {
        if (props.type === "search") return {
            width: "100%",
            height: 54,
            border: ".5px solid rgba(72, 74, 132, .5)",
            background: "rgba(215, 213, 252, 0.3)",
            outline: "none",
            padding: "0 36px",
            fontSize: 16,
            fontFamily: 'Poppins',
            color: "rgba(72, 74, 132, .9)"
        }
    }}
`;

export const FilterContainer = styled.div`  
    display: flex;
    align-items: center;
    width: 800px;
    @media screen and (max-width: 1020px) {
        width: 80%;
    }   
`;

export const FilterButton = styled(Button)`
    text-transform: none;
    border-radius: 4px 0 0 4px;
    background: rgba(72, 74, 132, 1);
    &:hover {
        background: rgba(72, 74, 132, .9);
    } 
    height: 54px;
    color: #ffffff;
`;

export const SearchButton = styled(Button)`
    text-transform: none;
    height: 54px;
    border-radius: 0 4px 4px 0;
    background: rgba(72, 74, 132, 1);
    &:hover {
        background: rgba(72, 74, 132, .9);
    }
    color: #ffffff;
`;