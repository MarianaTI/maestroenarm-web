import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Navbar from "../components/Nab";
import CustomEditField from "../components/EditCustomInput";
import { StyledAvatar, StyledSubmitButton, StyledSubmitButtonContainer, StyledTextContainer } from "../styles/EditProfile.style";
import AvatarComponent from "../components/AvatarEdit";

const EditProfileSchema = yup.object({
  usuario: yup.string().required(),
  nombreCompleto: yup.string().required(),
  sexo: yup.string().required(),
  fechaNacimiento: yup.string().required(),
  especialidad: yup.string().required(),
  subcategoria: yup.string().required(),
  estado: yup.string().required(),
  universidad: yup.string().required(),
}).required();

const EditProfile = () => {
  const { setValue, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(EditProfileSchema)
  });

  const onSubmit = data => console.log(data);
  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit(onSubmit)}>
       <StyledAvatar><AvatarComponent/></StyledAvatar>
        <StyledTextContainer>
          <CustomEditField
            label="Usuario"
            onChange={e => setValue("usuario", e.target.value)}
            error={!!errors.usuario}
            helperText={errors.usuario?.message}
            type="text"
          />
          <CustomEditField
            label="Nombre Completo"
            onChange={e => setValue("nombreCompleto", e.target.value)}
            error={!!errors.nombreCompleto}
            helperText={errors.nombreCompleto?.message}
            type="text"
          />
          <CustomEditField
            label="Fecha de nacimiento"
            onChange={e => setValue("fechaNacimiento", e.target.value)}
            error={!!errors.fechaNacimiento}
            helperText={errors.fechaNacimiento?.message}
            type="date"
          />
        </StyledTextContainer>
        <StyledTextContainer>
          <CustomEditField
            label="Sexo"
            onChange={e => setValue("sexo", e.target.value)}
            error={!!errors.sexo}
            helperText={errors.sexo?.message}
            type="select"
            options={[
              { value: "", label: "Seleccione su opcion" },
              { value: "femenino", label: "Femenino" },
              { value: "masculino", label: "Masculino" }, ,
            ]}
          />
          <CustomEditField
            label="Especialidad"
            onChange={e => setValue("especialidad", e.target.value)}
            error={!!errors.especialidad}
            helperText={errors.especialidad?.message}
            type="select"
            options={[
              { value: "", label: "Seleccione su opcion" },
              { value: "opcion1", label: "Opcion1" },
              { value: "opcion2", label: "Opcion2" }, ,
            ]}
          />
          <CustomEditField
            label="Subcategoria"
            onChange={e => setValue("subcategoria", e.target.value)}
            error={!!errors.subcategoria}
            helperText={errors.subcategoria?.message}
            type="select"
            options={[
              { value: "", label: "Seleccione su opcion" },
              { value: "opcion1", label: "Opcion1" },
              { value: "opcion2", label: "Opcion2" }, ,
            ]}
          />
        </StyledTextContainer>
        <StyledTextContainer>
          <CustomEditField
            label="Estado"
            onChange={e => setValue("estado", e.target.value)}
            error={!!errors.estado}
            helperText={errors.estado?.message}
            type="select"
            options={[
              { value: "", label: "Seleccione su opcion" },
              { value: "opcion1", label: "Opcion1" },
              { value: "opcion2", label: "Opcion2" }, ,
            ]}
          />
          <CustomEditField
            label="Universidad"
            onChange={e => setValue("universidad", e.target.value)}
            error={!!errors.universidad}
            helperText={errors.universidad?.message}
            type="select"
            options={[
              { value: "", label: "Seleccione su opcion" },
              { value: "opcion1", label: "Opcion1" },
              { value: "opcion2", label: "Opcion2" }, ,
            ]}
          />
          <div style={{ gridColumn: "5" }}></div>
          <StyledSubmitButtonContainer>
            <StyledSubmitButton type="submit" value="Guardar" />
          </StyledSubmitButtonContainer>
        </StyledTextContainer> 
      </form>
    </>
  );
};

export default EditProfile;

