import React, { useState } from 'react';
import { Collapse } from '@material-ui/core';
import { Container, Typography, ClosedCollapse, Case, Pregunta, ClosedCollapseAnswert, ContainerAnswert } from './index.style';
import { useSelector } from 'react-redux';

const CollapseComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [casoClinicoIndex, setCasoClinicoIndex] = useState(0);
  const [answerIndexFeedback, setAnswerIndexFeedback] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const gameHistory = useSelector((state) => state.game.gameHistory);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleToggleAnswer = (questionIndex, index, answerIndex) => {
    setSelectedAnswerIndex(questionIndex === selectedAnswerIndex ? null : questionIndex);
    setCasoClinicoIndex(index=== casoClinicoIndex ? null : index);
    setAnswerIndexFeedback(answerIndex === answerIndexFeedback ? null : answerIndex);
  };
  
  const uniqueClinicalCases = gameHistory.reduce((uniqueCases, item) => {
    if (!uniqueCases.includes(item.clinicalCaseName)) {
      uniqueCases.push(item.clinicalCaseName);
    }
    return uniqueCases;
  }, []);

  return (
    <Container>
      <ClosedCollapse onClick={handleToggle}>
        <div>MAESTRO ERNAM</div>
        <div>{isOpen ? '' : 'Ver más...'}</div>
      </ClosedCollapse>

      <Collapse in={isOpen}>
        <Typography>
          {uniqueClinicalCases.map((caseName, index) => {
            const filteredQuestions = gameHistory.filter(
              (item) => item.clinicalCaseName === caseName
            );

            return ( 
              <div key={index}>
                <Case>Caso clínico {index + 1}: {caseName}</Case>
                {filteredQuestions.map((item, questionIndex) => (
                  <div key={questionIndex}>
                    <Pregunta>Pregunta {questionIndex + 1}: {item.questionText}</Pregunta>
                      {item.answers.map((answer, answerIndex) => (
                        <ContainerAnswert key={answerIndex}>
                          <ClosedCollapseAnswert onClick={() => handleToggleAnswer(questionIndex, index, answerIndex)} isCorrectAnswer={gameHistory[answerIndex].answers[answerIndex].id === item.correctAnswer}>
                            <div>{answer.text}</div>
                          </ClosedCollapseAnswert> 
                          <Collapse in={selectedAnswerIndex === questionIndex && answerIndexFeedback === answerIndex && casoClinicoIndex === index}>
                            <Typography>
                              <div key={answerIndex}>{answer.answer}</div>
                            </Typography>
                          </Collapse>
                        </ContainerAnswert>
                      ))}
                  </div>
                ))}
              </div>
            );
          })}
        </Typography>
      </Collapse>
    </Container>
  );
};

export default CollapseComponent;
