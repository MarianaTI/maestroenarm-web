import { useState } from "react";
import { CustomButton } from "../../../../../components/CustomButton";
import TestQuestion from "../../../../../components/TestQuestion";
import { ButtonWrapper, QuestionContainer, TestHeader } from "../../../../../styles/Test.styles";

const testQuestions = [
    {
        question: "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        options: [
            { option: 'A', answer: 'Opcion 1', isCorrect: false },
            { option: 'B', answer: 'Opcion 1', isCorrect: false },
            { option: 'C', answer: 'Opcion 1', isCorrect: false },
            { option: 'D', answer: 'Opcion 1', isCorrect: true }
        ]
    },
    {
        question: "2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        options: [
            { option: 'A', answer: 'Opcion 1', isCorrect: false },
            { option: 'B', answer: 'Opcion 1', isCorrect: true },
            { option: 'C', answer: 'Opcion 1', isCorrect: false },
            { option: 'D', answer: 'Opcion 1', isCorrect: false }
        ]
    },
    {
        question: "3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        options: [
            { option: 'A', answer: 'Opcion 1', isCorrect: false },
            { option: 'B', answer: 'Opcion 1', isCorrect: false },
            { option: 'C', answer: 'Opcion 1', isCorrect: false },
            { option: 'D', answer: 'Opcion 1', isCorrect: true },
            { option: 'E', answer: 'Opcion 1', isCorrect: false }
        ]
    },
]

export default function Test() {
    const [checkTest, setCheckTest] = useState(false)
    return (
        <>
            <TestHeader>
                <h1>Test</h1>
            </TestHeader>
            <QuestionContainer>
                {testQuestions.map(({ question, options }) => <TestQuestion verifyAnswer={checkTest} key={question} question={question} options={options} />)}
                <ButtonWrapper>
                    <CustomButton onClick={() => setCheckTest(!checkTest)} theme="secondary">
                        <span>Finalizar</span>
                    </CustomButton>
                </ButtonWrapper>
            </QuestionContainer>
        </>
    )
}
