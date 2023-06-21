import {Container, CardPlans, Cards, Button, OpenModalButton} from "../styles/paymentplans.style";
import CustomModal from "../components/CustomModal";
import CustomBotton from "../components/CustomButton";
import React, { useState } from "react";


const paymentPlans = () => {

    const [isOpenConditions, setOpenConditions] = useState(false);

    const toggleTermsandConditionsModal = () =>
    setOpenConditions((isOpenConditions) => !isOpenConditions);

    return (
        <Container>
            <h1>Planes de pago</h1>
            <CardPlans>
                <Cards>
                    <h1>Mensual</h1>
                    <hr/>
                    <h5>Modo práctica aleatorio</h5>
                    <span>Por tiempo o número de casos</span>
                    <h5>+2400 preguntas</h5>
                    <h5>Estudiar por categoria</h5>
                    <span>Competidor o individual</span>
                    <h5>Modo estudio controlado</h5>
                    <span>Elige la sub especialidad</span>
                    <h5>Material de estudio</h5>
                    <Button>ENARM 1 mes $200.00</Button>
                    <OpenModalButton onClick={toggleTermsandConditionsModal}>
                        Terminos y condiciones
                    </OpenModalButton>
                </Cards>
                <Cards>
                    <h1>Anual</h1>
                    <hr/>
                    <h5>Modo práctica aleatorio</h5>
                    <span>Por tiempo o número de casos</span>
                    <h5>+2400 preguntas</h5>
                    <h5>Estudiar por categoria</h5>
                    <span>Competidor o individual</span>
                    <h5>Modo estudio controlado</h5>
                    <span>Elige la sub especialidad</span>
                    <h5>Material de estudio</h5>
                    <h5>Un mes de regalo</h5>
                    <Button>ENARM 1 año $2200.00</Button>
                    <OpenModalButton onClick={toggleTermsandConditionsModal}>
                        Terminos y condiciones
                    </OpenModalButton>
                </Cards>
            </CardPlans>
                <Button>Regresar</Button>

                <CustomModal
                open={isOpenConditions}
                onClose={toggleTermsandConditionsModal}
                title={"Terminos y condiciones"}
                message={""}
                />
        </Container>
    )
}
export default paymentPlans;