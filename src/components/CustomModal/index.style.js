import styled from "@emotion/styled";
import CloseIcon from '@mui/icons-material/Close';

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  transform: translate(-50%, -50%);
  background-color: #f4f4f4;
  box-shadow: 24;
  padding: 2%;
  border-radius: 15px;
  & h1 {
    font-size: 16px;
    color: #000000;
    font-weight: 500;
  }
  & span {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.74);
    font-weight: 500;
    letter-spacing: -0.01em;
    font-feature-settings: "calt" off;
  }
`;


export const ModalHead = styled.div`
  display: flex;
  align-items: center;
`; 

export const ModalCloseIcon = styled(CloseIcon)`
  cursor: pointer;
  margin-left: auto;
  height: 24px;
  width: 24px;
`;
