import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import styles from './linearProgress.module.css';
import TimeIcon from '../TimeIcon/index.js';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


const BorderLinearProgress = styled(LinearProgress)(() => ({
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 12,
    backgroundColor: '#052970',
  },
}));

function LinearProgressWithLabel(props) {
  return (
    <BorderLinearProgress variant="determinate" {...props} className={styles.progress} />
  );
}

LinearProgressWithLabel.propTypes = {
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
    <Box className={styles.progressContainer}>
      <LinearProgressWithLabel value={progress} />
      <TimeIcon />
    </Box>
  );
}


