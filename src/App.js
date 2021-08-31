import React, { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";
import { Landing, Nav, TodoPage, LoginForm, Signup } from "./components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { auth, db } from "./base";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Alert } from "@material-ui/core";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  let history = useHistory();

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = (e) => {
    clearErrors();
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("username", user.email);
        // localStorage.setItem("password", user.password);
        console.log(user, "user");
        window.location = "/landing";
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
          case "auth/weak-password":
            setEmailError(err.message);
            <Alert severity="error">
              This is an error alert — check it out!
            </Alert>;
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            <Alert severity="error">
              This is an error alert — check it out!
            </Alert>;
            break;
          default:
            setEmailError(err.message);
            <Alert severity="error">
              This is an error alert — check it out!
            </Alert>;
        }
      });
    try {
      // window.location.reload();
      setError("");
    } catch (err) {
      setError("Oops, incorrect credentials.");
    }
  };

  const handleSignIn = (e) => {
    clearErrors();
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("username", user.email);
        // localStorage.setItem("password", user.password);
        console.log(user, "user");
        window.location = "/landing";
      })
      .catch((err) => {
        console.log(err.message, "error");
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/email-already-in-use":
            setEmailError(err.message);
            alert("Noob!!!!");
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            alert("Noob!!!!");
            break;
          default:
            setEmailError(err.message);
            alert("Noob!!!!");
        }
      });
    try {
      // window.location.reload();
      setError("");
    } catch (err) {
      setError("Oops, incorrect credentials.");
    }
  };

  const logout = () => {
    auth.signOut();
    try {
      localStorage.clear();

      // window.location.reload();
      setError("");
    } catch (err) {
      setError("Oops, incorrect credentials.");
    }
  };

  const authListener = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        console.log(user, "userrrr");
        setUser(user);
        localStorage.setItem("userUid", user.uid);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  // !!! Remove this and separate this to a different component
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
            <PrivateRoute exact path="/landing" component={Landing} />
            <PrivateRoute exact path="/todo" component={TodoPage} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </div>
      </Router>
    </RecoilRoot>
  );
};

export default App;
