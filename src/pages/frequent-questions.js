import {Container, AboutQuestion, QuestionsFrequent, Image} from "../styles/frequentQuestions.style";
import SelectQuestions from "../components/SelectQuestions";

const frecuentQuestions = () => {
    return (
       <Container>
        <h1>Preguntas frecuentes</h1>
        <AboutQuestion>
            <Image src="./frequentQuestions.svg" width={500} height={500}/>
            <QuestionsFrequent>
                <SelectQuestions 
                question={"¿Como te llamas?"}
                information={"Este es mi nombre por que asi me lo pusieron"}/>
                <SelectQuestions 
                question={"¿Como te llamas?"}
                information={"Este es mi nombre por que asi me lo pusieron"}/>
            </QuestionsFrequent>
        </AboutQuestion>
    </Container> 
    ) 
}
export default frecuentQuestions;