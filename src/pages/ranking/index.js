import RankingCard from "../../components/RankingCard";
import RankingList from "../../components/RankingList";
import { RankingContainer } from "../../styles/Ranking.Style";

export default function Ranking() {
    return <RankingContainer>
        <div className="ranking-top-wrapper">
            <RankingCard rankedNumber="2"
                avatar
                name="Eduardo Moreno"
                university="Universidad Tecnológica Metropolitana"
                specialty="Pediatra" score="11,000"
            />
            <RankingCard rankedNumber="1"
                avatar
                name="Angel Ricardez"
                university="Universidad Tecnológica Metropolitana"
                specialty="Psicólogo" score="12,000"
            />
            <RankingCard rankedNumber="3"
                avatar
                name="Alberto Canto"
                university="Universidad Tecnológica Metropolitana"
                specialty="Odontología" score="10,000"
            />
        </div>
        <div className="ranking-wrapper">
            <RankingList ranked_number={4} avatar="none" name="Adrian Mis" score="9,000" specialty="neurología" university="Universidad Tecnológica Metropolitana" />
            <RankingList ranked_number={5} avatar="none" name="Adrian Mis" score="9,000" specialty="neurología" university="Universidad Tecnológica Metropolitana" />
            <RankingList ranked_number={6} avatar="none" name="Adrian Mis" score="9,000" specialty="neurología" university="Universidad Tecnológica Metropolitana" />
            <RankingList ranked_number={7} avatar="none" name="Adrian Mis" score="9,000" specialty="neurología" university="Universidad Tecnológica Metropolitana" />
        </div>
    </RankingContainer>
}