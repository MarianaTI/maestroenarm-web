import { useEffect, useState } from "react";
import RankingCard from "../../components/RankingCard";
import RankingList from "../../components/RankingList";
import { RankingContainer } from "../../styles/Ranking.Style";
import { db } from "../../services/firebase/config";
import { collection, getDocs, query } from "@firebase/firestore";

export default function Ranking() {

  const [filterItems, setFilterItems] = useState([]);

  async function getUserInformation() {
    const snapshot = await getDocs(query(collection(db, 'users')));
    const userInformation = snapshot.docs.map(doc => doc.data());
    userInformation.sort((a, b) => b.totalGameScore - a.totalGameScore);
    setFilterItems(userInformation)
  }

  useEffect(() => {
    const debouncing = setTimeout(() => { getUserInformation() }, 500)
    return () => clearTimeout(debouncing)
  }, []);

  const maxScoreUser = filterItems[0];
  const secondMaxScoreUser = filterItems[1];
  const thirdMaxScoreUser = filterItems[2];

  return <RankingContainer>
    <div className="ranking-top-wrapper">
      {secondMaxScoreUser && (
        <RankingCard
          rankedNumber={2}
          avatar
          name={secondMaxScoreUser.name}
          university={secondMaxScoreUser.university}
          specialty={secondMaxScoreUser.specialty}
          score={secondMaxScoreUser.totalGameScore.toString()}
        />
      )}
      {maxScoreUser && (
        <RankingCard
          rankedNumber={1}
          avatar
          name={maxScoreUser.name}
          university={maxScoreUser.university}
          specialty={maxScoreUser.specialty}
          score={maxScoreUser.totalGameScore.toString()}
        />
      )}

      {thirdMaxScoreUser && (
        <RankingCard
          rankedNumber={3}
          avatar
          name={thirdMaxScoreUser.name}
          university={thirdMaxScoreUser.university}
          specialty={thirdMaxScoreUser.specialty}
          score={thirdMaxScoreUser.totalGameScore.toString()}
        />
      )}
    </div>
    <div className="ranking-wrapper">
      {filterItems.slice(3).map((item, index) => (
        
          <RankingList
            key={index}
            ranked_number={index + 4}
            avatar="none"
            name={item.name}
            score={item.totalGameScore.toString()}
            specialty={item.specialty}
            university={item.university}
          />
        
      ))}
    </div>
  </RankingContainer>
}