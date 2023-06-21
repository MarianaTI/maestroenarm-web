import styled from "@emotion/styled";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 16px;
  @media (max-width: 400px) {
    flex-direction: column;
    padding: 8px 0px;
  }
`;

export const CardCategorie = styled.button`
  width: 210px;
  height: 233px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  background: none;
  border: none;
  cursor: pointer;
  & p {
    font-weight: 600;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.77);
  }
  @media (max-width: 400px) {
    padding: 32px 0px;
  }
`;

export const ImageStyled = styled(Image)`
  :hover{
    scale: 1.1;
  }
`;
