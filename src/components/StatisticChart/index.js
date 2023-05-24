import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styles from './StatisticsList.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

export const StatisticChart = ({ height = 400, width = 400, items }) => {

    const data = {
        // labels: ['opcion1', 'opcion2', 'opcion3'],
        datasets: [
            {
                label: 'score',
                data: items.map(item => item.score),
                backgroundColor: [
                    '#5f9ffa',
                    '#024CA1',
                    '#88b7f8'
                ],
                borderColor: [
                    '#5f9ffa',
                    '#024CA1',
                    '#88b7f8'
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <div style={{ height, width, margin: 'auto' }}>
                <Doughnut data={data} />
            </div>
            <ul className={styles.ul}>
                {items.map(item => <li key={item.label} className={styles.li}>
                    <img className={styles.image} src={item.imageUrl} alt={item.label} />
                    <span className={styles.label}>{item.label}</span>
                    <span className={styles.score}>{item.score}</span>
                </li>)}
            </ul>
        </div>
    );
}

