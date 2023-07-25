import * as React from 'react';
import { styled } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import { Container } from './Index.style'; 

const CustomDot = styled(MobileStepper)(({ theme }) => ({
  "& .MuiMobileStepper-dot": {
    width: 40,
    height: 8,
    backgroundColor: '',
    borderRadius: 7,
    margin: '20px 4px ',
  },
}));

export default function DotsMobileStepper(lengthQuestions) {
  const valorlengthQuestions = lengthQuestions.lengthQuestions;
  const questionsnow = lengthQuestions.nowquestionCounter;
  const clinicalCaseCounterNow=lengthQuestions.nowClinicalCaseCounter;
  const [activeStep, setActiveStep] = React.useState(-1);
  const prevQuestionsNowRef = React.useRef();
  
  React.useEffect(() => {
    prevQuestionsNowRef.current = questionsnow;
  }, [questionsnow]);

  React.useEffect(() => {
    setActiveStep(-1);
  }, [ clinicalCaseCounterNow]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
     
        if (prevQuestionsNowRef.current === questionsnow) {
          setActiveStep((prevActiveStep) => (prevActiveStep >= valorlengthQuestions ? 0 : prevActiveStep + 1));
          prevQuestionsNowRef.current = questionsnow;
        }

    }, 500); 

    return () => clearTimeout(timer);
  }, [questionsnow, clinicalCaseCounterNow]);

  return (
    <Container>
      <CustomDot
        variant="dots"
        steps={valorlengthQuestions}
        position="static"
        activeStep={activeStep}
        nextButton={null}
        backButton={null}
      />
    </Container>
  );
}
