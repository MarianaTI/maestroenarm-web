import Image from "next/image";
import styles from "../styles/Register.module.css"

import img from "../../public/images/registerphoto2.svg";

import { Container } from "semantic-ui-react";
const register2 = () => {
    return (
     <Container>
            <div className={styles.containerRegister}>
                <div className={styles.image}>
                    <Image src={img}/>
                </div>
                <div className={styles.formContainer}>
                    <form action="">
                        <div className={styles.header}>
                            <h1>Registro</h1>
                            <h3>¡Bienvenido! Ingresa tus datos</h3>
                        </div>
                        <div className={styles.form}>
                            <label for="">Nombre</label>
                            <input type="text"/>
                        </div>
                        <div className={styles.form}>
                            <label>Apellido</label>
                            <input type="text"/>
                        </div>
                        <div className={styles.form}>
                            <label>Correo electronico</label>
                            <input type="email"/>
                        </div>
                        <div className={styles.form}>
                            <label>Contraseña</label>
                            <input type="password"/>
                        </div>
                        <div className={styles.form}>
                            <label>Confirmar contraseña</label>
                            <input type="password"/>
                        </div>
                        <div className={styles.button}>
                            <a type="submit" href="#">Crear</a><br/>
                            <span>Ya tienes cuenta? <a href="#">Iniciar sesión</a></span>
                        </div>
                    </form>
                </div>
            </div>
     </Container>
    );
};

export default register2; 