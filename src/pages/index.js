import React from "react";
import styles from "../styles/Home.module.css";
import { ContainerBienvenido, ImagenInicioDemo, InformationContainer, WelcomeTitle } from "../styles/demo.style";

const Bienvenido = () => {
  return (
    <ContainerBienvenido>
      <ImagenInicioDemo src="./iniciodemo.svg" width={550} height={550} />

      <InformationContainer>
        <WelcomeTitle>Bienvenido a Maestro ENARM</WelcomeTitle>
        <span>"¡Juega, compite y aprende en nuestra página:
          el lugar donde la preparación para el examen
          de ERNAM se vuelve divertida y accesible, con
          recursos de estudio incluidos!"</span>
        <a className={styles.boton} href="/demo">
          <span>Jugar Demo</span>
        </a>
        <p className={styles.saltarDemo}>
          Desea saltar la DEMO? <a href="/sesion"> Saltar</a>
        </p>
      </InformationContainer>
    </ContainerBienvenido>


  );
};

export default Bienvenido;
