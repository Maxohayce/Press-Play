const Input = ({ isValid, elementConfig, value, placeholder, onChange }) => (
  <input
    className={`form-input ${
      isValid === false && value && "border border-danger"
    }`}
    placeholder={placeholder}
    {...elementConfig}
    value={value}
    onChange={onChange}
  />
);

export default Input;
