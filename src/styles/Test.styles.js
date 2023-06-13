import styled from "@emotion/styled";

export const Container = styled.div`
    max-width: 1800px;
    margin: auto;
`;

export const TestHeader = styled.div`
    height: 106px;
    background: rgba(216, 216, 241, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 0px 92px;

    & > h1 {
        color: #484A84;
        margin: 0;
        border-bottom: 4px solid #484A84;
    }
    
    @media screen and (max-width: 768px){
        padding: 0 16px;
    }
`;

export const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 32px 92px;

    @media screen and (max-width: 768px){
        padding: 32px 16px;
    }
`;

export const ButtonWrapper = styled.div`
    margin: 0 0 0 auto
`;