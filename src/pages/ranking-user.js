import { Typography } from "@mui/material";
import {
  AvatarWrapper,
  FirstPlaceCard,
  RankingContainer,
  SecondPlaceCard,
  StyledAvatar,
  StyledCard,
  SubtitleText,
  TextContainer,
  ThirdPlaceCard,
  TitleText,
} from "../styles/ranking-user.style";
import { rankingUsers } from "../constants";
import RankingCard from "../components/RankingCard";

const getTopThreeRankingUsers = () =>
  rankingUsers.sort((a, b) => a.point - b.point).slice(0, 3);

const RankingUser = () => {
  const [firstPlaceUser, secondPlaceUser, thirdPlaceUser] =
    getTopThreeRankingUsers();

  return (
    <RankingContainer>
      <RankingCard user={firstPlaceUser} variant="secondPlace" />
      <RankingCard user={secondPlaceUser} variant="firstPlace" />
      <RankingCard user={thirdPlaceUser} variant="thirdPlace" />
    </RankingContainer>
  );
};

export default RankingUser;
