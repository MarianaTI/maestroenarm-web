import React from "react";
import Link from "next/link";
import { CustomButton } from "../components/CustomButton";
import {
  ContainerBienvenido,
  ImagenInicioDemo,
  InformationContainer,
  WelcomeTitle,
  BOOMPharase,
  Button,
  SaltarDemo
} from "../styles/demo.style";

const Bienvenido = () => {
  return (
    <ContainerBienvenido>
      <ImagenInicioDemo src="./iniciodemo.svg" width={500} height={500} />
        <InformationContainer>
          <WelcomeTitle>Bienvenido a Maestro ENARM</WelcomeTitle>
          <BOOMPharase>"¡Juega, compite y aprende en nuestra página:
            el lugar donde la preparación para el examen
            de ERNAM se vuelve divertida y accesible, con
            recursos de estudio incluidos!"</BOOMPharase>
          <Button>
              <Link href="/demo">
               <CustomButton text="Jugar Demo" fullWidth size="large"/>  
              </Link>
          </Button>
          <SaltarDemo>
            Desea saltar la DEMO? <Link href="/sesion"> Saltar</Link>
          </SaltarDemo>
        </InformationContainer>
    </ContainerBienvenido>
  );
};


export default Bienvenido;
