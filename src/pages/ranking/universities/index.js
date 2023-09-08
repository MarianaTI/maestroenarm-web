import RankingCard from "../../../components/RankingCard";
import RankingList from "../../../components/RankingList";
import { db } from "../../../services/firebase/config";
import { RankingContainer } from "../../../styles/Ranking.Style";
import { collection, getDocs, query } from "@firebase/firestore";
import { useEffect, useState } from "react";

export default function Universities() {

    const [filterItems, setFilterItems] = useState([]);

    async function getUserInformation() {
        const snapshot = await getDocs(query(collection(db, 'users')));
        const userInformation = snapshot.docs.map(doc => doc.data());

        const universityScore = [];
        userInformation.forEach(user => {
            if (universityScore[user.university]) {
                universityScore[user.university] += user.totalGameScore;
            } else {
                universityScore[user.university] = user.totalGameScore;
            }
        })

        const sortedUniversityScore = Object.entries(universityScore).map(([university, totalScore]) => ({ university, totalScore })).sort((a, b) => b.totalScore - a.totalScore);
        setFilterItems(sortedUniversityScore);
    }

    useEffect(() => {
        const debouncing = setTimeout(() => { getUserInformation(); }, 500);
        return () => clearTimeout(debouncing);
    }, []);

    const maxScoreUser = filterItems[0];
    const secondMaxScoreUser = filterItems[1];
    const thirdMaxScoreUser = filterItems[2];

    return <RankingContainer>
        <div className="ranking-top-wrapper">
        {secondMaxScoreUser && (
            <RankingCard rankedNumber={2}
                university={secondMaxScoreUser.university}
                score={secondMaxScoreUser.totalScore}
            />
        )}
        {maxScoreUser && (
            <RankingCard rankedNumber={1}
                university={maxScoreUser.university}
                score={maxScoreUser.totalScore}
            />
        )}
        {thirdMaxScoreUser && (
            <RankingCard rankedNumber={3}
                university={thirdMaxScoreUser.university}
                score={thirdMaxScoreUser.totalScore}
            />
        )}
        </div>
        <div className="ranking-wrapper">
        {filterItems.slice(3).map((item, index) => (
            <RankingList 
            key={index}
            ranked_number={index +  4} 
            score={item.totalScore.toString()}
            university={item.university}
            />
            
        ))}
            </div>
    </RankingContainer>
}