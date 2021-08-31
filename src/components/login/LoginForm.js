import React, { useState } from "react";
import "./styles.css";
import { Typography } from "@material-ui/core";

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
  const [signup, setSignup] = useState(null);
  const handlebuttonSignup = () => {
    setSignup("Render signup");
  };

  const handlebuttonlogin = () => {
    setSignup(null);
  };
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Todo</h1>
        {/* <h4 className="head2">Log in</h4> */}
        <form>
          {/* <button onClick={signInWithGoogle}>Sign in with google</button> */}
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input1"
            placeholder="Username"
            style={{ backgroundColor: "rgb(255, 255, 255)" }}
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input2"
            placeholder="Password"
            required
          />
          <Typography
            variant="caption"
            style={{
              color: "white",
              display: "flex",
              justifyContent: "flex-end",
              width: "95%",
              marginBottom: "25px",
            }}
          >
            Password should be at least 8 characters long
          </Typography>
          {signup ? (
            <>
              <div align="center">
                <button className="button" type="submit" onClick={handleSignIn}>
                  <span>Sign Up</span>
                </button>
              </div>
              <h3 className="signup1" style={{ color: "#999999" }}>
                Already have an account?{" "}
                <span
                  style={{ cursor: "pointer", color: "white" }}
                  onClick={() => handlebuttonlogin()}
                >
                  Log In
                </span>
              </h3>
            </>
          ) : (
            <>
              <div align="center">
                <button className="button" type="submit" onClick={handleLogin}>
                  <span>Log In</span>
                </button>
              </div>
              <h3 className="signup1" style={{ color: "#999999" }}>
                New to To-do?{" "}
                <span
                  style={{ cursor: "pointer", color: "white" }}
                  onClick={() => handlebuttonSignup()}
                >
                  Sign Up
                </span>
              </h3>
            </>
          )}
        </form>

        {/* {signup ? <Signup /> : <></>} */}
        {/* <h1 style={{ color: "red" }}>{error}</h1> */}
      </div>
    </div>
  );
};

export default LoginForm;
