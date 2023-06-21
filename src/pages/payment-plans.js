import {Container, CardPlans, Cards, OpenModalButton, ButtonContainer} from "../styles/paymentplans.style";
import CustomModal from "../components/CustomModal";
import  { CustomButton } from "../components/CustomButton";
import React, { useState } from "react";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';



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
                    <h5><CheckCircleOutlineIcon />Modo práctica aleatorio</h5>
                    <span>Por tiempo o número de casos</span>
                    <h5><CheckCircleOutlineIcon />+2400 preguntas</h5>
                    <h5><CheckCircleOutlineIcon />Estudiar por categoria</h5>
                    <span>Competidor o individual</span>
                    <h5><CheckCircleOutlineIcon />Modo estudio controlado</h5>
                    <span>Elige la sub especialidad</span>
                    <h5><CheckCircleOutlineIcon />Material de estudio</h5>
                    <ButtonContainer>
                        <CustomButton text="ENARM 1 mes $200.00" type="submit"/>
                        <OpenModalButton onClick={toggleTermsandConditionsModal}>
                            Terminos y condiciones
                        </OpenModalButton>
                    </ButtonContainer>
                </Cards>
                <Cards>
                    <h1>Anual</h1>
                    <hr/>
                    <h5><CheckCircleOutlineIcon />Modo práctica aleatorio</h5>
                    <span>Por tiempo o número de casos</span>
                    <h5><CheckCircleOutlineIcon />+2400 preguntas</h5>
                    <h5>Estudiar por categoria</h5>
                    <span>Competidor o individual</span>
                    <h5><CheckCircleOutlineIcon />Modo estudio controlado</h5>
                    <span>Elige la sub especialidad</span>
                    <h5><CheckCircleOutlineIcon />Material de estudio</h5>
                    <h5><CheckCircleOutlineIcon />Un mes de regalo</h5>
                    <ButtonContainer>
                       <CustomButton text="ENARM 1 año $2200.00" type="submit"/>
                        <OpenModalButton onClick={toggleTermsandConditionsModal}>
                            Terminos y condiciones
                        </OpenModalButton> 
                    </ButtonContainer>
                </Cards>
            </CardPlans>
            <CustomButton text="Regresar" type="submit"/>

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