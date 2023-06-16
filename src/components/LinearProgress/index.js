import React, { useEffect, useState, useRef } from 'react';
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
  const clinicalCaseLength = lengthClinicalCase.lengthClinicalCase;
  const clinicalCaseCounterNow = lengthClinicalCase.nowClinicalCaseCounter;
  const progressLength = 100 / clinicalCaseLength;
  const progressNow = progressLength * clinicalCaseCounterNow;
  const [progress, setProgress] = useState(progressNow);
  

  const prevClinicalCaseCounterNowRef = useRef();

  useEffect(() => {
    prevClinicalCaseCounterNowRef.current = clinicalCaseCounterNow;
  }, [clinicalCaseCounterNow]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (prevClinicalCaseCounterNowRef.current !== clinicalCaseCounterNow) {
        setProgress((prevProgress) => (prevProgress >= 100 ? progressNow : prevProgress + progressNow));
        prevClinicalCaseCounterNowRef.current = clinicalCaseCounterNow;
      }
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
