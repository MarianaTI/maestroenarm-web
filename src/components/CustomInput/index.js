import React from "react";
import { useController } from "react-hook-form";
import {
  InputStyled,
  LabelStyled,
  InputWrapper,
  IconWrapper,
  ErrorMessage
} from "./index.style";


const CustomInput = ({ error, label, icon, control, name, ...props}) => {
  const {
    field,
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields }
  } = useController({
    name,
    control,
    rules: { required: true },
  });

  return (
    <div>
      <LabelStyled>{label}</LabelStyled>
      <InputWrapper>
        <InputStyled
          fullwidth="true"
          {...props}
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          name={field.name}
          inputRef={field.ref}
        />
        {icon && <IconWrapper>{icon}</IconWrapper>}
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};

export default CustomInput;
