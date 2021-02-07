import { Link } from "react-router-dom";
import Field from "./Field/Field";

const Form = ({ title, fields, buttons, alternate, onSubmit }) => {
  const submit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={submit}>
      {title}

      {fields.map(({ id, elementType, label, name, onChange, value }) => (
        <Field
          key={id}
          elementType={elementType}
          label={label}
          name={name}
          onChange={(e) => onChange(e.target.value)}
          value={value}
        />
      ))}

      {buttons.map(({ value, id, type }) => (
        <button key={id} type={type}>
          {value}
        </button>
      ))}

      <p>
        {alternate?.description}{" "}
        <Link to={alternate?.link}>{alternate?.linkText}</Link>
      </p>
      <p>&copy; 2020 PressPlay Incorporated</p>
    </form>
  );
};

export default Form;
