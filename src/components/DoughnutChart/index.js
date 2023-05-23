import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    // labels: ['opcion1', 'opcion2', 'opcion3'],
    datasets: [
        {
            label: 'score',
            data: [70, 20, 10],
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


export const DoughnutChart = ({ height = 400, width = 400 }) => <div style={{ height, width}}>
    <Doughnut data={data} />
</div>