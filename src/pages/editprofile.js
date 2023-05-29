import {ImageStyle, CardStyle, Button, FormStyle, EditProfile} from "../../src/styles/editprofile.style";
import Avatar from "../components/Avatar";
import CustomInput1 from "../components/CustomInput1";
import SelectStyle from "../components/Select";
import CustomButton from "../components/CustomButton";

const editProfile = () => {

    return( 
    <EditProfile>
        <CardStyle>
        <h1>Editar perfil</h1>
            <Avatar/>
            <FormStyle>
                <span>Usuario</span>
                <CustomInput1/>
                <span>Nombre y Apellido</span>
                <CustomInput1/>
                <span>Especialidad</span>
                <SelectStyle
                option={"Pediatría"}/>
                <span>Estados</span>
                <SelectStyle
                option={"Yucatán"}/>
                <span>Nivel Educacional</span>
                <SelectStyle 
                option={"Estudiante"}/>
            </FormStyle>
           <CustomButton/>
        </CardStyle>
    </EditProfile>
    )
}

export default editProfile;