import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useSelector } from "react-redux";
import { CustomButton } from '../CustomButton';
import CheckBoxButton from "../CheckBoxButton";

import { ModalBody, RangeContainer } from './index.style';

export const GameSettingsModal = ({ isOpen, closeModal }) => {

    const specialityList = [];
    const subSpecialityList = [];
    const specialityAndSubspeciality = useSelector((state) => state.checkBoxMenu.specialityAndSubspeciality);
    console.log(specialityAndSubspeciality);
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    specialityAndSubspeciality.forEach((item) => {

        if(!specialityList.includes(item.speciality)){
            specialityList.push(item.speciality)
        }

        if(!subSpecialityList.includes(item.subSpeciality)){
            subSpecialityList.push(item.subSpeciality)
        }
    });
    
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
                    {specialityList.map((speciality, index) => (
                        <div key={index}> 
                            <span>speciality: {speciality} </span>
                            <span>subspeciality: {subSpecialityList[index]}</span>
                        </div>
                    ))};
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
