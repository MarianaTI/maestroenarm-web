import {
  RankingContainer,
  RankingListContainer,
} from "../styles/Ranking-user.style";
import { rankingUsers } from "../constants";
import RankingCard from "../components/RankingCard";
import RankingList from "../components/RankingList";
import Navigation from "../components/Nabvar";

const getTopThreeRankingUsers = () =>
  rankingUsers.sort((a, b) => Number(b.point) - Number(a.point))
  .slice(0, 3);

const RankingUser = () => {
  const [firstPlaceUser, secondPlaceUser, thirdPlaceUser] =
    getTopThreeRankingUsers();

  const remainingUsers = rankingUsers.slice(3);

  return (
    <>
    <Navigation/>
      <RankingContainer>
        <RankingCard user={secondPlaceUser} position={2} variant="SecondPlace" />
        <RankingCard user={firstPlaceUser} position={1} variant="firstPlace" />
        <RankingCard user={thirdPlaceUser} position={3} variant="thirdPlace" />
      </RankingContainer>
      <RankingListContainer>
        <RankingList users={remainingUsers} />
      </RankingListContainer>
    </>
  );
};

export default RankingUser;
