// components/Form.js
import React, { useState } from "react";
import Avatar from "./Avatar";
import InputGroup from "./InputGroup";

const Form = () => {
  const [isTyping, setIsTyping] = useState(false);

  return (
    <form>
      <Avatar isTyping={isTyping} />
      <InputGroup
        label="Email"
        type="text"
        id="email"
        onFocus={() => setIsTyping(false)}
        onBlur={() => setIsTyping(false)}
      />
      <InputGroup
        label="Password"
        type="password"
        id="password"
        onFocus={() => setIsTyping(true)}
        onBlur={() => setIsTyping(false)}
      />
      <div className="inputGroup">
        <button type="submit">Log in</button>
      </div>
    </form>
  );
};

export default Form;
