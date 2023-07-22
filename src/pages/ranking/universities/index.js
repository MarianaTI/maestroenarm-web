import RankingCard from "../../../components/RankingCard";
import RankingList from "../../../components/RankingList";
import { RankingContainer } from "../../../styles/Ranking.Style";

export default function Universities() {
    return <RankingContainer>
        <div className="ranking-top-wrapper">
            <RankingCard rankedNumber="2"
                university="Universidad Tecnológica Metropolitana"
                score="11,000"
            />
            <RankingCard rankedNumber="1"
                university="Universidad Tecnológica Metropolitana"
                score="12,000"
            />
            <RankingCard rankedNumber="3"
                university="Universidad Tecnológica Metropolitana"
                score="10,000"
            />
        </div>
        <div className="ranking-wrapper">
            <RankingList ranked_number={4} score="9,000" university="Universidad Tecnológica Metropolitana" />
            <RankingList ranked_number={5} score="9,000" university="Universidad Tecnológica Metropolitana" />
            <RankingList ranked_number={6} score="9,000" university="Universidad Tecnológica Metropolitana" />
            <RankingList ranked_number={7} score="9,000" university="Universidad Tecnológica Metropolitana" />
        </div>
    </RankingContainer>
}