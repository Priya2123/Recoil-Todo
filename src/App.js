import React, { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";
import {
  Landing,
  Nav,
  TodoPage,
  LoginForm,
  Signup,
  Profile,
} from "./components";
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
import { ThemeProvider } from "styled-components";
import useTheme from "./useTheme";
import { StyledAppDiv } from "./toggle/StyledComponents";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  let history = useHistory();
  const theme = useTheme();

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
        window.location = "/";
        // window.location.reload();
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
          case "auth/weak-password":
            setEmailError(err.message);
            alert(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            alert(err.message);
            break;
          default:
            setEmailError(err.message);
            alert(err.message);
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
        window.location = "/";
        // window.location.reload();
      })
      .catch((err) => {
        console.log(err.message, "error");
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/email-already-in-use":
            setEmailError(err.message);
            alert(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            alert(err.message);
            break;
          default:
            setEmailError(err.message);
            alert(err.message);
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
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <Router>
          <StyledAppDiv style={{ minHeight: "100vh" }}>
            <Nav logout={logout} />
            {/* <LoginForm email={email} password={password} setEmail={setEmail} setPassword={setPassword} handleLogin={handleLogin} handleSignIn={handleSignIn} hasAccount={hasAccount} setHasAccount={setHasAccount} emailError={emailError} passwordError={passwordError} /> */}
            <Switch>
              <PrivateRoute exact path="/" component={Landing} />
              <PrivateRoute exact path="/todo" component={TodoPage} />
              <Route exact path="/login" component={LoginForm} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile" component={Profile} />
            </Switch>
          </StyledAppDiv>
        </Router>
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default App;
