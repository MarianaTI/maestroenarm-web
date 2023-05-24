import {
  RankingContainer,
  RankingListContainer,
} from "../styles/ranking-user.style";
import { rankingUsers } from "../constants";
import RankingCard from "../components/RankingCard";
import RankingList from "../components/RankingList";

const getTopThreeRankingUsers = () =>
  rankingUsers.sort((a, b) => Number(b.point) - Number(a.point)).slice(0, 3);

const RankingUser = () => {
  const [firstPlaceUser, secondPlaceUser, thirdPlaceUser] =
    getTopThreeRankingUsers();

  const remainingUsers = rankingUsers.slice(3);

  return (
    <>
      <RankingContainer>
        <RankingCard user={secondPlaceUser} variant="SecondPlace" />
        <RankingCard user={firstPlaceUser} variant="firstPlace" />
        <RankingCard user={thirdPlaceUser} variant="thirdPlace" />
      </RankingContainer>
      <RankingListContainer>
        <RankingList users={remainingUsers} />
      </RankingListContainer>
    </>
  );
};

export default RankingUser;
