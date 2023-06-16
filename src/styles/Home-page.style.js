import styled from "@emotion/styled";

export const MenuContainer = styled.div`
  height: 100vh;
  width: ${(props) => (props.fullwidth ? "100%" : "auto")};
  padding: 24px;
`;

export const StyledContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  padding: 24px;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  & span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.01em;
    font-feature-settings: "calt" off;
    color: #000000;
  }
  & span:nth-of-type(1) {
    font-size: 24px;
  }
  & span:nth-of-type(2) {
    font-size: 18px;
    color: rgba(0, 0, 0, 0.5);
  }
`;
