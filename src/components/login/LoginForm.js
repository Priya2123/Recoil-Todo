import React, { useState, useEffect } from "react";
import "./styles.css";
import fire from "../../base";

const LoginForm = (props) => {
  const {
    email,
    password,
    setEmail,
    setPassword,
    handleLogin,
    handleSignIn,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    signInWithGoogle,
  } = props;

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     localStorage.setItem("username", email);
  //     localStorage.setItem("password", password);

  //     window.location.reload();
  //     setError("");
  //   } catch (err) {
  //     setError("Oops, incorrect credentials.");
  //   }
  // };
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Todo</h1>
        <form>
          {/* <button onClick={signInWithGoogle}>Sign in with google</button> */}
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            placeholder="Username"
            style={{ backgroundColor: "rgb(255, 255, 255)" }}
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button className="button" type="submit" onClick={handleLogin}>
              <span>Start Kaam</span>
            </button>
          </div>
        </form>
        {/* <h1 style={{ color: "red" }}>{error}</h1> */}
      </div>
    </div>
  );
};

export default LoginForm;
