import React, { useState } from 'react';
import { Collapse } from '@material-ui/core';
import { Container, Typography, ClosedCollapse, Case, Pregunta, ClosedCollapseAnswert, ContainerAnswert } from './index.style';
import { useSelector } from 'react-redux';

const CollapseComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const gameHistory = useSelector((state) => state.game.gameHistory);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleToggleAnswer = (questionIndex) => {
    setSelectedAnswerIndex(questionIndex === selectedAnswerIndex ? null : questionIndex);
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
                    <Pregunta>Pregunta: {item.questionText}</Pregunta>
                    <ContainerAnswert>
                      <ClosedCollapseAnswert onClick={() => handleToggleAnswer(questionIndex)}>
                        {item.answers.map((answer, answerIndex) => (
                          <div key={answerIndex}>{answer.text}</div>
                        ))}
                      </ClosedCollapseAnswert>
                      <Collapse in={selectedAnswerIndex === questionIndex}>
                        <Typography onClick={() => handleToggleAnswer(questionIndex)}>
                          {item.answers.map((answer, answerIndexWhy) => (
                            <div key={answerIndexWhy}>{answer.answer}</div>
                          ))}
                        </Typography>
                      </Collapse>
                    </ContainerAnswert>
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
