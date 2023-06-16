import ButtomAlertModal from "../components/AlertButtom/Index";
import Navigation from "../components/Nab"
import ProgressBar from "../components/ProgressBar";
import { StyledTextContainer } from "../styles/CaseStatistics.style";
import { StyleText, StyledCardCategory, StyledCards, StyledContainer, StyledLine, StyledRow, } from "../styles/CaseStatistics.style";


function TextCard({ Title, Subtitle, Percentage, }) {
    return (
        <>
            <StyleText>
                <p>{Title}</p>
                <p>{Subtitle}</p>
            </StyleText>
            <p style={{ textAlign: "center" }}>{Percentage}</p>
        </>
    );
};

const CaseStatistics = () => {
    return (
        <>
            <Navigation />
            <StyledContainer>
                <StyledRow>
                    <StyledCards>
                        <ButtomAlertModal Title="¿Qué es la Precision?" message="Descripcion"/>
                        <TextCard Title="Precision" Percentage="0.00%"/>
                    </StyledCards>
                    <StyledCards>
                        <ButtomAlertModal
                            Title="¿Qué es el número RATE?"
                            message="El número URI  es un parametro que nos ayuda a ir evaluando cómo vas mejorando cada vez que utilizas Reto ENARM. 
                            Cada caso clínico tiene un nivel de dificultad que se va auto-calculando y el URI es la sumatoria de los que tu has contestado. 
                            Proximamente podrás calcularlo por distintos periodos y el general se auto calculará cada 280 casos que es el número de casos que te esperan en el ENARM. 
                            El cálculo se hace a las 00:00, 08:00 y 16:00 todos los días para todos los usuarios, si no cambia puede ser porque aún no llega esa hora. "
                        />
                        <TextCard Title="Numero Rate" Percentage="0.0" />
                    </StyledCards>
                </StyledRow>
                <StyledRow>
                    <StyledCards>
                        <ButtomAlertModal Title="¿Qué es el tiempo aproximado por quiz?" message=" Descripcion"/>
                        <TextCard Title="Tiempo Prom." Subtitle="Por Quiz" Percentage="0.0min." /> 
                        </StyledCards>
                    <StyledCards>
                        <ButtomAlertModal Title="¿Qué es el tiempo aproximado por pregunta?"message="Descripcion"/>
                        <TextCard Title="Tiempo Prom." Subtitle="Por Pregunta" Percentage="0.0min." />
                        </StyledCards>
                </StyledRow>
                <StyledLine />
                <StyledTextContainer><span> Resultado Por Categorias:</span></StyledTextContainer>
                <StyledTextContainer>
                    <span>Cirugía</span><ProgressBar /><StyledCardCategory><TextCard Title="Cirugía" Percentage="0/0 = 0%" /></StyledCardCategory>
                    <span>Medicina Interna</span><ProgressBar /><StyledCardCategory><TextCard Title="Medicina Interna" Percentage="0/0 = 0%." /></StyledCardCategory>
                    <span>Pediatra</span><ProgressBar /><StyledCardCategory><TextCard Title="Pediatra" Percentage="0/0 = 0%" /></StyledCardCategory>
                    <span>Gineco-obstricia</span><ProgressBar /><StyledCardCategory><TextCard Title="Gineco obstricia." Percentage="0/0 = 0%" /></StyledCardCategory>
                </StyledTextContainer>
            </StyledContainer>
        </>
    );
};
export default CaseStatistics;

