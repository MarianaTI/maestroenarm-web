
import styled from "@emotion/styled";


export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & span {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    text-align: center;
    letter-spacing: -0.01em;
    font-feature-settings: 'calt' off;
  }
  & span:nth-of-type(1) {
    color: #000000;
  }
  & span:nth-of-type(2) {
    color: rgba(0, 0, 0, 0.5);
  }
  & span:nth-of-type(3) {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

