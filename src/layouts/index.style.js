import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 0 32px;

  /* ${(props) => props.hasNavbar && "padding-top:100px;"} */

  @media screen and (max-width: 576px) {
    padding: 0 16px;
  }
`;

