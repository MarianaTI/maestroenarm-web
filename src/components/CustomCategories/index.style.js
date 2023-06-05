import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 8px;
`;

export const CardCategorie = styled.div`
  width: 232px;
  height: 253px;
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
  }
`;

