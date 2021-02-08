import { Component } from "react";
import { Link } from "react-router-dom";
import { isValid } from "../../../assets/data/validate";
import Field from "./Field/Field";

class Form extends Component {
  state = {
    fieldInputs: {},
  };

  submit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.fieldInputs);
  };

  validate = (name, value) =>
    this.setState((state) => ({
      ...state,
      fieldInputs: {
        ...state.fieldInputs,
        [name]: {
          ...state.fieldInputs[name],
          isValid: isValid(name, value),
        },
      },
    }));

  onChange = (e, name) =>
    this.setState(
      (state) => ({
        ...state,
        fieldInputs: {
          ...state.fieldInputs,
          [name]: {
            ...state.fieldInputs[name],
            value: e.target.value,
          },
        },
      }),
      () => this.props.shouldValidate && this.validate(name, e.target.value)
    );

  render = () => {
    const { title, fields, buttons, alternate } = this.props;
    const { fieldInputs } = this.state;
    const formHasError =
      Object.values(this.state.fieldInputs)
        .map(({ isValid }) => isValid)
        .filter((i) => i === false).length > 0;
    const formIsComplete = Object.values(this.state.fieldInputs)
    .map(({ value }) => value).length === fields.length

    return (
      <form onSubmit={this.submit}>
        {title}

        {fields.map(({ id, elementType, label, name }) => (
          <Field
            key={id}
            elementType={elementType}
            label={label}
            name={name}
            onChange={(e) => this.onChange(e, name)}
            value={fieldInputs[name]?.value}
            isValid={fieldInputs[name]?.isValid}
          />
        ))}

        {buttons.map(
          ({ value, id, type }) =>
            ((type === "submit" && !formHasError && formIsComplete) || type !== "submit") && (
              <button key={id} type={type}>
                {value}
              </button>
            )
        )}

        <p>
          {alternate?.description}{" "}
          <Link to={alternate?.link}>{alternate?.linkText}</Link>
        </p>
        <p>&copy; 2020 PressPlay Incorporated</p>
      </form>
    );
  };
}

export default Form;
