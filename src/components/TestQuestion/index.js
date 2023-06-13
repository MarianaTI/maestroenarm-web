import { useState } from "react";
import { Container, FieldWrapper } from "./index.style";

function TestField({ questionOption, answer, isSelected, onClick }) {
    return (
        <FieldWrapper onClick={onClick} isSelected={isSelected}>
            <span>{questionOption}</span>
            <p>{answer}</p>
        </FieldWrapper>
    );
}

export default function TestQuestion({ question, options }) {
    const [selectedOption, setSelectedOption] = useState(null);
    function handleClick(option) { setSelectedOption(option) }
    return (
        <Container>
            <p>{question}</p>
            {options.map(({ option, answer }) => <TestField
                onClick={() => handleClick(option)}
                isSelected={selectedOption == option}
                answer={answer} questionOption={option}
                key={option}>
            </TestField>)}
        </Container>
    );
}