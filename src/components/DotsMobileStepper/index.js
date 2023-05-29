import * as React from 'react';
import { useTheme, styled } from '@mui/material/styles';
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
  const valorlengthQuestions=lengthQuestions.lengthQuestions;
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setActiveStep((prevActiveStep) => (prevActiveStep >= (valorlengthQuestions-1) ? 0 : prevActiveStep + 1));
    }, 13000); 
    return () => clearTimeout(timer);
  }, [activeStep]);

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
