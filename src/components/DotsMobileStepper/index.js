import * as React from 'react';
import { useTheme, styled } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import { Container } from './Index.style'; //esta raro


const CustomDot = styled(MobileStepper)(({ theme }) => ({
  "& .MuiMobileStepper-dot": {
    width: 40,
    height: 8,
    backgroundColor: '',
    borderRadius: 7,
    margin: '20px 4px ',
  },
}));

export default function DotsMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setActiveStep((prevActiveStep) => (prevActiveStep >= 5 ? 0 : prevActiveStep + 1));
    }, 2000); // Cambiar el tiempo de transición a tu preferencia (en milisegundos)

    return () => clearTimeout(timer);
  }, [activeStep]);

  return (
    <Container>
      <CustomDot
        variant="dots"
        steps={6}
        position="static"
        activeStep={activeStep}
        nextButton={null}
        backButton={null}
      />
    </Container>
  );
}
