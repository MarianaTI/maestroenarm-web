import RankingCard from "../components/RankingCard";
import RankingList from "../components/RankingList";
import { rankingUsers } from "../constants";
import {
  RankingContainer,
  RankingListContainer,
} from "../styles/Ranking-user.style";
import Layout from "../layouts/index";

const getAllRankingUniversities = () => {
  const universityScores = {};

  rankingUsers.forEach((data) => {
    if (
      !universityScores[data.university] ||
      data.point > universityScores[data.university].point
    ) {
      universityScores[data.university] = data;
    }
  });
  const universityScoreArray = Object.values(universityScores);

  const sortedUniversities = universityScoreArray.sort(
    (a, b) => Number(b.point) - Number(a.point)
  );

  const topThreeUniversities = sortedUniversities.slice(0, 3);
  const remainingUniversities = sortedUniversities.slice(3);

  return { topThreeUniversities, remainingUniversities };
};

const RankingUniversity = () => {
  const { topThreeUniversities, remainingUniversities } =
    getAllRankingUniversities();

  const [firstPlaceUniversity, secondPlaceUniversity, thirdPlaceUniversity] =
    topThreeUniversities;
  return (
    <Layout>
      <RankingContainer>
        {secondPlaceUniversity && (
          <RankingCard
            data={secondPlaceUniversity}
            position={2}
            variant="secondPlaceUniversity"
            universityStyle={{ color: "#000000", fontSize: "20px"}}
            isDisplayFields={["university", "point"]}
          ></RankingCard>
        )}
        {firstPlaceUniversity && (
          <RankingCard
            data={firstPlaceUniversity}
            position={1}
            variant="firstPlacUniversity"
            universityStyle={{ color: "#000000", fontSize: "20px" }}
            isDisplayFields={["university", "point"]}
          ></RankingCard>
        )}
        {thirdPlaceUniversity && (
          <RankingCard
            data={thirdPlaceUniversity}
            position={3}
            variant="thirdPlaceUniversity"
            universityStyle={{ color: "#000000", fontSize: "18px" }}
            isDisplayFields={["university", "point"]}
          ></RankingCard>
        )}
      </RankingContainer>

      <RankingListContainer>
        <RankingList
          data={remainingUniversities}
          isDisplayFields={["university", "point"]}
          styledText={{ color: "#000000;", fontSize: "20px", margin: "500px"}}
        />
      </RankingListContainer>
    </Layout>
  );
};
export default RankingUniversity;
