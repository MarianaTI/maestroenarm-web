import Head from "next/head";
import { useEffect, useState } from "react";
import Question from "../components/Question";
import constants from "../constants";
import styles from "../styles/Home.module.css";
import caso from "../styles/GameByCategory.module.css";
import { useSelector } from "react-redux";
import LinearProgress from "../components/LinearProgress/index";
import DotsMobileStepper from "../components/DotsMobileStepper";
import advance from "../components/Question/Question.module.css";
import TimeIcon from "../components/TimeIcon/index";
import Feedback from "../components/Feedback/index"
import { useRouter } from "next/router";
import { answerCount } from "./finalStatistics";

export default function Home() {
  const [clinicalCaseCounter, setClinicalCaseCounter] = useState(0);
  const [questionCounter, setQuestionCounter] = useState(0);
  const [isCounterHidden, setIsCounterHidden] = useState(true);
  const [isResultRevealed, setIsResultRevealed] = useState(false);
  const [isFeedbackHidden, setIsFeedbackHidden] = useState(true);
  const [isCounting, setIsCounting] = useState(true);
  const [trueCount, setTrueCount] = useState(0);
  const [falseCount, setFalseCount] = useState(0);
  const subcategories = useSelector((state) => state.game.subcategories);
  const router = useRouter();

  const toggleResultRevealed = () => {
    setIsResultRevealed(!isResultRevealed);
  };

  const clinicalCase = constants.clinicalCases[clinicalCaseCounter];
  const question = clinicalCase.questions[questionCounter];
  const lengthClinicalCase = constants.clinicalCases.length;
  const lengthQuestions = clinicalCase.questions.length;
  const nowClinicalCaseCounter = clinicalCaseCounter + 1;
  const nowquestionCounter=questionCounter + 1;

  const goNext = () => {
    const question = clinicalCase.questions[nowquestionCounter];
    if (question) {
      setQuestionCounter(nowquestionCounter);
    } else {
      const nextClinicalCaseCounter = nowClinicalCaseCounter;
      if (nextClinicalCaseCounter < constants.clinicalCases.length) {
        setClinicalCaseCounter(nextClinicalCaseCounter);
        setQuestionCounter(0);
      } else {
        router.push("/finalStatistics");
      }
    }
  };

  const handleAnswer=(isAnswerCorrect)=>{
    if (isAnswerCorrect) {
      setTrueCount(trueCount + 1);
    } else {
      setFalseCount(falseCount + 1);
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
  };

  const handleCountFinish = () => {
    setIsCounterHidden(true);
    toggleResultRevealed();
    goNext();
    setIsCounting(true);
    answerCount(trueCount, falseCount);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>DEMO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className={advance.question}>
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
        <Question>{clinicalCase.label}</Question>
        <p className={caso.pregunta}>{question.label}</p>

        {isFeedbackHidden && (
          <div className="container">
            <div className={styles.answersContainer}>
              <Answers
                answers={question.answers}
                onClick={handleAnswerClick}
                isResultRevealed={isResultRevealed}
              />
              {!isCounterHidden && (
                <div className={styles.counterContainer}>
                  <Counter onCountFinish={handleCountFinish} />
                </div>
              )}
            </div>
          </div>
        )}
        {!isFeedbackHidden && (
          <div className="container">
            <Feedback text={clinicalCase.feedback.text} />
          </div>
        )}
        <DotsMobileStepper
          lengthQuestions={lengthQuestions}
          nowquestionCounter={nowquestionCounter}
          nowClinicalCaseCounter={nowClinicalCaseCounter}
        ></DotsMobileStepper>
      </main>
    </div>
  );
}

function Answers({ answers, onClick, isResultRevealed }) {
  const handleAnswerClick = (isCorrect, item) => {
    onClick(isCorrect);
  };

  return (
    <div className={styles.answers}>
      {answers.map((answer) => (
        <Answer
          onClick={(evento) =>
            handleAnswerClick(answer.isCorrect, evento.target)
          }
          className={
            isResultRevealed && answer.isCorrect
              ? styles["is-correct"]
              : isResultRevealed && !answer.isCorrect
              ? styles["is-error"]
              : ""
          }
        >
          {answer.label}
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

function Counter({ onCountFinish }) {
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    if (counter !== 0) {
      const countDownInterval = setInterval(
        () => setCounter(counter - 1),
        1000
      );
      return () => clearInterval(countDownInterval);
    }
    if (counter === 0) onCountFinish();
  }, [counter]);

  return (
    <div className={styles.counter}>
      <span>{counter}</span>
    </div>
  );
}

