import Head from "next/head";
import { useEffect, useState } from "react";
import Question from "../components/Question";
import constants from "../constants";
import styles from "../styles/Home.module.css";
import caso from "../styles/GameByCategory.module.css";
import { useSelector } from "react-redux";
import LinearProgress from "../components/LinearProgress/index";

export default function Home() {
  const [clinicalCaseCounter, setClinicalCaseCounter] = useState(0);
  const [questionCounter, setQuestionCounter] = useState(0);
  const [isCounterHidden, setIsCounterHidden] = useState(true);
  const [isResultRevealed, setIsResultRevealed] = useState(false);
  const [isFeedbackHidden, setIsFeedbackHidden] = useState(true);
  const subcategories = useSelector((state) => state.game.subcategories);

  console.log(subcategories);

  const toggleResultRevealed = () => {
    setIsResultRevealed(!isResultRevealed);
  };

  const clinicalCase = constants.clinicalCases[clinicalCaseCounter];
  const question = clinicalCase.questions[questionCounter];

  const goNext = () => {
    const question = clinicalCase.questions[questionCounter + 1];
    if (question) setQuestionCounter(questionCounter + 1);
    if (!question) setClinicalCaseCounter(clinicalCaseCounter + 1);
  };

  const handleAnswerClick = (isAnswerCorrect) => {
    setIsCounterHidden(false);
    toggleResultRevealed();
    toggleResultRevealed();
  };

  const handleCountFinish = () => {
    setIsCounterHidden(true);
    toggleResultRevealed();
    goNext();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Question>{question.label}</Question>
        <LinearProgress></LinearProgress>
        <Question >{clinicalCase.label}</Question>
        <p className={caso.pregunta}>Pregunta</p>
       
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
      </main>
    </div>
  );
}

function Answers({ answers, onClick, isResultRevealed }) {
  const handleAnswerClick = (isCorrect) => {
    onClick(isCorrect);
  };

  return (
    <div className={styles.answers}>
      {answers.map((answer) => (
        <Answer
          className={`${
            isResultRevealed
              ? !answer.isCorrect
                ? styles["is-wrong-answer"]
                : ""
              : ""
          }`}
          onClick={() => handleAnswerClick(answer.isCorrect)}
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

function Button({ children, className, ...props }) {
  return (
    <button {...props} className={`${styles.button} ${className}`}>
      {children}
    </button>
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

function Feedback({ text }) {
  return (
    <div className="feedback">
      <p>{text}</p>
    </div>
  );
}
