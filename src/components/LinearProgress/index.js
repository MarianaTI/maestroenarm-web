import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import {
  ProgressContainer,
  ProgressWrapper,
  Progress,
  ProgressLabel,
} from './Index.style';

function ProgressWithLabel(props) {
  return (
    <Progress variant="determinate" {...props} />
  );
}

ProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel(lengthClinicalCase) {
  const [progress, setProgress] = useState(0);
  const clinicalCaseLength=lengthClinicalCase.lengthClinicalCase;
  const clinicalCaseCounterNow=lengthClinicalCase.nowClinicalCaseCounter;
  const progressLength= 100/clinicalCaseLength;
  const progressNow=progressLength*clinicalCaseCounterNow;
  console.log('lengthClinicalCase', clinicalCaseLength);
  console.log('prueba ', progressLength*clinicalCaseCounterNow)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress=progressNow));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box>
      <ProgressContainer>
        <ProgressWrapper>
          <ProgressWithLabel value={progress} />
          <ProgressLabel></ProgressLabel>
        </ProgressWrapper>
      </ProgressContainer>
      
    </Box>
  );
}
