import { CustomButton } from "../../../components/CustomButton";
import TestQuestion from "../../../components/TestQuestion";
import { ButtonWrapper, Container, QuestionContainer, TestHeader } from "../../../styles/Test.styles";

const testQuestions = [
    {
        question: "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        options: [
            { option: 'A', answer: 'Opcion 1' },
            { option: 'B', answer: 'Opcion 1' },
            { option: 'C', answer: 'Opcion 1' },
            { option: 'D', answer: 'Opcion 1' }
        ]
    },
    {
        question: "2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        options: [
            { option: 'A', answer: 'Opcion 1' },
            { option: 'B', answer: 'Opcion 1' },
            { option: 'C', answer: 'Opcion 1' },
            { option: 'D', answer: 'Opcion 1' }
        ]
    },
    {
        question: "3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        options: [
            { option: 'A', answer: 'Opcion 1' },
            { option: 'B', answer: 'Opcion 1' },
            { option: 'C', answer: 'Opcion 1' },
            { option: 'D', answer: 'Opcion 1' },
            { option: 'E', answer: 'Opcion 1' }
        ]
    },
    {
        question: "4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        options: [
            { option: 'A', answer: 'Opcion 1' },
            { option: 'B', answer: 'Opcion 1' },
        ]
    },
]

export default function Test() {
    return (
        <Container>
            <TestHeader>
                <h1>Test</h1>
            </TestHeader>
            <QuestionContainer>
                {testQuestions.map(({ question, options }) => <TestQuestion key={question} question={question} options={options} />)}
                <ButtonWrapper>
                    <CustomButton theme="secondary" size="large">
                        <span style={{ fontSize: 16, padding: 20 }}>Finalizar</span>
                    </CustomButton>
                </ButtonWrapper>
            </QuestionContainer>
        </Container>
    )
}
