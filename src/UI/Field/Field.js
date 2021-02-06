import React from "react";
import Input from "../../components/Input/Input";

import classes from "./Field.css";

const Field = ({name, elementType, elementConfig, value, label}) => {
  let inputElement = null;
  let placeholder=`Enter your ${name}`;

  switch (elementType) {
    case "textarea":
      inputElement = (
        <textarea
          className={classes.InputElement}
          {...elementConfig}
          value={value}
        />
      );
      break;
    default:
      inputElement = (
        <Input
          classes={classes}
          elementConfig={elementConfig}
          value={value}
          placeholder={placeholder}
        />
      );
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label} >{label}</label>
      {inputElement}
    </div>
  );
};

export default Field;
