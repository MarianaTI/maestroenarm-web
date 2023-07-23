import { ScoreField } from "../components/ScoreField";
import { StatisticChart } from "../components/StatisticsChart";
import { StatisticsContainer } from "../styles/Result.style";

const items = [
  {
    label: "Correctos",
    imageUrl:
      "https://th.bing.com/th/id/OIP.oHwE7W6T_2kEtiaccChqAQHaHa?pid=ImgDet&rs=1",
    score: 25,
  },
  {
    label: "Incorrectos",
    imageUrl:
      "https://th.bing.com/th/id/OIP.I0NNniKmzK627B-_tBRWSAHaHZ?pid=ImgDet&w=2307&h=2304&rs=1",
    score: 6,
  },
  {
    label: "Presición",
    imageUrl:
      "https://th.bing.com/th/id/OIP.fbb4EeguJb90nSJIozLqjQHaHa?pid=ImgDet&rs=1",
    score: 40,
  },
];

const scoreFields = [
  { label: "Casos resueltos", score: 0 },
  { label: "Prom. Casos Resueltos al Día", score: 0 },
  { label: "Tiempo Total de Estudio", score: 0 },
  { label: "Prom.Duración de Sesión", score: 0 },
];

export default function Stadistics() {
  return (
    <StatisticsContainer>
      <StatisticChart items={items} />
      <div className="scorefield-container">
        {scoreFields.map(({ label, score }) => (
          <ScoreField key={label} label={label} score={score} />
        ))}
      </div>
    </StatisticsContainer>
  );
}
