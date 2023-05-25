import React from "react";
import styles from "../styles/demo.module.css";
import { Button } from "@mui/material";

const Bienvenido = () => {
  return (
    <div  id={styles.contenedorCentrado}>
      <h1 className={styles.bienvenido}>Bienvenido a Maestro ENARM</h1>
      <div className={styles.imagenDoctor} />
      <button className={styles.boton}>
      <span>Jugar Demo</span>
      </button>
      <p className={styles.saltarDemo}>Desea saltar la DEMO?  <a href="#">Saltar</a> </p>
    </div>
  );
};

export default Bienvenido;
