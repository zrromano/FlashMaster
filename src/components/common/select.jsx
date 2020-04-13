import React from "react";
import "../../form.css";

const Select = ({
  name,
  label,
  colSize,
  options,
  smalltext,
  error,
  ...rest
}) => {
  const classes = "form-group" + (colSize ? ` col-${colSize}` : "");
  return (
    <div className={classes}>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...rest} className="dropdown">
        <option value="" />
        {options.map(option => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
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

export default Select;
