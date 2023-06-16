import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 24px;
  @media (max-width: 400px) {
    flex-direction: column;
    padding: 16px 0px;
  }
`;

export const CardCategorie = styled.div`
  width: 210px;
  height: 233px;
  border-radius: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & p {
    font-weight: 600;
    font-size: 26px;
    color: rgba(0, 0, 0, 0.77);;
  }
  :hover {
    background: rgba(215, 213, 252, 0.5);
    cursor: pointer;
    scale: 1.1;
  }
  @media (max-width: 400px) {
    padding: 32px 0px;
  }
`;

