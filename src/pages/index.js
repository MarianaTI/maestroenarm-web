import React from "react";
import styles from "../styles/Home.module.css";
import { ImagenDoctor } from "../styles/demo.style";

const Bienvenido = () => {
  return (
    <div className={styles.contenedorCentrado}>
      <h1 className={styles.bienvenido}>Bienvenido a Maestro ENARM</h1>
      <ImagenDoctor src="./doctor.svg" width={222} height={222}/>
            <a className={styles.boton} href="/demo">
        <span>Jugar Demo</span>
      </a>
      <p className={styles.saltarDemo}>
        Desea saltar la DEMO? <a href="/sesion"> Saltar</a>
      </p>
    </div>
  );
};

export default Bienvenido;
