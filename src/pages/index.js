import Head from "next/head";
import { useEffect, useState } from "react";
import Question from "../components/Question";
import constants from "../constants";
import styles from "../styles/Home.module.css";
import caso from "../styles/GameByCategory.module.css";
import { useSelector } from "react-redux";
import LinearProgress from "../components/LinearProgress/index";
import DotsMobileStepper from "../components/DotsMobileStepper";
import advance from '../components/Question/Question.module.css';
import TimeIcon from '../components/TimeIcon/index'

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
  const lengthQuestions=clinicalCase.questions.length;

  const goNext = () => {
    const question = clinicalCase.questions[questionCounter + 1];
    if (question) setQuestionCounter(questionCounter + 1);
    if (!question) setClinicalCaseCounter(clinicalCaseCounter + 1);
  };

  //TODO:Esta función se utiliza como manejador de eventos para manejar el clic en una respuesta.( para mostrar o ocultar la respuesta correcta.)
  const handleAnswerClick = (isAnswerCorrect) => {
    setIsCounterHidden(false);
    toggleResultRevealed();
    
  };


 //TODO:Esto sirve para para pasar a la siguiente pregunta o caso clínico cuando se termina el tiempo del reloj.
 const timeFinished = () => {
  setIsCounterHidden(false);
  toggleResultRevealed();
};


  //TODO:Esto sirve para para pasar a la siguiente pregunta o caso clínico.
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
        <p className={advance.question}>1 de 3</p>
        <LinearProgress></LinearProgress>
        <TimeIcon onTimeFinish={timeFinished}></TimeIcon>
        <Question >{clinicalCase.label}</Question>
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
        <DotsMobileStepper lengthQuestions={lengthQuestions} ></DotsMobileStepper>
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
      {
        answers.map((answer) => (
          <Answer
            onClick={evento => handleAnswerClick(answer.isCorrect, evento.target)}
            className={isResultRevealed && answer.isCorrect ? styles["is-correct"]
              : isResultRevealed && !answer.isCorrect ? styles["is-error"] : ''
            }
          >
            {answer.label}
          </Answer>
        ))
      }
    </div >
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
