import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { TimeIconContainer, TimeText } from './TimeIcon.style';

function TimeIcon() {
  return (
    <TimeIconContainer>
      <AccessTimeIcon />
      <TimeText>1:00</TimeText>
    </TimeIconContainer>
  );
}

export default TimeIcon;

