import React from "react";
import styles from "../styles/GameByCategory.module.css";
import TimeResult from "../components/TimeResult/Index.js";
import { StatisticChart } from "../components/StatisticsChart/index.js";
import {
  TextContainerResult,
  Container,
  ContainerRetroAlim,
  TextStatic,
  StatisticsContainer,
  ContainerSpecialty,
} from "../styles/Result.style.js";
import { useDispatch, useSelector } from "react-redux";
import { setQuizAccuracy } from "../store/slices/gameSlice";

export function answerCount(){
  const dispach = useDispatch();
  dispach(setQuizAccuracy());
  const {trueAnswerCount}= useSelector(state=>state.game)
  const {falseAnswerCount}= useSelector(state=> state.game);
  const {quizAccuracy}= useSelector(state=> state.game);
  const items = [
    { label: 'Correctos', imageUrl: 'https://th.bing.com/th/id/OIP.oHwE7W6T_2kEtiaccChqAQHaHa?pid=ImgDet&rs=1', score: trueAnswerCount },
    { label: 'Incorrectos', imageUrl: 'https://th.bing.com/th/id/OIP.I0NNniKmzK627B-_tBRWSAHaHZ?pid=ImgDet&w=2307&h=2304&rs=1', score: falseAnswerCount },
    { label: 'Presición', imageUrl: 'https://th.bing.com/th/id/OIP.fbb4EeguJb90nSJIozLqjQHaHa?pid=ImgDet&rs=1', score: quizAccuracy }
];

return items;
}

export default function Results() {
  const items = answerCount();
  return (
    <Container>
      <StatisticsContainer>
        <TimeResult />
        <StatisticChart items={items}></StatisticChart>
      </StatisticsContainer>
      <ContainerSpecialty>
        <TextContainerResult>
          <span>Resultados por categoria</span>
        </TextContainerResult>
        <ContainerRetroAlim>
          <span>ENARM</span>
          <span>2/5-40%</span>
        </ContainerRetroAlim>
        <TextStatic>
          <span>Ginecologia1/1 -100%</span>
          <span>Remautologia0/1 -0%</span>
        </TextStatic>
        <a href="/" className={styles.botonPageFinal}>
          <span>Salir</span>
        </a>
      </ContainerSpecialty>
    </Container>
  );
}
