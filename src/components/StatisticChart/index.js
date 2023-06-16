import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import {
  ChartContainer,
  Container,
  CustomLi,
  CustomSpan,
  CustomUl,
  Image,
} from "./index.style";

ChartJS.register(ArcElement, Tooltip);

export const StatisticChart = ({ items }) => {
  const data = {
    datasets: [
      {
        label: "score",
        data: items.map((item) => item.score),
        backgroundColor: ["#6aa6fa", "#024CBB", "#7cbdff"],
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
        {items.map((item) => (
          <CustomLi key={item.label}>
            <Image src={item.imageUrl} alt={item.label} />
            <CustomSpan>{item.label}</CustomSpan>
            <CustomSpan>{item.score}</CustomSpan>
          </CustomLi>
        ))}
      </CustomUl>
    </Container>
  );
};
