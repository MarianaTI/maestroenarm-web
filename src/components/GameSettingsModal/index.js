import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from "react-redux";
import { CustomButton } from '../CustomButton';
import CheckBoxButton from "../CheckBoxButton";
import { clinicalCases } from "../../constants";
import { setAddSpecialityAndSubspeciality } from "../../store/slices/menuCheckBoxSlice";
import { ModalBody, RangeContainer } from './index.style';

export const GameSettingsModal = ({ isOpen, closeModal }) => {

    const specialityAndSubspeciality = useSelector((state) => state.checkBoxMenu.specialityAndSubspeciality);
    const [isChecked, setIsChecked] = useState(false);
    const [dataLoaded, setDataLoaded] = useState(false);

    const dispatch = useDispatch();

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
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
        >
            <ModalBody>
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
                        <div>
                            <span>-Especialidades: </span>
                            {Array.from(specialityAndSubspeciality[0].especialidadesUnicas).map(
                                (especialidad, especialidadIndex) => (
                                    <span key={especialidadIndex}>{especialidad}</span>
                                )
                            )}

                            <span>-Subespecialidades: </span>
                            {Array.from(specialityAndSubspeciality[0].subEspecialidadesUnicas).map(
                                (subespecialidad, subespecialidadIndex) => (
                                    <span key={subespecialidadIndex}>{subespecialidad}</span>
                                )
                            )}
                        </div>
                    ) : (
                        <div>Loading...</div>
                    )}
                    <CheckBoxButton
                        label="Check me"
                        checked={isChecked}
                        onChange={handleCheckboxChange} />
                    <CustomButton text='continuar' theme="primary" onClick={closeModal} />
                </RangeContainer>
            </ModalBody>
        </Modal>
    );
}
