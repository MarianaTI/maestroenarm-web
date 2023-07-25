import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const SearchInput = styled.input`
    &::placeholder { color: rgba(72, 74, 132, .7)}
    ${props => {
        if (props.type === "search") return {
            borderRadius: '4px 0 0 4px',
            width: "100%",
            height: 54,
            border: ".5px solid rgba(72, 74, 132, .5)",
            background: "rgba(215, 213, 252, 0.3)",
            outline: "none",
            padding: "0 20px",
            fontSize: 16,
            fontFamily: 'Poppins',
            color: "rgba(72, 74, 132, .9)"
        }
    }}
`;

export const FilterContainer = styled.div`  
    margin: auto;
    display: flex;
    width: 800px;
    padding: 0 16px;
    @media screen and (max-width: 1020px) {
        width: 100%;
    }   
`;

export const FilterButton = styled(Button)`
    text-transform: none;
    border-radius: 0 4px 4px 0;
    background: rgba(72, 74, 132, 1);
    &:hover {
        background: rgba(72, 74, 132, .9);
    } 
    height: 54px;
    color: #ffffff;
`;
