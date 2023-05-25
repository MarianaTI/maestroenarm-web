import {ImageStyle, CardStyle, Button, FormStyle, EditProfile} from "../../src/styles/editprofile.style";
import Avatar from "../components/Avatar";
import CustomInput from "../components/CustomInput";
import SelectStyle from "../components/Select";

const editProfile = () => {

    return( 
    <EditProfile>
        <CardStyle>
        <h1>Editar perfil</h1>
            <Avatar/>
            <FormStyle>
                <span>Usuario</span>
                <CustomInput/>
                <span>Nombre y Apellido</span>
                <CustomInput/>
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
        </CardStyle>
    </EditProfile>
    )
}

export default editProfile;