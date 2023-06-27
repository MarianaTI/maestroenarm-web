import React, { useState } from 'react';
import {ButtonQuestion, TextQuestion, IconContainer, Text} from './index.style';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


const SelectQuestions = ({ question, information }) => {
  const [desplegado, setDesplegado] = useState(false);

  const toggleDesplegar = () => {
    setDesplegado(!desplegado);
  };

  return (
    <div>
      <ButtonQuestion 
      onClick={toggleDesplegar}>
        <IconContainer>
          <HelpOutlineIcon />
        </IconContainer>
        <Text>{question}</Text>
      </ButtonQuestion>
      {desplegado && <TextQuestion>{information}</TextQuestion>}
    </div>
  );
};

export default SelectQuestions;
