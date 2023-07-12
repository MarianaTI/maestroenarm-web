import Head from "next/head";
import { useEffect, useState } from "react";
import Case from "../components/Case";
import constants from "../constants";
import styles from "../styles/Home.module.css";
import { useDispatch } from "react-redux";
import LinearProgress from "../components/LinearProgress/index";
import DotsMobileStepper from "../components/DotsMobileStepper";
import TimeIcon from "../components/TimeIcon/index";
import { useRouter } from "next/router";
import { CustomButton } from "../components/CustomButton"
import CustomModal from "../components/CustomModal";
import { ReturnButtonContainer } from "../styles/demo.style";
import { setFalseAnswerCount, setTrueAnswerCount, setAddGameHistory } from "../store/slices/gameSlice";

export default function Home() {
  const [clinicalCaseCounter, setClinicalCaseCounter] = useState(0);
  const [questionCounter, setQuestionCounter] = useState(0);
  const [isCounterHidden, setIsCounterHidden] = useState(true);
  const [isResultRevealed, setIsResultRevealed] = useState(false);
  const [isFeedbackHidden, setIsFeedbackHidden] = useState(true);
  const [isCounting, setIsCounting] = useState(true);
  const dispatch= useDispatch();
  const router = useRouter();
  const [isOpenFeedback, setOpenFeedback] = useState(false);
  const clinicalCase = constants.clinicalCases[clinicalCaseCounter];
  const clinicalCaseName = clinicalCase.case;
  const question = clinicalCase.question[questionCounter];
  const questionText = question.text;
  const lengthClinicalCase = constants.clinicalCases.length;
  const lengthQuestions = clinicalCase.question.length;
  const nowClinicalCaseCounter = clinicalCaseCounter + 1;
  const nowquestionCounter = questionCounter + 1;
  const feedbackQuestion = question.feedbackQuestion;
  const answers = question.answers;
  const correctAnswer = question.correctAnswer;
  const book = clinicalCase.book;
  const feedbackGeneralCase = clinicalCase.feedbackGeneral;

  const toggleResultRevealed = () => {
    setIsResultRevealed(!isResultRevealed);
  };

  const toggleForgotPasswordModal = () => {
    setOpenFeedback((isOpenFeedback) => !isOpenFeedback);
  };

  const goNext = () => {
    const question = clinicalCase.question[nowquestionCounter];
    if (question) {
      setQuestionCounter(nowquestionCounter);
    } else {
      const nextClinicalCaseCounter = nowClinicalCaseCounter;
      if (nextClinicalCaseCounter < constants.clinicalCases.length) {
        setClinicalCaseCounter(nextClinicalCaseCounter);
        setQuestionCounter(0);
      } else {
        router.push("/results");
      }
      setIsCounting(true);
    }
  };

  const handleAnswer = (isAnswerCorrect) => {
    if (isAnswerCorrect == question.correctAnswer) {
      dispatch(setTrueAnswerCount({valor:1}));
    } else {
      dispatch(setFalseAnswerCount({valor:1}));
    }
  }


  const handleAnswerClick = (isAnswerCorrect) => {
    setIsCounterHidden(false);
    toggleResultRevealed();
    setIsCounting(false);
    handleAnswer(isAnswerCorrect);
  };

  const handleQuestionTimeFinished = () => {
    setIsCounterHidden(false);
    toggleResultRevealed();
    setIsCounting(false);
    dispatch(setFalseAnswerCount({valor:1}));
  };
  const handleCountFinish = () => {
    setIsCounterHidden(true);
    toggleResultRevealed();
    setIsCounting(true);
    dispatch(setAddGameHistory({clinicalCaseName, questionText, correctAnswer, answers, book, feedbackGeneralCase}))
    if (!isOpenFeedback) {
      goNext();
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>GAME</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className={styles.countCase}>
          {nowClinicalCaseCounter} de {lengthClinicalCase}
        </p>
        <LinearProgress
          lengthClinicalCase={lengthClinicalCase}
          nowClinicalCaseCounter={nowClinicalCaseCounter}
        ></LinearProgress>
        <TimeIcon
          onTimeFinish={handleQuestionTimeFinished}
          seconds={13}
          isCounting={isCounting}
        ></TimeIcon>
        <Case>{clinicalCaseName}</Case>
        <p className={styles.pregunta}>{questionText}</p>

        {isFeedbackHidden && (
          <div className="container">
            <div className={styles.answersContainer}>
              <Answers
                answers={question.answers}
                onClick={handleAnswerClick}
                isResultRevealed={isResultRevealed}
                correctAnswer={question.correctAnswer}
              />
              {!isCounterHidden && (
                <div className={styles.counterContainer}>
                  <Counter onCountFinish={handleCountFinish} isFeedbackOpen={isOpenFeedback} />
                </div>
              )}

            </div>
          </div>
        )}

        <DotsMobileStepper
          lengthQuestions={lengthQuestions}
          nowquestionCounter={nowquestionCounter}
          nowClinicalCaseCounter={nowClinicalCaseCounter}
        ></DotsMobileStepper>
        <CustomModal
          open={isOpenFeedback}
          onClose={toggleForgotPasswordModal}
          title="Feedback"
          message={feedbackQuestion}
        />
        {!isCounting && !isOpenFeedback && (
          <ReturnButtonContainer>
            <CustomButton text="Feedback" type onClick={toggleForgotPasswordModal} />
          </ReturnButtonContainer>
        )}

      </main>
    </div>
  );
}

function Answers({ answers, onClick, isResultRevealed, correctAnswer }) {
  const handleAnswerClick = (id, item) => {
    onClick(id);
  };

  return (
    <div className={styles.answers}>
      {answers.map((answer) => (
        <Answer
          onClick={(evento) =>
            handleAnswerClick(answer.id, evento.target)
          }
          className={
            isResultRevealed && answer.id == correctAnswer
              ? styles["is-correct"]
              : isResultRevealed && answer.id != correctAnswer
                ? styles["is-error"]
                : ""
          }
        >
          {answer.text}
        </Answer>
      ))}
    </div>
  );
}

function Answer({ children, className, ...props }) {
  return (
    <div {...props} className={`${styles.answer} ${className}`}>
      <span>{children}</span>
    </div>
  );
}

function Counter({ onCountFinish, isFeedbackOpen }) {
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    if (counter !== 0 && !isFeedbackOpen) {
      const countDownInterval = setInterval(
        () => setCounter(counter - 1),
        1000
      );
      return () => clearInterval(countDownInterval);
    }
    if (counter === 0) onCountFinish();
  }, [counter, isFeedbackOpen]);

  return (
    <div className={styles.counter}>
      <span>{counter}</span>
    </div>
  );
}


