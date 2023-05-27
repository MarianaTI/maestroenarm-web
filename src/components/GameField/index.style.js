import styled from "@emotion/styled";

export const WrapperField = styled.div`
    margin: 24px 124px;
    border: 2px solid #b9b9b9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 92px;
    display: flex;
    align-items: center;

    ${props => ({
        background: props.isSelected ? 'rgba(5, 41, 112, 0.2)' : '#fcfcfc'
    })}
`;

export const Label = styled.span`
    margin-left: 56px;
    font-size: 24px;
    font-weight: 500;
`;

export const FieldDecoration = styled.div`
    position: absolute;
    width: 26px;
    height: 92px;
    background: #052970;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`;
