import styled from "@emotion/styled";

export const StyledPosition = styled.div`
  display: flex;
  align-items: center;
  .icon{
    font-size: 24px;
  }

  & span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    font-feature-settings: "calt" off;
    line-height: 150%;
    letter-spacing: -0.01em;
    color: #000000;
  }

`;

export const StyledTextContainer = styled.div`
  border: 0.5px solid #d5d5d5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px;
  display: flex;
  overflow-x: auto;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  justify-content: space-between;
  text-align: center;
  .profile-container {
    display: flex;
    gap: 8px;
    align-items: center;
  }
`;
