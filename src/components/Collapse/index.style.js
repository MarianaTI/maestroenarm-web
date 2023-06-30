import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 10px;
  overflow: hidden;
  height: auto;

  @media (max-width: 768px) {
    margin-left: 5%;
  }
`;

export const Typography = styled.div`
     font-family: Poppins;
     overflow: auto;
`;

export const ClosedCollapse = styled.div`
  color: #000;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-family: Poppins;
  font-weight: 500;
`;