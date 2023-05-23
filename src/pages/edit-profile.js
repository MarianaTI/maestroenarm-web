import Navigation from "../components/Nabvar"
import styles from "../styles/EditProfile.module.css"
import AvatarComponent from "../components/Avatar";
import ButtomComponent from "../components/Buttom";
import Card from "./app-statistics";

const AjustesPerfil = () => {
  return (
    <>
      <Navigation />
      <form className={styles.form}>
        <div className={styles.avatarRow}>
          <AvatarComponent />
        </div>
        <div className={styles.row}>
          <div className={styles.inputContainer}>
            <label className={styles.label}>Usuario</label>
            <input type="text" className={styles.input} />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label}>Nombre Completo</label>
            <input type="text" className={styles.input} />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label}>Fecha de nacimiento</label>
            <input type="Date" className={styles.input} />
          </div>
        </div>
        <div className={styles.secondRow}>
          <div className={styles.inputContainer}>
            <label className={styles.label}>Sexo</label>
            <select className={styles.input}>
              <option value="">Selecciona una opción</option>
            </select>
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label}>Especialidad</label>
            <select className={styles.input}>
              <option value="">Selecciona una opción</option>
            </select>
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label}>subcategoria</label>
            <select className={styles.input}>
              <option value="">Selecciona una opción</option>
            </select>
          </div>
        </div>
        <div className={styles.thirdRow}>
          <div className={styles.inputContainer}>
            <label className={styles.label}>Estado</label>
            <select className={styles.input}>
            </select>
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label}>Universidad</label>
            <select className={styles.input}>
              <option value="">Selecciona una opción</option>
            </select>
          </div>
        </div>
        <ButtomComponent/>
      </form> 
    </>
  )
}
export default AjustesPerfil;