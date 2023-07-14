import React from "react";
import { useSelector } from "react-redux";
import { TextContainer } from "./Index.style";

const TimeResult =() => {
    const totalGameTime = useSelector((state) => state.game.totalGameTime);
    return (
        
        <TextContainer>
            <span>MODO PRÁCTICA- ALEATORIO</span>
            <span>Tiempo Total : {totalGameTime}</span>
            <span>Por pregunta : 00:24</span>
        </TextContainer>
        
    );
};

export default TimeResult;