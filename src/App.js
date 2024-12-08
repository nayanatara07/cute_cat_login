import React from "react";
import LoginForm from "./components/Form";

function App() {
  const handleLogin = () => {
    alert("Login button clicked!");
  };

  const handleReset = () => {
    alert("Reset Password button clicked!");
  };

  const fields = [
    { label: "Email", type: "email", id: "email" },
    { label: "Password", type: "password", id: "password" },
    { label: "Username", type: "text", id: "username" }, 
  ];

  const buttons = [
    { label: "Log in", type: "submit", onClick: handleLogin },
    { label: "Reset Password", type: "button", onClick: handleReset, color: "#ff8a80" },
  ];

  return (
    <div>
      <LoginForm fields={fields} buttons={buttons} />
    </div>
  );
}

export default App;
