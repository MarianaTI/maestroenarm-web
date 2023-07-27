import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from "react-redux";
import { CustomButton } from '../CustomButton';
import CheckBoxButton from "../CheckBoxButton";
import { clinicalCases } from "../../constants";
import { setAddSpecialityAndSubspeciality } from "../../store/slices/menuCheckBoxSlice";
import { 
ModalBody, 
RangeContainer, 
CloseIconStyle, 
SpecialityContainer, 
SpecialityText,
SubSpecialityText,
SubSpecialityContainer,
SubSpecialityCheckbox
} from './index.style';


export const GameSettingsModal = ({ isOpen, closedModal }) => {

    const specialityAndSubspeciality = useSelector((state) => state.checkBoxMenu.specialityAndSubspeciality);
    const [isChecked, setIsChecked] = useState(false);
    const [dataLoaded, setDataLoaded] = useState(false);
    
    const dispatch = useDispatch();

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const [selectedSpeciality, setSelectedSpeciality] = useState(null);

    const handleSpecialityClick = (speciality) => {
        setSelectedSpeciality(speciality);
      };

    useEffect(() => {

        const especialidadesUnicas = new Set();
        const subEspecialidadesUnicas = new Set();

        for (const index in clinicalCases) {
            const caso = clinicalCases[index];
            especialidadesUnicas.add(caso.speciality);
            subEspecialidadesUnicas.add(caso.subSpeciality);
        }
        dispatch(setAddSpecialityAndSubspeciality({ especialidadesUnicas, subEspecialidadesUnicas }));
        setDataLoaded(true);
    }, [dispatch]);

    

    return (
        <Modal
            open={isOpen}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            closeModal={closedModal}
        >
            <ModalBody>
                <CloseIconStyle onClick={closedModal} />
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Por categoría
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Selecciona el número de casos que desea responder y tiempo deseado
                </Typography>
                <RangeContainer>
                    <label>Casos:
                        <input type='range' />
                    </label>
                    <label>Tiempo: 5 min
                        <input type='range' />
                    </label>
                    {dataLoaded ? ( 
                        <SpecialityContainer>
                            {Array.from(specialityAndSubspeciality[0].especialidadesUnicas).map(
                                (especialidad, especialidadIndex) => (
                                    <SpecialityText key={especialidadIndex} onClick={()=> handleSpecialityClick(especialidad)}
                                >{especialidad}</SpecialityText>
                                )
                            )}
                                {selectedSpeciality && (
                                <SubSpecialityContainer>
                                    {Array.from(specialityAndSubspeciality[0].subEspecialidadesUnicas).filter((subespecialidad) =>
                                    subespecialidad.startsWith(selectedSpeciality)
                                    )
                                        .map((subespecialidad, subespecialidadIndex) => (
                                    <CheckBoxButton
                                    key={subespecialidadIndex}
                                    subSpeciality={subespecialidad}
                                    />
                                ))}
                            </SubSpecialityContainer>
                            )}
                        </SpecialityContainer>
                    ) : (
                        <div>Loading...</div>
                    )}
                    {/* <CheckBoxButton
                        checked={isChecked}
                        onChange={handleCheckboxChange} /> */}
                    <CustomButton text='Continuar' theme="primary" onClick={closedModal} />
                </RangeContainer>
            </ModalBody>
        </Modal>
    );
}
