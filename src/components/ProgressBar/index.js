import { useState, useEffect } from 'react';
import { ProgressBarStyles, StyleBar } from './index.style';

const ProgressBar = () => {
  const [percentage, setPercentage] = useState(100);

  useEffect(() => {
    const progress = setInterval(() => {
      setPercentage(prevPercentage => {
        const nextPercentage = prevPercentage + 10;
        if (nextPercentage >= 100) {
          clearInterval(progress);
        }
        return nextPercentage;
      });
    }, 1000);
  }, []);

  return (
      <StyleBar>
        <ProgressBarStyles/>
      </StyleBar>
    )
};

export default ProgressBar;
