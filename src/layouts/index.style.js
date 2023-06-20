import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 1440px;
<<<<<<< HEAD
=======
  margin: auto;
>>>>>>> deaaa994604f6090f2972ca25116e340926f4912
  padding: 0 32px;

  ${(props) => props.hasNavbar && "padding-top:74px;"}

  @media screen and (max-width: 576px) {
    padding: 0 16px;
  }
`;
