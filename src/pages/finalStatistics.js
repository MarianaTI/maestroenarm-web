import React from "react";
import styles from "../styles/GameByCategory.module.css"
import NavbarStatics from '../components/NavbarStatistics/Index.js';
import TimeResult from "../components/TimeResult/Index.js";
import { StatisticChart } from '../components/StatisticsChart/index.js'
import { StatisticsContainer } from "../styles/statistics.style.js";
import { TextContainerResult, Container , ContainerResult, TextStatic} from "../styles/Result.style.js";

export function answerCount(trueCount,falseCount){
const items = [
    { label: 'Correctos', imageUrl: 'https://th.bing.com/th/id/OIP.oHwE7W6T_2kEtiaccChqAQHaHa?pid=ImgDet&rs=1', score: trueCount },
    { label: 'Incorrectos', imageUrl: 'https://th.bing.com/th/id/OIP.I0NNniKmzK627B-_tBRWSAHaHZ?pid=ImgDet&w=2307&h=2304&rs=1', score: falseCount },
    { label: 'Presición', imageUrl: 'https://th.bing.com/th/id/OIP.fbb4EeguJb90nSJIozLqjQHaHa?pid=ImgDet&rs=1', score: 40 }
];
console.log('trueCount: ',trueCount);
console.log('falseCount: ',falseCount);
return items;
}

export default function FinalStatistics() {
    const items=answerCount();
    return (
        <div>
            <NavbarStatics></NavbarStatics>

            <StatisticsContainer>
                <TimeResult></TimeResult>
                <StatisticChart items={items}></StatisticChart>
            </StatisticsContainer>
            <Container>
                <TextContainerResult>
                    <span>Resultados por categoria</span>
                    
                </TextContainerResult>
                <ContainerResult>
                    <span>ENARM</span>
                    <span>2/5-40%</span>
                    <span>Ver más...</span>
                </ContainerResult>
                <TextStatic>
                    <span>Ginecologia1/1 -100%</span>
                    <span>Remautologia0/1 -0%</span>
                </TextStatic>
                    <a href="/" className={styles.botonPageFinal}>
                    <span>Salir</span>
                    </a>
               
            </Container>
            

        </div>
    );
}