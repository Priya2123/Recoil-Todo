import React from "react";
import { Grid, Typography } from "@material-ui/core";
import AddTodo from "./AddTodo";
import Todos from "./Todos";
import "./styles.css";
import TodoOo from "./TodoOo";

const TodoPage = () => {
  return (
    <>
      {/* <Grid container lg={12} md={12}>
        <Grid item lg={12} md={12}>
          <Typography style={{ color: "#e39ff6" }}>Todos</Typography>
          <span role="img" aria-label="flag">
            🏁
          </span>
        </Grid>
      </Grid> */}
      <h1 className="">
        {/* Todos{" "}
        <span role="img" aria-label="flag">
          🏁
        </span> */}
        <div className="list pt3 br3">
          <AddTodo />
          <TodoOo />
        </div>
      </h1>
    </>
  );
};

export default TodoPage;
