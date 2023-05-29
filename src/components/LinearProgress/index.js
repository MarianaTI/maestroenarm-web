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

export default function LinearWithValueLabel() {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
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
