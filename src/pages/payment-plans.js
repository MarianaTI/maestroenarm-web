import {
    Container, 
    CardPlans, 
    Cards, 
    OpenModalButton, 
    ButtonContainer, 
    ReturnButtonContainer
} from "../styles/paymentplans.style";
import CustomModal from "../components/CustomModal";
import  { CustomButton } from "../components/CustomButton";
import React, { useState } from "react";
import CheckIcon from '@mui/icons-material/Check';
import Link from "next/link";

const PaymentPlans = () => {

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
                    <h5><CheckIcon />Modo práctica aleatorio</h5>
                    <span>Por tiempo o número de casos</span>
                    <h5><CheckIcon />+2400 preguntas</h5>
                    <h5><CheckIcon />Estudiar por categoria</h5>
                    <span>Competidor o individual</span>
                    <h5><CheckIcon />Modo estudio controlado</h5>
                    <span>Elige la sub especialidad</span>
                    <h5><CheckIcon />Material de estudio</h5>
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
                    <h5><CheckIcon />Modo práctica aleatorio</h5>
                    <span>Por tiempo o número de casos</span>
                    <h5><CheckIcon />+2400 preguntas</h5>
                    <h5><CheckIcon />Estudiar por categoria</h5>
                    <span>Competidor o individual</span>
                    <h5><CheckIcon />Modo estudio controlado</h5>
                    <span>Elige la sub especialidad</span>
                    <h5><CheckIcon />Material de estudio</h5>
                    <h5><CheckIcon />Un mes de regalo</h5>
                    <ButtonContainer>
                       <CustomButton text="ENARM 1 año $2200.00" type="submit"/>
                        <OpenModalButton onClick={toggleTermsandConditionsModal}>
                            Terminos y condiciones
                        </OpenModalButton> 
                    </ButtonContainer>
                </Cards>
            </CardPlans>
            <ReturnButtonContainer>
                <Link href="/home">
                    <CustomButton text="Regresar" type="submit"/> 
                </Link>
            </ReturnButtonContainer>

                <CustomModal
                open={isOpenConditions}
                onClose={toggleTermsandConditionsModal}
                title={"Terminos y condiciones"}
                message={"Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etesse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "}
                />
        </Container>
    )
}
export default PaymentPlans;