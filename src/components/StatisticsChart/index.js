import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { ChartContainer, Container, CustomLi, CustomSpan, CustomUl, Image } from "./index.style";

ChartJS.register(ArcElement, Tooltip);

export const StatisticChart = ({ items }) => {
    const data = {
        //labels: ['opcion1', 'opcion2', 'opcion3'],
        datasets: [
            {
                label: 'score',
                data: items.slice(0,2).map(item => item.score),
                backgroundColor: [
                    '#6aa6fa',
                    '#024CBB'
                ],
                borderWidth: 0,
            },
        ],
    };

    return (
        <Container>
            <ChartContainer>
                <Doughnut data={data} />
            </ChartContainer>
            <CustomUl>
                {items.map((item, index) => <CustomLi key={item.label}>
                    <Image src={item.imageUrl} alt={item.label} />
                    <CustomSpan >{item.label}</CustomSpan>
                    <CustomSpan>{index === 2 ? `${item.score}%` : item.score}</CustomSpan>
                </CustomLi>)}
            </CustomUl>
        </Container>
    );
}