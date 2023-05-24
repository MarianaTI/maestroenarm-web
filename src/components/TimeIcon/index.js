import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import styles from './TimeIcon.module.css';

function TimeIcon() {
  return (
    <div>
      <AccessTimeIcon  className={styles.clock}/> <span className={styles.time}>1:00</span>
    </div>
  );
}

export default TimeIcon;
