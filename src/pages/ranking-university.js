import Navigation from "../components/Nabvar";
import RankingCard from "../components/RankingCard";
import { rankingUsers } from "../constants";
import { RankingContainer } from "../styles/RankingUser.style";
import Layout from "./layout/index";

const getTopThreeRankingUniversities = () =>
  rankingUsers.sort((a, b) => Number(b.point) - Number(a.point)).slice(0, 3);

const RankingUniversity = () => {
  const [firstPlaceUniversity, secondPlaceUniversity, thirdPlaceUniversity] =
    getTopThreeRankingUniversities();

  return (
    <Layout>
      <RankingContainer>
        <RankingCard
          data={secondPlaceUniversity}
          position={2}
          variant="secondPlaceUniversity"
          universityStyle={{ color: "#000000", fontSize: "20px" }}
          isDisplayFields={["university", "point"]}
        ></RankingCard>
        <RankingCard
          data={firstPlaceUniversity}
          position={1}
          variant="firstPlacUniversity"
          universityStyle={{ color: "#000000", fontSize: "20px" }}
          isDisplayFields={["university", "point"]}
        ></RankingCard>
        <RankingCard
          data={thirdPlaceUniversity}
          position={3}
          variant="thirdPlaceUniversity"
          universityStyle={{ color: "#000000", fontSize: "20px" }}
          isDisplayFields={["university", "point"]}
        ></RankingCard>
      </RankingContainer>
    </Layout>
  );
};
export default RankingUniversity;
