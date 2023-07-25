import { Container, AboutQuestion, QuestionsFrequent, Image } from "../styles/frequentQuestions.style";
import SelectQuestions from "../components/SelectQuestions";


//TODO: check this page is not responsive on text
export default function FrecuentQuestions() {
    return (
        <Container>
            <h1>Preguntas frecuentes</h1>
            <AboutQuestion>
                <Image src="./frequentQuestions.svg" width={500} height={500} alt="frequent-questions" />
                <QuestionsFrequent>
                    <SelectQuestions
                        question={"¿Cómo puedo acceder a la sección de práctica gratuita?"}
                        information={"Para acceder a la sección de práctica gratuita, simplemente visita nuestra página principal y busca el enlace o botón que te lleve a la sección de práctica. Allí encontrarás encuestas generales con preguntas aleatorias basadas en diferentes especialidades de la medicina. Puedes realizar tantas prácticas como desees en esta sección."}
                    />
                    <SelectQuestions
                        question={"¿Cuál es la diferencia entre el modo gratuito y el modo de pago?"}
                        information={" El modo gratuito te permite acceder a las encuestas generales con preguntas aleatorias de diferentes especialidades de la medicina. En cambio, el modo de pago (premium) ofrece varias secciones adicionales. Por ejemplo, en la sección Por categoría, puedes seleccionar el número de casos clínicos que deseas responder y elegir en qué especialidades necesitas más práctica. El modo de pago te brinda una experiencia más personalizada y enfocada en tus necesidades específicas de estudio."}
                    />
                    <SelectQuestions
                        question={"¿Cómo puedo comparar mis habilidades con otros estudiantes?"}
                        information={"Tiene una sección especializada donde puedes comparar tus habilidades con otros usuarios. La sección de juegos multijugador consta de tres áreas: amistoso, competitivo y por categoría. En el área amistosa, puedes invitar a tus amigos o compañeros a través de un enlace y participar juntos en el quiz. Pasarán una serie de casos clínicos y responderán las preguntas asignadas. Al final, se mostrará el resultado de cada participante."}
                    />
                    <SelectQuestions
                        question={"¿Puedo practicar de forma individual?"}
                        information={"Si, ofrece una sección para practicar de forma individual. Aquí, tendrás acceso a una serie de preguntas en modo aleatorio que podrás responder tantas veces como desees. Esta sección te permite practicar de manera autónoma y mejorar tus habilidades sin la necesidad de competir o compararte con otros usuarios."}
                    />
                    <SelectQuestions
                        question={"¿Cómo puedo seleccionar la rama de la medicina en la sección de práctica individual?"}
                        information={" En la sección de práctica individual, tendrás la opción de elegir la rama de la medicina en la que deseas practicar. Puedes navegar por las diferentes especialidades médicas disponibles y seleccionar aquella en la que quieras enfocarte. Esto te permitirá centrar tu estudio en áreas específicas de interés o en las que necesites más práctica."}
                    />
                </QuestionsFrequent>
            </AboutQuestion>
        </Container>
    )
}