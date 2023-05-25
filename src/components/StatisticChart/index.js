import { Chart as ChartJS, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styles from './StatisticsList.module.css';

ChartJS.register(ArcElement);

export const StatisticChart = ({ items }) => {

    const data = {
        //labels: ['opcion1', 'opcion2', 'opcion3'],
        datasets: [
            {
                label: 'score',
                data: items.map(item => item.score),
                backgroundColor: [
                    '#6aa6fa',
                    '#024CBB',
                    '#7cbdff'
                ],
                borderWidth: 0,
            },
        ],
    };

    return (
        <div>
            <div className={styles.statisticChartContainer}>
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