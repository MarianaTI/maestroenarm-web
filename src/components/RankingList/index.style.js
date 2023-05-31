import styled from "@emotion/styled";

export const StyledList = styled.ul`
  width: 1163px;
  height: 74px;
  background: #fcfcfc;
  border: 0.5px solid #d5d5d5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  box-sizing: border-box;
`;

export const StyledPosition = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .icon{
    font-size: 33px;
  }

  & span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 33px;
    font-feature-settings: "calt" off;
    line-height: 150%;
    letter-spacing: -0.01em;
    color: #000000;
  }
`;

export const StyledTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 16px;
  & span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-feature-settings: "calt" off;
    line-height: 150%;
    letter-spacing: -0.01em;
    color: #000000;
    flex-basis: 305px;
  }
  & span.name {
    font-size: 20px;
    color: #000000;
  }
  & span.university {
    font-size: ${(props) => props.styledText.fontSize || "16px"};
    color: ${(props) => props.styledText.color || "rgba(0, 0, 0, 0.65)"};
    margin-right: ${(props) => props.styledText.margin || "0px"};
    white-space: nowrap;
  }
  & span.specialty {
    font-size: 16px;
  }
  & span.point {
    font-size: 33px;
    text-align: right;
  }
`;
