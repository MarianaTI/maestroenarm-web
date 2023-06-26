import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 1445px;
  margin: auto;
  ${(props) => props.hasNavbar && "padding-top:72px;"}
`;
