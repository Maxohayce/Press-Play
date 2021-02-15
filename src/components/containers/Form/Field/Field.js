import Input from "../../../presentational/Input/Input";

import "./Field.css";

const Field = ({
  name,
  elementType,
  elementConfig,
  value,
  label,
  onChange,
  isValid,
  placeholder,
}) => {
  let inputElement = null;
  placeholder = placeholder || `Enter your ${name}`;

  switch (elementType) {
    case "textarea":
      inputElement = (
        <textarea className="InputElement" {...elementConfig} value={value} />
      );
      break;
    default:
      inputElement = (
        <Input
          elementConfig={elementConfig}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          isValid={isValid}
        />
      );
  }
  return (
    <div className="form-field">
      <label className="form-label">{label}</label>
      {inputElement}
      {isValid === false && value && (
        <span className="form-error">{`Invalid ${name}`}</span>
      )}
    </div>
  );
};

export default Field;
