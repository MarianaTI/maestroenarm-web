import React, { useState } from 'react';
import {ButtonClik, ContainerCheck, TextCheckbox, InputCheck, Container} from "./index.style";

const CheckboxComponent = ({speciality, subspeciality}) => {
  const [showCheckboxes, setShowCheckboxes] = useState(false);

  const handleButtonClick = () => {
    setShowCheckboxes(!showCheckboxes);
  };

  return (
    <Container>
      <ButtonClik onClick={handleButtonClick}>{speciality}</ButtonClik>
      {showCheckboxes && (
        <ContainerCheck>
            <InputCheck type="checkbox" id="checkbox1" />
            <TextCheckbox>{subspeciality}</TextCheckbox>
        </ContainerCheck>
      )}
    </Container>
  );
};

export default CheckboxComponent;
