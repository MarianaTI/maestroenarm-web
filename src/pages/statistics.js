import { DoughnutChart } from "../components/Charts/Doughnut"
import { StatisticsList } from "../components/StatisticsList";
import { StatisticsContainer } from "../styles/statistics";

const items = [
    { name: 'Correctos', imageUrl: 'https://th.bing.com/th/id/OIP.oHwE7W6T_2kEtiaccChqAQHaHa?pid=ImgDet&rs=1', score: 25 },
    { name: 'Incorrectos', imageUrl: 'https://th.bing.com/th/id/OIP.I0NNniKmzK627B-_tBRWSAHaHZ?pid=ImgDet&w=2307&h=2304&rs=1', score: 0 },
    { name: 'Presición', imageUrl: 'https://th.bing.com/th/id/OIP.fbb4EeguJb90nSJIozLqjQHaHa?pid=ImgDet&rs=1', score: 40 }
];

export default function stadistics() {
    return (
        <StatisticsContainer>
            <DoughnutChart></DoughnutChart>
            <StatisticsList items={items}></StatisticsList>
        </StatisticsContainer>
    );
}