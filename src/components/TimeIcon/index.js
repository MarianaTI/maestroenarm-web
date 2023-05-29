import React, { useState, useEffect } from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { TimeIconContainer, TimeText } from './TimeIcon.style';

function TimeIcon({ onTimeFinish }) {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
     const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          
          onTimeFinish(); 
          return 13; 
        } else {
          return prevCountdown - 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <TimeIconContainer>
      <AccessTimeIcon />
      <TimeText>{formatTime(countdown)}</TimeText>
    </TimeIconContainer>
  );
}

export default TimeIcon;
