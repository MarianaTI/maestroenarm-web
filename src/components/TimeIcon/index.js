import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { TimeIconContainer, TimeText } from "./TimeIcon.style";
import { setTotalGameTime } from "../../store/slices/gameSlice";

function TimeIcon({ onTimeFinish, isCounting, seconds = 10 }) {
  const [countdown, setCountdown] = useState(seconds);
  const dispatch= useDispatch();

  useEffect(() => {
    // isCounting nos indica si el contador esta contando, nos permite pausar el tiempo para esperar que suceda algo mas antes de seguir contando.
    if (isCounting) {
      if (countdown === 0) {
        onTimeFinish();
      }
      //dispatch(setTotalGameTime({valor: countdown}));
      if (countdown !== 0) {
        setTimeout(() => setCountdown((countdown) => countdown - 1), 1000);
      }
    }
    console.log(countdown)
    // si se detiene el contador va a reiniciar la cuenta
    if (!isCounting) setCountdown(seconds);
  }, [countdown, isCounting]);

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
