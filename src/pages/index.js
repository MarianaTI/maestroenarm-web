import React from "react";
import styles from "../styles/Home.module.css";

const Bienvenido = () => {
  return (
    <div className={styles.contenedorCentrado}>
      <h1 className={styles.bienvenido}>Bienvenido a Maestro ENARM</h1>
      <div className={styles.imagenDoctor} />
      <a className={styles.boton} href="/demo">
        <span>Jugar Demo</span>
      </a>
      <p className={styles.saltarDemo}>
        Desea saltar la DEMO? <a href="/sesion">Saltar</a>{" "}
      </p>
    </div>
  );
};

export default Bienvenido;
