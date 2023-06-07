// experimental component name

import { Avatar } from "@mui/material";
import { MatchCardContainer, ProfileSpecialty, ProfileName } from "./index.style";

export const MatchCard = ({ profile }) => {
    return (
        <MatchCardContainer>
            <Avatar src={profile.imgUrl} sx={{ width: 182, height: 182 }} />
            <ProfileName>{profile.name}</ProfileName>
            <ProfileSpecialty>{profile.specialty}</ProfileSpecialty>
        </MatchCardContainer>
    );
}