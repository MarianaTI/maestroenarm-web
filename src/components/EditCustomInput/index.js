import { ErrorMessage, InputWrapper, StyledInput, StyledLabel, StyledSelect } from "./index.style";

const CustomEditField = ({ label, onChange, value, error, helperText, type, options, ...props }) => {
  const isSelect = type === "select";
  const isDate = type === "date";

  const renderInput = () => {
    if (isSelect) {
      return (
        <StyledSelect onChange={onChange} value={value} error={error} {...props}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
      );
    } else if (isDate) {
      return (
        <StyledInput type="date" onChange={onChange} value={value} aria-label={label} error={error} {...props} />
      );
    } else {
      return (
        <StyledInput onChange={onChange} value={value} aria-label={label} error={error} {...props} />
      );
    }
  };

  return (
    <InputWrapper>
      <StyledLabel>{label}</StyledLabel>
      {renderInput()}
      {error && <ErrorMessage>{helperText}</ErrorMessage>}
    </InputWrapper>
  );
};

export default CustomEditField;
