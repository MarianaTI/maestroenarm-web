import { ScoreFieldContainer } from './index.style';

export const ScoreField = ({ label, score }) => {
    return (
        <ScoreFieldContainer>
            <span>{label}:</span>
            <span>{score}</span>
        </ScoreFieldContainer>
    );
};

