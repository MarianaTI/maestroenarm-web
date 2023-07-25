// experimental component name

import { Avatar } from "@mui/material";
import {
  MatchCardContainer,
  ProfileSpecialty,
  ProfileName,
} from "./index.style";

export const MatchCard = ({ name, specialty, imgUrl }) => {
  return (
    <MatchCardContainer>
      <Avatar src={imgUrl} sx={{ width: 182, height: 182 }} />
      <ProfileName>{name}</ProfileName>
      <ProfileSpecialty>{specialty}</ProfileSpecialty>
    </MatchCardContainer>
  );
};
