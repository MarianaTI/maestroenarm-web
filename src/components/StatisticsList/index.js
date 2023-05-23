import styles from './StatisticsList.module.css'

export const StatisticsList = ({ items }) => {
    return (
        <ul className={styles.ul}>
            {items.map(item => <li key={item.name} className={styles.li}>
                <img className={styles.image} src={item.imageUrl} alt={item.name} />
                <span>{item.name}</span>
                <span className={styles.score}>{item.score}</span>
            </li>)}
        </ul>
    );
}