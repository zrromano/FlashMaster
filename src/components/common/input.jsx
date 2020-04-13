import React from "react";
import "../../form.css";

const Input = ({ name, label, colSize, smalltext, error, ...rest }) => {
  const classes = "form-group" + (colSize ? ` col-${colSize}` : "");
  return (
    <div className={classes}>
      <label htmlFor={name}>{label}: </label>
      <input autoFocus id={name} name={name} {...rest} className="input" />
      {{ smalltext } && (
        <small id="smallText" className="smalltext">
          {smalltext}
        </small>
      )}
      {error && (
        <small id={`${name}Error`} className="errortext">
          {error}
        </small>
      )}
    </div>
  );
};

export default Input;
