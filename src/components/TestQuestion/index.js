import { useState } from "react";
import { Container, CorrectIcon, FieldWrapper, IncorrectIcon } from "./index.style";

function TestField({ questionOption, answer, isSelected, onClick, isCorrect, verifyAnswer }) {
    return (
        <FieldWrapper onClick={onClick} isSelected={isSelected}>
            <span>{questionOption}</span>
            <p>{answer}</p>
            {verifyAnswer && isCorrect && <CorrectIcon />}
            {verifyAnswer && !isCorrect && <IncorrectIcon />}
        </FieldWrapper>
    );
}

export default function TestQuestion({ question, options, verifyAnswer }) {
    const [selectedOption, setSelectedOption] = useState(null);
    function handleClick(option) { setSelectedOption(option) }
    return (
        <Container>
            <p>{question}</p>
            {options.map(({ option, answer, isCorrect }) => <TestField
                onClick={() => handleClick(option)}
                isSelected={selectedOption == option}
                answer={answer} questionOption={option}
                isCorrect={isCorrect}
                verifyAnswer={verifyAnswer}
                key={option}>
            </TestField>)}
        </Container>
    );
}