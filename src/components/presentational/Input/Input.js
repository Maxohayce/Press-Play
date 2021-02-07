const Input = ({ classes, elementConfig, value, placeholder, onChange }) => (
  <input
    className={classes.InputElement}
    placeholder={placeholder}
    {...elementConfig}
    value={value}
    onChange={onChange}
  />
);

export default Input;
