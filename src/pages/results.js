import { React, useState } from "react";
import TimeResult from "../components/TimeResult/Index.js";
import { StatisticChart } from "../components/StatisticsChart/index.js";
import {
  TextContainerResult,
  Container,
  ContainerRetroAlim,
  TextStatic,
  StatisticsContainer,
  ContainerSpecialty,
  ReturnButtonsContainer,
  ContainerCustomModal
} from "../styles/Result.style.js";
import { useDispatch, useSelector } from "react-redux";
import { setQuizAccuracy } from "../store/slices/gameSlice";
import { CustomButton } from "../components/CustomButton";
import { useRouter } from "next/router";
import Link from "next/link";
import CollapseComponent from "../components/Collapse";
import CustomModal from "../components/CustomModal";

export function answerCount() {
  const dispach = useDispatch();
  dispach(setQuizAccuracy());
  const { trueAnswerCount } = useSelector(state => state.game)
  const { falseAnswerCount } = useSelector(state => state.game);
  const { quizAccuracy } = useSelector(state => state.game);
  const items = [
    { label: 'Correctos', imageUrl: 'https://th.bing.com/th/id/OIP.oHwE7W6T_2kEtiaccChqAQHaHa?pid=ImgDet&rs=1', score: trueAnswerCount },
    { label: 'Incorrectos', imageUrl: 'https://th.bing.com/th/id/OIP.I0NNniKmzK627B-_tBRWSAHaHZ?pid=ImgDet&w=2307&h=2304&rs=1', score: falseAnswerCount },
    { label: 'Presición', imageUrl: 'https://th.bing.com/th/id/OIP.fbb4EeguJb90nSJIozLqjQHaHa?pid=ImgDet&rs=1', score: quizAccuracy }
  ];

  return items;
}

export default function Results() {
  const bookList = [];
  const feedbackList = [];
  const router = useRouter();
  const items = answerCount();
  const [isOpenFeedback, setOpenFeedback] = useState(false);
  const gameHistory = useSelector((state) => state.game.gameHistory);

  const toggleForgotPasswordModal = () => {
    setOpenFeedback((isOpenFeedback) => !isOpenFeedback);
  };

  const handleClick = () => {
    router.push("/");
  };

  gameHistory.forEach((item) => {
    if (!bookList.includes(item.book)) {
      bookList.push(item.book);
    }
    if (!feedbackList.includes(item.feedbackGeneralCase)) {
      feedbackList.push(item.feedbackGeneralCase);
    }
  });


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
          <CollapseComponent />
        </ContainerRetroAlim>
        <TextStatic>
          <span>Ginecologia 1/1 -100%</span>
          <span>Remautologia 0/1 -0%</span>
          <span>MACARENA 0/1 -0%</span>
        </TextStatic>
        <ReturnButtonsContainer>
          <CustomButton text="Salir" type="submit" onClick={handleClick} />

          <CustomModal
            open={isOpenFeedback}
            onClose={toggleForgotPasswordModal}
            title="Comentario"
            message={'Descubre recursos de repaso especializados para cada caso clínico y lleva tu aprendizaje al siguiente nivel.'}
          >

            <ContainerCustomModal>
              {bookList.map((book, index) => (
                <div key={index}>
                  <span>Resumen general del caso clínico {index + 1}: </span>
                  <span>{feedbackList[index]}</span>
                  <span>
                    <Link href={book} target="_blank">
                      <CustomButton text="Recurso de estudio" type ></CustomButton>
                    </Link>
                  </span>
                </div>
              ))}
            </ContainerCustomModal>

          </CustomModal>

          {!isOpenFeedback && (
            <CustomButton text="Comentario" type="submit" onClick={toggleForgotPasswordModal} />
          )}
        </ReturnButtonsContainer>
      </ContainerSpecialty>
    </Container>
  );
}
