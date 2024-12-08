// components/InputGroup.js
import React from "react";

const InputGroup = ({ label, type, id, onFocus, onBlur }) => {
  return (
    <div className={`inputGroup ${id}`}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} onFocus={onFocus} onBlur={onBlur} />
    </div>
  );
};

export default InputGroup;
