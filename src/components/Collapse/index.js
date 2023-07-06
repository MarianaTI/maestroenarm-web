import React, { useState } from 'react';
import { Collapse } from '@material-ui/core';
import { Container, Typography, ClosedCollapse, Case, Pregunta } from './index.style';
import { useSelector } from 'react-redux';

const CollapseComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const gameHistory = useSelector((state) => state.game.gameHistory);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Filtrar casos clínicos únicos
  const uniqueClinicalCases = gameHistory.reduce((uniqueCases, item) => {
    if (!uniqueCases.includes(item.clinicalCaseName)) {
      uniqueCases.push(item.clinicalCaseName);
    }
    return uniqueCases;
  }, []);

  return (
    <Container >
      <ClosedCollapse onClick={handleToggle}>
        <div>MAESTRO ERNAM</div>
        <div>{isOpen ? "" : "Ver más..."}</div>
      </ClosedCollapse>

      <Collapse in={isOpen}>
        <Typography >
          {uniqueClinicalCases.map((caseName, index) => {
            const filteredQuestions = gameHistory.filter(item => item.clinicalCaseName === caseName);

            return (
              <div key={index}>
                <Case>Caso clínico {index + 1}: {caseName}</Case>
                {filteredQuestions.map((item, questionIndex) => (
                  <Pregunta key={questionIndex}>Pregunta: {item.questionText}</Pregunta>
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
