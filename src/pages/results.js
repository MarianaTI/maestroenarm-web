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

export default function Results() {
  const dispatch = useDispatch();
  const { trueAnswerCount } = useSelector(state => state.game)
  const { falseAnswerCount } = useSelector(state => state.game);
  const { quizAccuracy } = useSelector(state => state.game);
  const bookList = [];
  const feedbackList = [];
  const lastResultsBySubSpeciality = {};
  const router = useRouter();
  const items = answerCount();
  const [isOpenFeedback, setOpenFeedback] = useState(false);
  const gameHistory = useSelector((state) => state.game.gameHistory);
  const gameSpecialityAndSubspeciality = useSelector((state) => state.game.gameSpecialityAndSubspeciality);

  const toggleForgotPasswordModal = () => {
    setOpenFeedback((isOpenFeedback) => !isOpenFeedback);
  };

  const handleClick = () => {
    router.push("/");
  };

  function answerCount() {
    dispatch(setQuizAccuracy());
    const items = [
      { label: 'Correctos', imageUrl: 'https://th.bing.com/th/id/OIP.oHwE7W6T_2kEtiaccChqAQHaHa?pid=ImgDet&rs=1', score: trueAnswerCount },
      { label: 'Incorrectos', imageUrl: 'https://th.bing.com/th/id/OIP.I0NNniKmzK627B-_tBRWSAHaHZ?pid=ImgDet&w=2307&h=2304&rs=1', score: falseAnswerCount },
      { label: 'Presición', imageUrl: 'https://th.bing.com/th/id/OIP.fbb4EeguJb90nSJIozLqjQHaHa?pid=ImgDet&rs=1', score: quizAccuracy }
    ];
    return items;
  }

  gameHistory.forEach((item) => {
    if (!bookList.includes(item.book)) {
      bookList.push(item.book);
    }
    if (!feedbackList.includes(item.feedbackGeneralCase)) {
      feedbackList.push(item.feedbackGeneralCase);
    }
  });

  gameSpecialityAndSubspeciality.forEach((result) => {
    const subSpeciality = result.subSpeciality;
    lastResultsBySubSpeciality[subSpeciality] = result;
  });
  

  return (
    <Container>
      <StatisticsContainer>
        <TimeResult />
        <StatisticChart items={items}></StatisticChart>
      </StatisticsContainer>
      <ContainerSpecialty>
        <TextContainerResult>
          <span>Historial del juego</span>
        </TextContainerResult>
        <ContainerRetroAlim>
          <CollapseComponent />
        </ContainerRetroAlim>

        <TextContainerResult>
          <span>Resultados por categoria</span>
        </TextContainerResult>

        {Object.keys(lastResultsBySubSpeciality).map((subSpeciality, index) => {
        const result = lastResultsBySubSpeciality[subSpeciality];
        return (
          <TextStatic key={index}>
            <p>Specialidad de {result.speciality}</p>
            <div className="span-container">
              <span>{result.subSpeciality}: {result.result}/100</span>
            </div>
          </TextStatic>
        );
      })}

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
