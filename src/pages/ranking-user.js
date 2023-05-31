import {
  RankingContainer,
  RankingListContainer,
} from "../styles/Ranking-user.style";
import { rankingUsers } from "../constants";
import RankingCard from "../components/RankingCard";
import RankingList from "../components/RankingList";
import Avatar from "../components/Avatar";
import Layout from "./layout";

const getTopThreeRankingUsers = () =>
  rankingUsers.sort((a, b) => Number(b.point) - Number(a.point)).slice(0, 3);

const RankingUser = () => {
  const [firstPlaceUser, secondPlaceUser, thirdPlaceUser] =
    getTopThreeRankingUsers();

  const remainingUsers = rankingUsers.slice(3);

  return (
    <Layout>
      <RankingContainer>
        <RankingCard
          data={secondPlaceUser}
          position={2}
          variant="SecondPlace"
          avatar={<Avatar />}
        ></RankingCard>
        <RankingCard
          data={firstPlaceUser}
          position={1}
          variant="firstPlace"
          textStyle={{ color: "#000000", fontSize: "20px" }}
          avatar={<Avatar />}
        ></RankingCard>
        <RankingCard
          data={thirdPlaceUser}
          position={3}
          variant="thirdPlace"
          avatar={<Avatar />}
        ></RankingCard>
      </RankingContainer>

      <RankingListContainer>
        <RankingList
          data={remainingUsers}
          isDisplayFields={["name", "specialty", "point"]}
          avatar={<Avatar />}
        />
      </RankingListContainer>
    </Layout>
  );
};

export default RankingUser;
