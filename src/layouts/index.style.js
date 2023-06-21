import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 1445px;
  margin: auto;
  padding: 0 32px;
  ${(props) => props.hasNavbar && "padding-top:74px;"}
  @media screen and (max-width: 576px) {
    padding: 0 16px;
  }
`;
