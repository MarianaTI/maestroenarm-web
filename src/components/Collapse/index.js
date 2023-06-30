import React, { useState } from 'react';
import { Collapse } from '@material-ui/core';
import { Container, Typography, ClosedCollapse } from './index.style';

const CollapseComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container >
      <ClosedCollapse onClick={handleToggle}>
        <div>ERNAM</div>
        <div>{isOpen ? "" : "Ver más..."}</div>
      </ClosedCollapse>

      <Collapse in={isOpen}>
        <Typography >
          "case": "Un paciente de 55 años acude a la consulta con dolor abdominal intenso y fiebre. Después de realizar un examen físico y pruebas de laboratorio, se diagnostica una apendicitis aguda. Como cirujano general, debes determinar el tratamiento más adecuado para esta condición y brindar las recomendaciones correspondientes."
          SOY UNA pregunta
          MACARENA
          TENGO HAMBRE
        </Typography>
      </Collapse>
    </Container>
  );
};

export default CollapseComponent;
