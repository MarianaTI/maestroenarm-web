import styled from "@emotion/styled";

export const Container = styled.div`
    margin-top: 32px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const ChartContainer = styled.div`
    position: relative;
    width: 300px;
    height: 300px;
    @media screen and (max-width: 300px) {
        width: 200px;
        height: 200px;
    }
`;

export const CustomUl = styled.ul`
    gap: 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 0;
`;

export const CustomLi = styled.li`
    list-style-type: none;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const Image = styled.img`
    margin: auto;
    max-width: 32px;
    max-height: 32px;
    object-fit: cover;
`;

export const CustomSpan = styled.span`
    margin: auto
`;