import React, { useState } from "react";
import Avatar from "./Avatar"; 
import "../App.css";

const LoginForm = ({ fields, buttons }) => {
  const [isTyping, setIsTyping] = useState(false);

  const handleFocus = (type) => {
    setIsTyping(type === "password");
  };

  return (
    <form>
      <Avatar isTyping={isTyping} />
      {fields.map((field, index) => (
        <div className={`inputGroup ${field.id}`} key={index}>
          <label htmlFor={field.id}>{field.label}</label>
          <input
            type={field.type}
            id={field.id}
            onFocus={() => handleFocus(field.type)}
            onBlur={() => handleFocus("")}
            onChange={field.onChange}
          />
        </div>
      ))}
      <div className="inputGroup">
        {buttons.map((button, index) => (
          <button
            key={index}
            type={button.type}
            onClick={button.onClick}
            style={{ backgroundColor: button.color || "#4eb8dd" }}
          >
            {button.label}
          </button>
        ))}
      </div>
    </form>
  );
};

export default LoginForm;
