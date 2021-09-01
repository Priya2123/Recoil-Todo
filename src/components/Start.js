import React, { useState } from "react";
import LoginForm from "./login/LoginForm";

const Start = () => {
  const [local, setLocal] = useState(false);
  if (!localStorage.getItem("username")) {
    setLocal(!local);
  }
  return <>{local ? <LoginForm /> : <></>}</>;
};

export default Start;
