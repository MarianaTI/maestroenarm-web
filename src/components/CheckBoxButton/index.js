import React, { useState } from 'react';
import {ButtonClik, ContainerCheck, TextCheckbox, InputCheck, Container} from "./index.style";

// const CheckboxComponent = () => {
//   const [showCheckboxes, setShowCheckboxes] = useState(false);

//   const handleButtonClick = () => {
//     setShowCheckboxes(!showCheckboxes);
//   };

//   return (
//     <Container>
//       <ButtonClik onClick={handleButtonClick}>speciality</ButtonClik>
//       {showCheckboxes && (
//         <ContainerCheck>
//             <InputCheck type="checkbox" id="checkbox1" />
//             <TextCheckbox>subspeciality</TextCheckbox>
//         </ContainerCheck>
//       )}
//     </Container>
//   );
// };

// export default CheckboxComponent;

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

