import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './linearProgress.module.css';

function LinearProgressWithLabel(props) {
  return (
    <Box className={styles.progressWrapper}>
      <Box className={styles.progressContainer}>
        <LinearProgress variant="determinate" {...props} className={styles.progress} />
      </Box>
      <Box className={styles.progressLabel}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
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
    </Box>
  );
}
