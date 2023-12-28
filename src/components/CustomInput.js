import React, { useState } from "react";

const CustomInput = ({ type, name, placeholder, classname, onInputChange }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`form-control ${classname}`}
        onChange={(e) => onInputChange(name, e.target.value)}
      />
    </div>
  );
};

export default CustomInput;
