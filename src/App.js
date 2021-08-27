import React from "react";
import { RecoilRoot } from "recoil";
import { Landing, Nav, TodoPage, LoginForm } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

function App() {
  if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <RecoilRoot>
      <Router>
        <div style={{ backgroundColor: "#000", minHeight: "100vh" }}>
          <Nav />
          <Switch>
            <Route exact path="/" component={Landing} />
            <PrivateRoute exact path="/todo" component={TodoPage} />
            <Route exact path="/login" component={LoginForm} />
          </Switch>
        </div>
      </Router>
    </RecoilRoot>
  );
}

export default App;
