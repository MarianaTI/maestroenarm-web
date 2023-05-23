import styles from './StatisticsList.module.css'

export const StatisticsList = ({ items }) => {
    return (
        <ul className={styles.ul}>
            {items.map(item => <li key={item.label} className={styles.li}>
                <img className={styles.image} src={item.imageUrl} alt={item.label} />
                <span>{item.name}</span>
                <span className={styles.score}>{item.score}</span>
            </li>)}
        </ul>
    );
};