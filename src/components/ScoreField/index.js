import styles from './ScoreField.module.css';

export const ScoreField = ({ label, score }) => {
    return (
        <div className={styles.scoreContainer}>
            <span>{label}</span>
            <span className={styles.score}>{score}</span>
        </div>
    );
};

