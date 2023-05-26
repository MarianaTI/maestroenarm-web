import { Avatar } from "@mui/material";
import styled from "@emotion/styled";

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.size || "120px"};
`;

export const StyledAvatar = styled(Avatar)`
  width: ${(props) => props.size || "88px"};
  height: ${(props) => props.size || "88px"};
`;
