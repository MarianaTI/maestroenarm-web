import {SelectStyle} from "./index.styles"
import React from 'react';

const Select = ({option}) => {
    return(
        <SelectStyle>
            <option value="option1"></option>
            <option value="option2">{option}</option>
        </SelectStyle>
    );
};
export default Select;