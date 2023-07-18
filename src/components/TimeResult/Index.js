import React from "react";
import { useSelector } from "react-redux";
import { TextContainer } from "./Index.style";

const TimeResult =() => {
    const totalGameTime = useSelector((state) => state.game.totalGameTime);
    const timePerQuestion = useSelector((state) => state.game.timePerQuestion)

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
    
        return `${minutes} minutos con ${seconds.toString().padStart(2, "0")} segundos`;
    };
      
    return (
        
        <TextContainer>
            <span>MODO PRÁCTICA- ALEATORIO</span>
            <span>Tiempo Total: {formatTime(totalGameTime)}</span>
            <span>Por pregunta: {formatTime(timePerQuestion)}</span>
        </TextContainer>
        
    );
};

export default TimeResult;