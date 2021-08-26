import React from "react";
import { RecoilRoot } from "recoil";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { Landing, Nav } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <div style={{ backgroundColor: "#000", height: "100vh" }}>
          {/* <Nav /> */}
          {/* <h1 className="">
            Todos{" "}
            <span role="img" aria-label="flag">
              🏁
            </span>
          </h1> */}
          <Nav />
          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>
          {/* <div className="list pt3 br3">
          <Todos />
          <AddTodo />
        </div> */}
        </div>
      </Router>
    </RecoilRoot>
  );
}

export default App;
