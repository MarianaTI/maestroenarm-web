import React from "react";
import styles from "../Buttom/buttom.module.css";

const ButtomComponent = () => {
    return (
        <>
            <button className={styles.boton}>
                <span className={styles.span}>Guardar</span>
            </button>
        </>
    );
};

export default ButtomComponent;