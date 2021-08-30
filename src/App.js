import React, { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";
import { Landing, Nav, TodoPage, LoginForm } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { auth, db } from "./base";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    signInWithEmailAndPassword(auth, email, password).catch((err) => {
      switch (err.code) {
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
      }
    });
    try {
      localStorage.setItem("username", email);
      localStorage.setItem("password", password);

      window.location.reload();
      setError("");
    } catch (err) {
      setError("Oops, incorrect credentials.");
    }
  };

  const handleSignIn = (e) => {
    clearErrors();
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("yaay");
      })
      .catch((err) => {
        console.log(err.message, "error");
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/email-already-in-use":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
    try {
      localStorage.setItem("username", email);
      localStorage.setItem("password", password);

      window.location.reload();
      setError("");
    } catch (err) {
      setError("Oops, incorrect credentials.");
    }
  };

  const logout = () => {
    auth.signOut();
    try {
      localStorage.setItem("username", "");
      localStorage.setItem("password", "");

      window.location.reload();
      setError("");
    } catch (err) {
      setError("Oops, incorrect credentials.");
    }
  };

  const authListener = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  console.log(user.uid);

  useEffect(() => {
    authListener();
  }, []);

  if (!localStorage.getItem("username"))
    return (
      <LoginForm
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignIn={handleSignIn}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
      />
    );
  return (
    <RecoilRoot>
      <Router>
        <div style={{ backgroundColor: "#000", minHeight: "100vh" }}>
          <Nav logout={logout} />
          {/* <LoginForm email={email} password={password} setEmail={setEmail} setPassword={setPassword} handleLogin={handleLogin} handleSignIn={handleSignIn} hasAccount={hasAccount} setHasAccount={setHasAccount} emailError={emailError} passwordError={passwordError} /> */}
          <Switch>
            <PrivateRoute exact path="/" component={Landing} />
            <PrivateRoute exact path="/todo" component={TodoPage} />
            <Route exact path="/login" component={LoginForm} />
          </Switch>
        </div>
      </Router>
    </RecoilRoot>
  );
};

export default App;
