import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { TimeIconContainer, TimeText } from "./TimeIcon.style";
import { setTotalGameTimeAndTimePerQuestion } from "../../store/slices/gameSlice";

function TimeIcon({ onTimeFinish, isCounting, seconds = 10 }) {
  const [countdown, setCountdown] = useState(seconds);
  const [countdownValue, setCountdownValue] = useState(0);
  const dispatch= useDispatch();
  const prevIsCountingRef = useRef(isCounting)

  useEffect(() => {
    // isCounting nos indica si el contador esta contando, nos permite pausar el tiempo para esperar que suceda algo mas antes de seguir contando.
    if (isCounting) {
      if (countdown === 0) {
        onTimeFinish();
      }
      
      if (countdown !== 0) {
        setTimeout(() => setCountdown((countdown) => countdown - 1), 1000);
      }
    }
    
    if (!isCounting && prevIsCountingRef.current){
      setCountdownValue((prevCountdownValue ) => prevCountdownValue  +  seconds - countdown);
      const updatedCountdownValue = countdownValue + seconds - countdown;
      dispatch(setTotalGameTimeAndTimePerQuestion({valor: updatedCountdownValue }));
      setCountdown(seconds);
    }
    prevIsCountingRef.current = isCounting;
  }, [countdown, isCounting, countdownValue]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <TimeIconContainer>
      <AccessTimeIcon />
      <TimeText>{formatTime(countdown)}</TimeText>
    </TimeIconContainer>
  );
}

export default TimeIcon;
