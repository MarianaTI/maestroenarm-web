import React, { useState } from 'react';
import {ButtonClik, ContainerCheck, TextCheckbox, InputCheck, Container} from "./index.style";

const CheckboxComponent = ({ label, checked, onChange }) => {
  return (
    <Container>
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} />
        {label}
      </label>
    </Container>
  );
};

export default CheckboxComponent;

