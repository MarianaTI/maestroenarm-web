import React, { useState } from 'react';
import { QuestionStyle, ButtonQuestion, TextQuestion } from './index.style';

const SelectQuestions = ({ question, information }) => {
  const [desplegado, setDesplegado] = useState(false);

  const toggleDesplegar = () => {
    setDesplegado(!desplegado);
  };

  return (
    <div>
      <ButtonQuestion onClick={toggleDesplegar}>
        {question}
      </ButtonQuestion>
      {desplegado && <TextQuestion>{information}</TextQuestion>}
    </div>
  );
};

export default SelectQuestions;
